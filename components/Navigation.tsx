import Link from "next/link";

import styles from "../styles/components/navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={styles.navigationContainer}>
            <Link href="/">
                <a className={styles.navigationLink}>Home</a>
            </Link>
            <Link href="/about">
                <a className={styles.navigationLink}>First</a>
            </Link>
            <Link href="/about">
                <a className={styles.navigationLink}>Second</a>
            </Link>
            <Link href="/about">
                <a className={styles.navigationLink}>Third</a>
            </Link>
            <Link href="/about">
                <a className={styles.navigationLink}>Fifth</a>
            </Link>
            <Link href="/about">
                <a className={styles.navigationLink}>Sixth</a>
            </Link>
        </nav>
    )
};