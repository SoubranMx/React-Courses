import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Soubran</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.title}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href={"/"}>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
