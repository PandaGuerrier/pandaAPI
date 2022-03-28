import styles from './css/Header.module.css'
import Link from "next/link";

export function Header() {
  return (
    <b>
      <Link href="/about">
        <a>
          <b className={styles.proposText}>À propos</b>
          </a>
      </Link>

      <Link href="/">
        <a>
          <b className={styles.homeText}>Home</b>
          </a>
      </Link>

      <Link href="/projets">
        <a>
          <b className={styles.projetsText}>Projets</b>
          </a>
      </Link>

    <div className={styles.forme}></div>
      </b>

    )
}