import { MOCKED_POSTS } from "@/components/pages/BlogPage/BlogPage";
import { Container } from "@/components/UI/atoms/Container";
import { Typography } from "@/components/UI/atoms/Typography";

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
  return (
    <Container>
      <Typography as={"h1"}>Article: {slug}</Typography>
    </Container>
  );
}
