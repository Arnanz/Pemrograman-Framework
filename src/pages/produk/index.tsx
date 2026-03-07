import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk";
const produk = () => {
    const [isLogin, setIsLogin] = useState(false); // Simulasi status login [cite: 463, 464]
    const { push } = useRouter(); // [cite: 466, 467]

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login"); // Redirect otomatis jika belum login [cite: 471, 473]
        }
    }, [isLogin, push]); // TAMBAHKAN isLogin dan push di sini agar efek sinkron

    // PROTEKSI RENDER: Agar konten "Produk User Page" tidak sempat terlihat jika belum login
    if (!isLogin) {
        return null; 
    }

    return (
        <div>
            <h1>Produk User Page</h1>
        </div>
    );
};

export default function Produk() {
  return <TampilanProduk />;
}