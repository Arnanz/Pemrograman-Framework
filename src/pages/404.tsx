import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <>
            {/* Tugas 1: Menambahkan Judul Halaman pada Tab Browser */}
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </Head>

            <div className={styles.error}>
                <img src="/page-not-found.png" alt="404" className={styles.error_image} />
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                
                {/* Tugas 3: Menambahkan tombol "Kembali ke Home" dengan navigasi Link */}
                <Link href="/" className={styles.button}>
                    Kembali ke Home
                </Link>
            </div>
        </>
    );
};

export default Custom404;