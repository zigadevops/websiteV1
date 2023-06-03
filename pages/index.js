import Header from "../src/components/Header";
import EarlyAccess from "../src/components/EarlyAccess";
import EarlyAccess2 from "../src/components/EarlyAccess2";
import NFTDrop from "../src/components/NFTDrop";
import Roadmap from "../src/components/Roadmap";
import Team from "../src/components/Team";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
        rel='stylesheet'
      />
      <Header />
      <EarlyAccess />
      <NFTDrop />
      <Roadmap />
      <Team />
      <EarlyAccess2 />
      <Footer />
    </>
  );
}
