import { MOCKED_POSTS } from "@/components/pages/BlogPage/constants";
import { SingleBlogPage } from "@/components/pages/SingleBlogPage";

export async function generateStaticParams() {
  const slugs = Array.isArray(MOCKED_POSTS)
    ? MOCKED_POSTS.map((post) => post.slug)
    : [];
  return slugs.map((slug) => ({ slug }));
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = MOCKED_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <SingleBlogPage post={post} />;
}
