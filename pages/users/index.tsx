import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../components/Layout";
import UserDetailRow from "../../components/UserDetailRow";

import { UserInterface } from "../../types/users/users";

import styles from "../../styles/users/users.module.scss";

interface UsersProps {
    users: UserInterface[]
}

const UsersList: React.FunctionComponent<UsersProps> =  ({ users }) => {
    const { t } = useTranslation("common");

    return (
        <Layout title="Users">
            <div className={styles.usersContainer}>
                {users.map(user => {
                    return (
                        <div key={user.id} className={`${styles.userContainer} card`}>
                            <UserDetailRow
                                label="Name"
                                info={user.name}
                             />
                            <UserDetailRow
                                label="Username"
                                info={user.username}
                             />
                            <p className={styles.userLink}>
                                <Link href={`/users/${user.id}`}>
                                    <a>{t("more-details")}</a>
                                </Link>
                            </p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData: UserInterface[] = await usersResponse.json();

    if (!usersData.length) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
            users: usersData
        }
    }
};

export default UsersList;