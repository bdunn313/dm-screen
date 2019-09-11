import React from "react";
import { render } from "@testing-library/react";

import NavLink from "./NavLink";
import { MemoryRouter } from "react-router";

describe("Nav Link", () => {
  it("will have a fallback if no test id is passed in", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavLink to="/" active={false}>
          Testing
        </NavLink>
      </MemoryRouter>
    );
    getByTestId("navlink");
  });
});
