import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import CodeBlock from '@/components/CodeBlock';

export const metadata = {
  title: 'Theming',
  description: 'Brands, dark mode, and visual modes in Orion Design System',
};

const mdxComponents = {
  CodeBlock: async (props: any) => <CodeBlock {...props} />,
};

export default async function ThemingPage() {
  const source = await readFile(
    path.join(process.cwd(), 'content/docs/theming.mdx'),
    'utf-8'
  );

  return (
    <div className="main-content docs-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
