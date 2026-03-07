import { useRouter } from "next/router";

const BlogDetailPage = () => {
  const { query } = useRouter(); // Mengambil objek query dari router
  return (
    <div>
      <h1>Detail Blog</h1>
      <p>Slug yang diakses: {query.slug}</p> 
    </div>
  );
};
export default BlogDetailPage;