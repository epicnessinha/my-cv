import React from "react";
import { render, screen } from "@testing-library/react";
import JobItem from "./Card";

describe("JobItem component", () => {
  test("renders job item with the provided data", () => {
    const testTitle = "Software Engineer";
    const testCompany = "Test Company";
    const testDescription = "Developing web applications";
    const testStartDate = new Date(2020, 0, 1);

    render(
      <JobItem
        title={testTitle}
        company={testCompany}
        description={testDescription}
        startDate={testStartDate} school={""}      />
    );

    // Check if the title, company, and description elements are rendered correctly
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(`Company: ${testCompany}`)).toBeInTheDocument();
    expect(screen.getByText(`Job Functions: ${testDescription}`)).toBeInTheDocument();

    // Check if the "Started" text is rendered with the correct elapsed time
    const now = new Date();
    const diff = now.getTime() - testStartDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const elapsedTimeText = `Started: ${years} years, ${hours} hours, and ${minutes} minutes ago`;
    expect(screen.getByText(elapsedTimeText)).toBeInTheDocument();
  });
});
