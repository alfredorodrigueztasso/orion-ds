import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import CodeBlock from '@/components/CodeBlock';
import PackageManagerTabs from '@/components/PackageManagerTabs';

export const metadata = {
  title: 'Installation',
  description: 'Complete setup guide for Orion across different frameworks',
};

const mdxComponents = {
  CodeBlock: async (props: any) => <CodeBlock {...props} />,
  PackageManagerTabs: (props: any) => <PackageManagerTabs {...props} />,
};

export default async function InstallationPage() {
  const source = await readFile(
    path.join(process.cwd(), 'content/docs/installation.mdx'),
    'utf-8'
  );

  return (
    <div className="docs-content docs-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
