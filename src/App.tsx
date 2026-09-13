import { Suspense, useState } from "react";
import NavAndHeroSection from "./component/navAndHeroSection"
import Main from "./component/main";
import type { DavType } from "./davStackType";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DevStackDataPromis = async():Promise <DavType[]>=>{
  const res = await fetch('/devstackApi.json');
  const data = await res.json();
  return data
}

console.log(DevStackDataPromis())

function App() {

  const [DavStack] =  useState(()=> DevStackDataPromis())
  

  return (
    <>
      <NavAndHeroSection/>

      <Suspense fallback={<p className=" text-5xl font-bold text-center">loading...</p>}>
      <Main DavStack={DavStack} />
      </Suspense>

      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
