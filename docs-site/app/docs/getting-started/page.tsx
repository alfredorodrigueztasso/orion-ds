import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import CodeBlock from '@/components/CodeBlock';
import PackageManagerTabs from '@/components/PackageManagerTabs';

export const metadata = {
  title: 'Getting Started',
  description: 'Get started with Orion Design System in minutes',
};

const mdxComponents = {
  CodeBlock: async (props: any) => <CodeBlock {...props} />,
  PackageManagerTabs: (props: any) => <PackageManagerTabs {...props} />,
};

export default async function GettingStartedPage() {
  const source = await readFile(
    path.join(process.cwd(), 'content/docs/getting-started.mdx'),
    'utf-8'
  );

  return (
    <div className="docs-content docs-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
