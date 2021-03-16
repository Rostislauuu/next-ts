import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../components/Layout";

import { TodosInterface } from "../../types/todos/todos";
import { UserInterface } from "../../types/users/users";

import styles from "../../styles/todos/todos.module.scss";

interface TodosProps {
    todos: TodosInterface[],
    users: UserInterface[]
};

const Todos: React.FunctionComponent<TodosProps> = ({ todos, users }) => {
    const [usersTodos, setUsersTodos] = useState(todos.slice(0, 25));

    const triggerCheckbox = (e: React.ChangeEvent<HTMLInputElement>, todosId: number): void => {
        const updatedTodos: TodosInterface[] = usersTodos.map(todo => {
            if (todo.id === todosId) return { ...todo, completed: e.target.checked };
            else return todo;
        });
        
        setUsersTodos(updatedTodos);
    };

    const handleDeleteTodo = (todosId: number): void => {
        setUsersTodos(usersTodos.filter(todo => todo.id !==todosId));
    };

    return (
        <Layout title="Todos">
            <div className={styles.todosContainer}>
                {usersTodos.map(todo => {
                    const userTodo: UserInterface | undefined = users.find(user => user.id === todo.userId);

                    return (
                        <div key={todo.id} className={`${styles.todosItem} card`}>
                            <div className={styles.topInfo}>
                                <p className={styles.titleContainer}>
                                    <span
                                     className={styles.todosTitle}
                                     onClick={() => handleDeleteTodo(todo.id)}
                                    >
                                        {todo.title}
                                    </span>
                                </p>
                                <input
                                 type="checkbox"
                                 className={styles.todosChackbox}
                                 defaultChecked={todo.completed}
                                 onChange={(e) => triggerCheckbox(e, todo.id)}
                                />
                            </div>
                            <hr/>
                            <p className={styles.todosUser}>{userTodo?.username}</p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todosData: TodosInterface[] = await todosResponse.json();

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData: UserInterface[] =  await usersResponse.json();

    if (!todosData.length) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
            todos: todosData,
            users: usersData
        }
    }
}

export default Todos;