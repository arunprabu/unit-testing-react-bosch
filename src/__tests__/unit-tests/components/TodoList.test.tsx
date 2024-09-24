import { render, screen } from "@testing-library/react";
import TodoList from "../../../components/TodoList";
import mockFetch from "./mockFetch";

describe("TodoList Component", () => {
  beforeEach(() => {
    // By default, jest.spyOn also calls the spied method
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the TodoList page", async () => {
    render(<TodoList />);

    expect(screen.getByTestId("h2El")).toHaveTextContent(/Todos/);

    // divs with role listitem will be generated after ajax call success.
    // so lets await
    const todoItems = await screen.findAllByRole("listitem"); /// finding li elements
    expect(todoItems).toHaveLength(2);
  });
});
