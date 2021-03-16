import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "../styles/components/navigation.module.scss";

export default function Navigation() {
    const router = useRouter();
    const { t } = useTranslation("common");

    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navigationContainer}>
                <Link href="/">
                    <a className={styles.navigationLink}>{t("home")}</a>
                </Link>
                <Link href="/posts">
                    <a className={styles.navigationLink}>{t("posts")}</a>
                </Link>
                <Link href="/todos">
                    <a className={styles.navigationLink}>{t("todos")}</a>
                </Link>
                <Link href="/users">
                    <a className={styles.navigationLink}>{t("users")}</a>
                </Link>
            </nav>

           <Link href="/" locale={router.locale === "en" ? "fr" : "en"}>
                <button className={styles.languageSwitcher}>
                    {router.locale === "en" ? "fr" : "en"}
                </button>
           </Link>
        </div>
    )
};