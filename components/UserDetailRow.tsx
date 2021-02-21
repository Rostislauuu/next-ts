import React from "react";

import styles from "../styles/shared.module.scss";

interface UserDetailRowProps {
    label: string,
    info: string
}

const UserDetailRow: React.FunctionComponent<UserDetailRowProps> = ({ label, info }) => {
    return (
        <p className={styles.userInfoContainer}>
            {label}: {" "}
            <span className={styles.userDetail}>{info}</span>
        </p>
    )
};

export default UserDetailRow;