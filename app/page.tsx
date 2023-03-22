import Link from 'next/link';
import Content from './content.mdx';

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <p>This is the page.</p>

      <Content />

      <Link href="/broken">Break</Link>
    </div>
  );
}