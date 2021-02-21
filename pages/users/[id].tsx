import React from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import UserDetailRow from "../../components/UserDetailRow";

import { UserInterface } from "../../types/users/users";

import styles from "../../styles/users/users.module.scss";

interface UserProps {
    user: UserInterface
}

const User: React.FunctionComponent<UserProps> = ({ user }) => {
    return (
        <Layout title={user.name}>
            <div className={`${styles.singleUserContainer} card`}>
                <div className={styles.singleUserBlock}>
                    <p>Info</p>
                    <UserDetailRow
                        label="Name"
                        info={user.name}
                     />
                    <UserDetailRow
                        label="Username"
                        info={user.username}
                     />
                    <UserDetailRow
                        label="Email"
                        info={user.email}
                     />
                    <UserDetailRow
                        label="Website"
                        info={user.website}
                     />
                </div>

                <div className={styles.singleUserBlock}>
                    <p>Address</p>
                    <UserDetailRow
                        label="City"
                        info={user.address.city}
                    />
                    <UserDetailRow
                        label="Street"
                        info={user.address.street}                
                    />
                </div>

                <div className={styles.singleUserBlock}>
                    <p>Job</p>
                    <UserDetailRow
                        label="Company name"
                        info={user.company.name}
                    />
                </div>
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
    const userData: UserInterface = await userResponse.json();

    if (!Object.keys(userData).length) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            user: userData
        }
    }
};

export default User;