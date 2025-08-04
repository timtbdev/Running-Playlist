import DataTable from "@/components/DataTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { musicData } from "@/constants/music-data";
import { Fragment } from "react";

export default async function HomePage() {
  return (
    <Fragment>
      <Header />
      <Heading>
        <Hero />
      </Heading>
      <Main>
        <DataTable data={musicData} />
      </Main>
      <Footer />
    </Fragment>
  );
}
