import { Fragment } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";

export default async function HomePage() {
  return (
    <Fragment>
      <Header />
      <Heading>
        <Hero />
      </Heading>
      <Platforms />
      <Footer />
    </Fragment>
  );
}
