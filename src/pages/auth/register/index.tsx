import Link from "next/link";
import styles from "./register.module.css"; // Pastikan nama file CSS-nya sesuai [cite: 120]

const TampilanRegister = () => {
  return (
    <div className={styles.register}> 
      {/* Menggunakan styles.register sesuai dengan class di CSS Anda */}
      <h1>Halaman Register</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Daftar</button>
      </div>

      <p style={{ marginTop: "15px" }}>
        Sudah punya akun? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default TampilanRegister;