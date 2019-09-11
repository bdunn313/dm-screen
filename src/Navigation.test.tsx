import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";

import Navigation, { getActivePage } from "./Navigation";

describe("Navigation", () => {
  it("can render proper app navigation", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Navigation />
        <Route path="/characters">
          <div data-testid="characters-page">Characters Page</div>
        </Route>
        <Route path="/">
          <div data-testid="home-page">Home Page</div>
        </Route>
      </MemoryRouter>
    );
    const homeLink = getByTestId("navlink-Home");
    const charactersLink = getByTestId("navlink-Characters");
    // Land on characters page
    fireEvent.click(charactersLink);
    getByTestId("characters-page");
    fireEvent.click(homeLink);
    getByTestId("home-page");
  });
  it("can get the current route page", () => {
    const mockRoutes = [
      { pathname: "/", title: "Home" },
      { pathname: "/characters", title: "Characters" }
    ];
    const expectedRoute = mockRoutes[1];
    expect(getActivePage("/characters", mockRoutes)).toEqual(expectedRoute);
  });
  it("will return a default if nothing matches", () => {
    const mockRoutes = [
      { pathname: "/", title: "Home" },
      { pathname: "/characters", title: "Characters" }
    ];
    const expectedRoute = { pathname: "/", title: "" };
    expect(getActivePage("/does-not-match", mockRoutes)).toEqual(expectedRoute);
  });
});
