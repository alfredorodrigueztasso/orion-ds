import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import CodeBlock from '@/components/CodeBlock';

export const metadata = {
  title: 'CLI Documentation',
  description: 'Orion CLI for copying components into your project',
};

const mdxComponents = {
  CodeBlock: async (props: any) => <CodeBlock {...props} />,
};

export default async function CliPage() {
  const source = await readFile(
    path.join(process.cwd(), 'content/docs/cli.mdx'),
    'utf-8'
  );

  return (
    <div className="docs-content docs-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
