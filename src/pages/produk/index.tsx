import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id : string;
  name : string;
  price : number;
  size : string;
  category : string;
}

const kategori = () => {
    //const [isLogin, setIsLogin] = useState(false);
    //const {push} = useRouter();
    const [products, setProducts] = useState<ProductType[]>([]);

    const fetchProduk = () => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responsedata) => {
                setProducts(responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            });
    };

    useEffect(() => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responsedata) => {
                setProducts(responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            });
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            <button 
                onClick={fetchProduk} 
                style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}>
                Refresh Data
            </button>
            {products.map((products: ProductType) => (
                <div key={products.id} style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                    <h2>{products.name}</h2>
                    <p>Harga: {products.price}</p>
                    <p>Ukuran: {products.size}</p>
                    <p>Kategori: {products.category}</p>
                </div>
            ))}
        </div>
    );
};

export default kategori;