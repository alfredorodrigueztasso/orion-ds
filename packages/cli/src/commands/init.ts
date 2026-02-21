/**
 * orion init — Initialize orion.json in the current project
 */

import * as fs from "node:fs";
import * as readline from "node:readline";
import { DEFAULT_CONFIG, saveConfig, findConfigPath } from "../lib/config.js";
import { installDeps } from "../lib/package-manager.js";
import * as logger from "../lib/logger.js";
import type { OrionConfig } from "../types.js";

function prompt(question: string, defaultVal: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(`${question} ${logger.dim(`(${defaultVal})`)} `, (answer) => {
      rl.close();
      resolve(answer.trim() || defaultVal);
    });
  });
}

export async function init(args: string[]): Promise<void> {
  const cwd = process.cwd();
  const yes = args.includes("--yes") || args.includes("-y");

  // Check if config already exists
  const existing = findConfigPath(cwd);
  if (existing) {
    logger.warn(`Config already exists at ${existing}`);
    if (!yes) {
      const answer = await prompt("Overwrite?", "no");
      if (answer !== "yes" && answer !== "y") {
        logger.info("Aborted.");
        return;
      }
    }
  }

  let config: OrionConfig;

  if (yes) {
    config = { ...DEFAULT_CONFIG };
  } else {
    const componentDir = await prompt(
      "Component directory:",
      DEFAULT_CONFIG.componentDir,
    );
    const brand = await prompt(
      "Brand (orion, red, deepblue, orange):",
      DEFAULT_CONFIG.brand,
    );
    const mode = await prompt(
      "Mode (display, product, app):",
      DEFAULT_CONFIG.mode,
    );

    config = {
      ...DEFAULT_CONFIG,
      componentDir,
      brand,
      mode,
    };
  }

  // Save config
  const configPath = saveConfig(config, cwd);
  logger.success(`Created ${configPath}`);

  // Check if @orion-ds/core is installed
  const hasCorePackage = fs.existsSync(`${cwd}/node_modules/@orion-ds/core`);
  if (!hasCorePackage) {
    logger.info("\n@orion-ds/core not found. Installing...");
    installDeps(["@orion-ds/core"], cwd);
  }

  // Final instructions
  logger.info("");
  logger.success("Orion CLI initialized!");
  logger.info("");
  logger.info(`Add this import to your entry file:`);
  logger.info(`  ${logger.cyan("import '@orion-ds/core/theme.css'")}`);
  logger.info("");
  logger.info(`Then add components:`);
  logger.info(`  ${logger.cyan("npx @orion-ds/cli add button card modal")}`);
}
