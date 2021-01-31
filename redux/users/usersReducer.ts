import { ActionInterface } from "../../types/redux/actionInterface";
import { UserInterface } from "../../types/redux/userInterface";

const initialState: UserInterface = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    website: ""
};

export const users = (state = initialState, action: ActionInterface) => {
    switch(action.type) {
        default: return state;
    }
};