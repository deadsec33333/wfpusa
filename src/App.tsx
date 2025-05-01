import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "./Landing";

export const App = (): React.ReactElement => {
  return (
    <Landing />
  );
}