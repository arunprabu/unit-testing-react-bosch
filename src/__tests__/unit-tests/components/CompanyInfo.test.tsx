// AAA (Arrange, Act, Assert )

import { render, screen } from "@testing-library/react"; // render the sample
import React from "react";
import CompanyInfo from "../../../components/CompanyInfo"; // arraging the sample

// Test suite = group of related test specs
describe("CompanyInfo", () => {
  // test case #1 a.k.a test, test spec
  it("has heading 'Company Info'", () => {
    render(<CompanyInfo />);

    const heading = screen.getByText(/Company info/i);
    expect(heading).toBeTruthy();
  });

  // test case #2
  // Prop Testing
  it("receives props properly and displays them", () => {
    render(
      <CompanyInfo
        companyName="IBM"
        foundedYear="1950"
        employeesCount="23457"
      />
    );
    const companyElement = screen.getByText("IBM");
    expect(companyElement).toBeDefined();

    const foundedYearElement = screen.getByText("1950");
    expect(foundedYearElement).toBeDefined();

    const employeesCountElement = screen.getByText("23457");
    expect(employeesCountElement).toBeDefined();
  });

  // Snapshot Testing -- old one
  // it("renders the snapshot correctly", () => {
  //   const tree = renderer.create(
  //     <CompanyInfo
  //       companyName="IBM"
  //       foundedYear="1950"
  //       employeesCount="23457"
  //     />
  //   ).toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

  it("renders the snapshot correctly -- modern approach", () => {
    const { asFragment } = render(
      <CompanyInfo
        companyName="IBM"
        foundedYear="1950"
        employeesCount="23457"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
