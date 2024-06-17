import Image from "next/image";
import Header from "./components/header/Header";
import HomeCom from "./components/content/Home";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
   <div className="">
    <Header />
    <HomeCom />
    <Footer />
   </div>
  );
}
