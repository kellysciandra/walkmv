import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import styles from "./layout.module.css";
import Navbar from "./navbar";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
  NProgress.inc();
});
Router.events.on("routeChangeComplete", () => NProgress.done(true));
Router.events.on("routeChangeError", () => NProgress.done(true));

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>walkmv</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/376f802ef0.js" crossOrigin="anonymous"></script>
    </Head>
    <Navbar/>
    {children}
  </div>
);

export default Layout;
