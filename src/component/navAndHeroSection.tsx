import logo from "../assets/logo-text.png";
import bnanerImage from "../assets/banner-stack.png";
import { IoMenu } from "react-icons/io5";
const NavAndHeroSection = () => {
  return (
    <>
      <nav className="sticky top-0 bg-white w-full px-4 py-3 mb-10 md:container md:mx-auto md:px-8 md:py-6 md:mb-24">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <IoMenu className="text-[#64748B] text-2xl" />
          </div>

          <div>
            <img className="w-25 md:w-auto" src={logo} alt="DevStack.logo" />
          </div>

          <ul className="hidden md:flex gap-8">
            <li className="font-jakarta text-[16px] font-semibold leading-5 text-[#DB2777]">
              <a href="#">Home</a>
            </li>
            <li className="font-jakarta text-[16px] font-semibold leading-5">
              <a href="#">Technologies</a>
            </li>
            <li className="font-jakarta text-[16px] font-semibold leading-5">
              <a href="#">Projects</a>
            </li>
            <li className="font-jakarta text-[16px] font-semibold leading-5">
              <a href="#">About</a>
            </li>
            <li className="font-jakarta text-[16px] font-semibold leading-5">
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex gap-2 md:gap-3">
            <button className="text-[#334155] text-[10px] font-medium leading-4 py-2 px-3 rounded-[9999px] border border-[#E5E7EB] cursor-pointer md:text-[14px] md:leading-5 md:py-2.5 md:px-5">
              Sign In
            </button>
            <button className="text-[#FFFFFF] text-[10px] font-medium leading-4 bg-[#D91B7E] py-2 px-3 rounded-[9999px] cursor-pointer md:text-[14px] md:leading-5 md:py-2.5 md:px-5">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="w-full px-4 mb-16 md:container md:mx-auto md:px-8 md:mb-28">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className=" text-[30px] font-extrabold leading-9 pb-4 md:text-[60px] md:leading-15 md:pb-6">
              Build Your Ideal <br />
              <span className=" bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-inter">
                Development Stack
              </span>
            </h1>
            <p className="text-[#475569] text-[14px] pb-8 md:text-[18px] md:pb-13">
              Explore frontend, backend, database, and tooling options,
              <br className="hidden md:block" /> compare them side by side, and put together the stack that
              fits your
              <br /> next project.
            </p>

            <div className="flex justify-center gap-3 md:justify-start">
              <button className=" py-3 px-3 text-[12px] font-semibold text-white bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg cursor-pointer md:text-[14px] md:px-2.75">
                Explore Technologies
              </button>
              <button className=" py-3 px-7 text-[12px] font-semibold text-[#374151] border border-[#E5E7EB] rounded-lg cursor-pointer md:text-[14px] md:px-10">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <img src={bnanerImage} alt="" className=" w-auto h-74 md:w-auto" />
          </div>
        </div>
      </section>

      <section className="w-full px-4 mb-10 md:container md:mx-auto md:px-0">
        <h1 className=" text-[24px] leading-7 text-[#0F172A] font-extrabold md:text-4xl md:leading-normal">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-extrabold">
            Technologies
          </span>
        </h1>
        <p className="pt-1 text-[12px] leading-4 text-[#64748B] whitespace-nowrap md:pt-2 md:text-[16px] md:leading-normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>
    </>
  );
};

export default NavAndHeroSection;
