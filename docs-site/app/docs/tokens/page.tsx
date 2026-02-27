import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import CodeBlock from '@/components/CodeBlock';

export const metadata = {
  title: 'Design Tokens',
  description: 'Complete reference for all Orion design tokens',
};

const mdxComponents = {
  CodeBlock: async (props: any) => <CodeBlock {...props} />,
};

export default async function TokensPage() {
  const source = await readFile(
    path.join(process.cwd(), 'content/docs/tokens.mdx'),
    'utf-8'
  );

  return (
    <div className="docs-content docs-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
