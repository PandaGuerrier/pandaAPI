import styles from './css/Button.module.css'
import Link from "next/link";

export function Button() {
  return (
      <Link href="https://discord.gg/2wj9vYJPmq">
        <a className={styles.commander} target="_blank">
          <b className={styles.text}>Commander</b>
          </a>
      </Link>
    )
}