import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import mainTheme from "../theme";
import HomePage from "../components/home";

export default function Home() {
  return (
    <ThemeProvider theme={mainTheme}>
        <HomePage />
    </ThemeProvider>
  );
}