import { canonicalUrl } from '@/constants/seo';
import BlogListingClient from './BlogListingClient';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest articles and tutorials from Osama Almashad about web development, UI/UX design, Next.js, and more.',
  alternates: {
    canonical: canonicalUrl('/blog'),
  },
};

export default function BlogPage() {
  return <BlogListingClient />;
}
