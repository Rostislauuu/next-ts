import React from "react";
import Head from "next/head";

import styles from "../styles/components/layout.module.scss";

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
    title
}) => {
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
};

export default Layout;