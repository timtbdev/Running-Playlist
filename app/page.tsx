import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Table from "@/components/Table";
import { Fragment } from "react";

export default async function HomePage() {
  return (
    <Fragment>
      <Header />
      <Heading>
        <Hero />
      </Heading>
      <Main>
        <Table />
      </Main>
      <Footer />
    </Fragment>
  );
}
