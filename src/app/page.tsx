import { Suspense } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Body />
      <Footer />
    </Suspense>
    </>
  )
}