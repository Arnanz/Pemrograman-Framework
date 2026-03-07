import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query; // slug akan berbentuk array [cite: 22, 257]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parameter URL (Catch-All)</h1>
      <p>Daftar Segmen URL:</p>
      <ul>
        {/* Melakukan mapping array slug menjadi list [cite: 495] */}
        {Array.isArray(slug) ? (
          slug.map((item, index) => (
            <li key={index}>Segmen ke-{index + 1}: {item}</li>
          ))
        ) : (
          <li>{slug}</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;