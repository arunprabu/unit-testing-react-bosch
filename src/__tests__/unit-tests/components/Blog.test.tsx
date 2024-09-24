import { render, screen } from "@testing-library/react";
import Blog from "../../../components/Blog";
import axios from "axios";

// Mocks 
const mockPosts = [
  {
    id: 1,
    title: "Virat Kohli -- The Greatest Athlete of All Time",
    body: "The Legend of Virat Kohli, the greatest athlete of all time, has been in the limelight for a long time now. He is a true legend in the world of sports and has inspired many people to dream big and achieve their goals.",
  },
  {
    id: 2,
    title: "How to master the art of public speaking",
    body: "Public speaking is a skill that can be learned and mastered with practice and dedication. It is a powerful tool that can help you to communicate your ideas and thoughts effectively and persuasively. In this article, we will explore the art of public speaking and provide you with tips and techniques to help you become a confident and effective speaker.",
  },
];

// supply the dummy data as if we got it from rest api 
jest.mock("axios");  // mocking the axios module
// Add this type assertion to properly type the mocked axios
const mockedAxios = axios as jest.Mocked<typeof axios>; // only in ts project this line is needed 

/* Note: when we mock a module, we can't use the module directly. 
Refer package.json for the transformIgnorePatterns 
*/

describe("Blog", () => {
  // Positive test case
  it("should render the blog post title", async() => {
    mockedAxios.get.mockResolvedValue({ data: mockPosts });
    render(<Blog />);

    const postTitleElement = await screen.findByText(
      "Virat Kohli -- The Greatest Athlete of All Time"
    ); 
    expect(postTitleElement).toBeInTheDocument();
  });

  it("should render the blog post content", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPosts });
    render(<Blog />);

    const postContentElement = await screen.findByText(
      "Public speaking is a skill that can be learned and mastered with practice and dedication. It is a powerful tool that can help you to communicate your ideas and thoughts effectively and persuasively. In this article, we will explore the art of public speaking and provide you with tips and techniques to help you become a confident and effective speaker."
    );
    expect(postContentElement).toBeInTheDocument();
  });

  // TODO: try to mock the axios module and test the error case -- Negative test case

});