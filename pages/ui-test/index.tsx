import React, { useState } from "react";

interface UITestProps {
    num: number
}

const UITests: React.FunctionComponent<UITestProps> = ({ num }) => {
    const [itemsList, setItemsList] = useState<Array<string>>([]);
    const [itemName, setItemName] = useState("");

    const multipliedPropsNum = num ? num * 2 : 0

    const handleSetItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        setItemName(e.target.value);
    };

    const handleSetItemsList = (): void => {
        setItemsList([...itemsList, itemName]);
        
        setItemName("");
    };

    return (
        <div>
            <label>Type something: 
                <input type="text" onChange={e => handleSetItem(e)} value={itemName} />
            </label>

            <button
                onClick={handleSetItemsList}
            >
                Add {itemsList.length + 1} item
            </button>

            <div>
                {itemsList.map((item, index) => {
                   return (
                      <p key={index}>{item}</p>
                   )
                })}
            </div>

            <input data-testid="checkbox" type="checkbox" />

            <p>Multiplied by 2 props number is equal to {multipliedPropsNum}</p>
        </div>
    )
};

export default UITests;