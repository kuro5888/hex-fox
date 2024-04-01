import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hexagon } from "./Hexagon";

it("Renders the Hexagon SVG component", async () => {
  //Arrange
  render(<Hexagon />);

  // Act
  const hexSvg = screen.getByTestId("SVG Container");

  // Assert
  expect(hexSvg).toBeInTheDocument();
});
