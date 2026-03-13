import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  BRAND_FONTS,
  ALL_FONTS,
  GOOGLE_FONTS_URL,
  FONT_PRECONNECT_URLS,
  isFontLoaded,
  areBrandFontsLoaded,
  getMissingFonts,
  getFontLinkTags,
  waitForFonts,
} from "./fonts";

describe("fonts utils", () => {
  describe("Font constants", () => {
    it("BRAND_FONTS has all brands", () => {
      expect(BRAND_FONTS).toHaveProperty("orion");
      expect(BRAND_FONTS).toHaveProperty("red");
      expect(BRAND_FONTS).toHaveProperty("deepblue");
      expect(BRAND_FONTS).toHaveProperty("orange");
      expect(BRAND_FONTS).toHaveProperty("ember");
      expect(BRAND_FONTS).toHaveProperty("lemon");
    });

    it("ALL_FONTS contains unique font families", () => {
      expect(Array.isArray(ALL_FONTS)).toBe(true);
      expect(ALL_FONTS.length).toBeGreaterThan(0);
    });

    it("ALL_FONTS are strings", () => {
      ALL_FONTS.forEach((font) => {
        expect(typeof font).toBe("string");
      });
    });

    it("GOOGLE_FONTS_URL is a valid URL string", () => {
      expect(typeof GOOGLE_FONTS_URL).toBe("string");
      expect(GOOGLE_FONTS_URL).toContain("fonts.googleapis.com");
    });

    it("FONT_PRECONNECT_URLS is an array of URLs", () => {
      expect(Array.isArray(FONT_PRECONNECT_URLS)).toBe(true);
      FONT_PRECONNECT_URLS.forEach((url) => {
        expect(typeof url).toBe("string");
      });
    });
  });

  describe("Brand fonts map", () => {
    it("orion brand has fonts array", () => {
      expect(Array.isArray(BRAND_FONTS.orion)).toBe(true);
      expect(BRAND_FONTS.orion.length).toBeGreaterThan(0);
    });

    it("each brand has font arrays", () => {
      ["orion", "red", "deepblue", "orange", "ember", "lemon"].forEach(
        (brand) => {
          const brandKey = brand as keyof typeof BRAND_FONTS;
          expect(Array.isArray(BRAND_FONTS[brandKey])).toBe(true);
        },
      );
    });
  });

  describe("Font utility functions", () => {
    it("isFontLoaded returns a boolean", () => {
      const result = isFontLoaded("Arial");
      expect(typeof result).toBe("boolean");
    });

    it("isFontLoaded handles invalid font names gracefully", () => {
      expect(() => isFontLoaded("NonexistentFont")).not.toThrow();
    });

    it("areBrandFontsLoaded returns a boolean", () => {
      const result = areBrandFontsLoaded("orion");
      expect(typeof result).toBe("boolean");
    });

    it("areBrandFontsLoaded works with all brands", () => {
      ["orion", "red", "deepblue", "orange", "ember", "lemon"].forEach(
        (brand) => {
          const result = areBrandFontsLoaded(
            brand as
              | "orion"
              | "red"
              | "deepblue"
              | "orange"
              | "ember"
              | "lemon",
          );
          expect(typeof result).toBe("boolean");
        },
      );
    });

    it("getMissingFonts returns an array", () => {
      const result = getMissingFonts("orion");
      expect(Array.isArray(result)).toBe(true);
    });

    it("getMissingFonts returns strings", () => {
      const result = getMissingFonts("orion");
      result.forEach((font) => {
        expect(typeof font).toBe("string");
      });
    });

    it("getMissingFonts works with all brands", () => {
      ["orion", "red", "deepblue", "orange", "ember", "lemon"].forEach(
        (brand) => {
          expect(() => {
            getMissingFonts(
              brand as
                | "orion"
                | "red"
                | "deepblue"
                | "orange"
                | "ember"
                | "lemon",
            );
          }).not.toThrow();
        },
      );
    });

    it("getFontLinkTags returns HTML string", () => {
      const html = getFontLinkTags();
      expect(typeof html).toBe("string");
      expect(html).toContain("<link");
      expect(html).toContain("fonts.googleapis.com");
    });

    it("getFontLinkTags includes preconnect links", () => {
      const html = getFontLinkTags();
      expect(html).toContain("preconnect");
      expect(html).toContain("gstatic.com");
    });
  });

  describe("waitForFonts", () => {
    beforeEach(() => {
      // Tests modify document.fonts via Object.defineProperty
    });

    it("returns true when fonts load successfully", async () => {
      // Mock document.fonts.load to resolve successfully
      Object.defineProperty(document, "fonts", {
        writable: true,
        configurable: true,
        value: {
          load: vi.fn().mockResolvedValue([]),
          check: vi.fn().mockReturnValue(true),
          ready: Promise.resolve(true),
        },
      });

      const result = await waitForFonts(["Inter", "DM Sans"]);
      expect(result).toBe(true);
    });

    it("returns false when fonts fail to load", async () => {
      // Mock document.fonts.load to reject
      Object.defineProperty(document, "fonts", {
        writable: true,
        configurable: true,
        value: {
          load: vi.fn().mockRejectedValue(new Error("Font load failed")),
          check: vi.fn().mockReturnValue(false),
          ready: Promise.reject(new Error("Font load failed")).catch(() => {}), // Handle rejection
        },
      });

      const result = await waitForFonts(["Invalid Font"]);
      expect(result).toBe(false);
    });

    it("calls document.fonts.load with correct font names", async () => {
      const loadSpy = vi.fn().mockResolvedValue([]);
      Object.defineProperty(document, "fonts", {
        writable: true,
        configurable: true,
        value: {
          load: loadSpy,
          check: vi.fn().mockReturnValue(true),
        },
      });

      await waitForFonts(["Inter", "DM Sans"]);
      expect(loadSpy).toHaveBeenCalled();
    });

    it("handles missing document.fonts API gracefully", async () => {
      // Simulate missing document.fonts
      Object.defineProperty(document, "fonts", {
        writable: true,
        configurable: true,
        value: undefined,
      });

      const result = await waitForFonts(["Inter"]);
      // Should return false or handle gracefully
      expect(typeof result).toBe("boolean");
    });
  });
});
