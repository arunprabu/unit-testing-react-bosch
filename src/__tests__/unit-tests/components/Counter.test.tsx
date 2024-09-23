import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../../../components/Counter";
import React from "react";

describe("Counter", () => { 
  // Testing state
  it("should display the count with default value 0", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("counterValue");
    expect(countElement.textContent).toBe("Count: 0");
  });

  // Testing state and event
  it("should increment the count when Increment button is clicked", () => {
    render(<Counter />);

    // verify the initial value of count is 0
    const countElement = screen.getByTestId("counterValue");
    expect(countElement.textContent).toBe("Count: 0");

    // find the increment button
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    // click on it through program
    fireEvent.click(incrementButton);

    // verify the count is incremented by 1
    expect(countElement.textContent).toBe("Count: 1");

    // click on it
     fireEvent.click(incrementButton);
    // verify the count is incremented by 2
    expect(countElement.textContent).toBe("Count: 2");

    // click on it * 5 times
    for(let i = 0; i < 5; i++){
      fireEvent.click(incrementButton);
    }
    // verify the count is incremented to 7 
    expect(countElement.textContent).toBe("Count: 7");
  });
});

// TODO: Test the Decrement button 
