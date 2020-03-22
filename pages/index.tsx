import Layout from '../components/BasicLayout'
import Link from '@/NextLink';

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <Link href='/about' as='/about'>
        <a>about</a>
      </Link>
    </Layout>
  );
}