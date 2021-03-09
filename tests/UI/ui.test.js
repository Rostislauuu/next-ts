import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Home from "../../pages/index";
import UITest from "../../pages/ui-test/index";

describe("Home", () => {
    it("renders without errors", () => {
        render(<Home />);
    })

    it("welcome text on home page is correct", () => {
        const { getByText } = render(<Home />);

        getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus necessitatibus dolor accusamus excepturi quas");
    })
})

describe("Test component", () => {
    it("should have label", () => {
        const { getByLabelText } = render(<UITest />);

        getByLabelText("Type something:")
    })

    it("should multiple props number by 2", () => {
        const { getByText } = render(<UITest num={20} />);

        getByText("Multiplied by 2 props number is equal to 40");
    })

    it("items functionality", () => {
        const { getByLabelText, getByText } = render(<UITest />);

        const input = getByLabelText("Type something:");

        fireEvent.change(input, { target: { value: "Bye" } })
        fireEvent.click(getByText("Add 1 item"));

        getByText("Bye");
        getByText("Add 2 item");
    })

    it("test checkbox interactivity", () => {
        const { getByTestId } = render(<UITest />);
        const checkbox = getByTestId("checkbox");

        expect(checkbox.checked).toEqual(false);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toEqual(true);
    })
})