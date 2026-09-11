import logo from "../assets/logo-text.png";
import bnanerImage from "../assets/banner-stack.png";
const NavAndHeroSection = () => {
  return (
    <>
      <nav className="container mx-auto px-8 py-6 mb-24">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="DevStack.logo" />
          </div>

          <ul className="flex gap-8">
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

          <div className="flex gap-3">
            <button className="text-[#334155] text-[14px] font-medium leading-5 py-2.5 px-5 rounded-[9999px] border border-[#E5E7EB] cursor-pointer">
              Sign In
            </button>
            <button className="text-[#FFFFFF] text-[14px] font-medium leading-5 bg-[#D91B7E] py-2.5 px-5 rounded-[9999px] cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="container mx-auto px-8 mb-28">
        <div className="flex justify-between items-center">
          <div>
            <h1 className=" text-[60px] font-extrabold leading-15 pb-6 font-inter">
              Build Your Ideal <br />
              <span
                className=" bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-inter">Development Stack
              </span>
            </h1>
            <p className="text-[#475569] text-[18px] pb-13">
              Explore frontend, backend, database, and tooling options,<br/> compare
              them side by side, and put together the stack that fits your<br/> next project.
            </p>

            <div className="flex gap-3">
              <button className=" font-inter py-3 px-2.75 text-[14px] font-semibold text-[#FFFFFF] bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg cursor-pointer">Explore Technologies</button>
              <button className="font-inter py-3 px-10 text-[14px] font-semibold text-[#374151] border border-[#E5E7EB] rounded-lg cursor-pointer">Learn More</button>
            </div>
          </div>

          <div className="">
            <img src={bnanerImage} alt="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">

        <h1 className="font-inter text-4xl text-[#0F172A] font-extrabold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-extrabold">Technologies</span></h1>
        <p className="pt-2 text-[16px] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

      </section>
    </>
  );
};

export default NavAndHeroSection;
