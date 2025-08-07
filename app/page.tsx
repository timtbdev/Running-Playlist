import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainTable from "@/components/Table/MainTable";
import MUSIC_DATA from "@/constants/music-data";

export default function HomePage() {
  return (
    <>
      <Header />
      <Heading>
        <Hero />
      </Heading>
      <Main>
        <MainTable data={MUSIC_DATA} />
      </Main>
      <Footer />
    </>
  );
}
