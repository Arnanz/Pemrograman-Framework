import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const { push } = useRouter();
    
    const handlerLogin = () => {
        // Navigasi imperatif: Login -> Product [cite: 498]
        push("/produk");
    };

    return (
        <div>
            <h1>Halaman Login</h1>
            {/* Cukup gunakan satu tombol yang paling best practice  */}
            <button onClick={handlerLogin}>Login</button>
            <br />
            {/* Navigasi Link: Login -> Register  */}
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default halamanLogin;