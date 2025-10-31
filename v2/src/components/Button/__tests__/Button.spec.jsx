import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithTheme } from "unit-tests/utils/renderWithTheme";
import Button from "../Button";

const onClick = jest.fn();

function mountComponent() {
  return renderWithTheme(<Button onClick={onClick}>Test</Button>
    );
}

afterEach(cleanup);

describe("[components] Button", () => {
    const {container} = mountComponent();

  it("should render Button", () => {
    expect(container).toBeTruthy();
    expect(container).toHaveTextContent("Test")
  });
});
