import Link from "next/link";

import styles from "../styles/components/navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={styles.navigationContainer}>
            <Link href="/">
                <a className={styles.navigationLink}>Home</a>
            </Link>
            <Link href="/posts">
                <a className={styles.navigationLink}>Posts</a>
            </Link>
            <Link href="/todos">
                <a className={styles.navigationLink}>Todos</a>
            </Link>
            <Link href="/users">
                <a className={styles.navigationLink}>Users</a>
            </Link>
        </nav>
    )
};