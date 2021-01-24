import styles from "../styles/not-found-page.module.scss";

import Layout from "../components/Layout";

function CustomErrorPage() {
    return (
        <Layout title="Ooooops">
            <div className={styles.errorPageContainer}>
                <div className={styles.errorPageContent}>
                    <h1 className={styles.errorPageHeading}>
                        Page is not found
                    </h1>

                    <h2 className={styles.errorPageSubheading}>
                        Visit some of existing pages from navigation
                    </h2>
                </div>
            </div>
        </Layout>
    )
};

export default CustomErrorPage;