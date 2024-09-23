// Test Pattern: AAA (Arrange, Act, Assert )

import { render, screen } from '@testing-library/react'; // render the sample
import App from '../../App';

// test case #1 a.k.a test, test spec
test("renders the text 'Welcome to Unit Testing!'", () => {
  // Act
  render(<App />);
  const successTextElement = screen.getByText("Welcome to Unit Testing!");

  // Assert
  expect(successTextElement).toBeInTheDocument();
});

