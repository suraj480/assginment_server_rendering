export const revalidate = 10; // Revalidate every 60 seconds
import { getFeaturedBlogs } from "../lib/getFeaturedBlogs";
import BlogPostCard from "../components/BlogPostCard";
export default async function FeaturedBlogPage() {
  const posts = await getFeaturedBlogs();
  const timeStamp = new Date().toLocaleTimeString();
  return (
    <div>
      {" "}
      <h1>ISR:- Incremental static generation</h1> <h2>Featured Blogs</h2>{" "}
      <p>
        <strong>Last generated at: </strong>
        {timeStamp}
      </p>{" "}
      {posts.map((post) => (
        <BlogPostCard key={post.id} {...post} />
      ))}
       
    </div>
  );
}
