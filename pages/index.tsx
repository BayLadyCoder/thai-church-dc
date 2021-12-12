import type { NextPage } from "next";
import Head from "next/head";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </>
  );
};

export default Home;
