import footerlogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <>
      <footer className="border-t border-[#F1F5F9] bg-[#FFFFFF]">
        <div className="container mx-auto px-[72.5px] pt-16 pb-10 ">
          <div className="grid grid-cols-5 gap-22">
            {/* Brand */}
            <div className=' col-span-2'>
              <div>
                <img src={footerlogo} alt="" />
              </div>

              <p className="pt-4  text-[12px] leading-5 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building<br/> modern software.
              </p>

              <div className="pt-6 flex gap-5 text-[12px] font-semibold text-[#475569]">
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            
            <div>
              <h3 className="pb-5 text-[12px] font-bold uppercase text-[#0F172A]">
                Product
              </h3>

              <div className="space-y-3 grid grid-rows-3 text-[12px] text-[#64748B]">
                <a href="#">
                  Home
                </a>
                <a href="#">
                  Technologies
                </a>
                <a href="#" className="block">
                  Projects
                </a>
              </div>
            </div>

            
            <div>
              <h3 className="pb-5 text-[12px] font-bold uppercase text-[#0F172A]">
                Company
              </h3>

              <div className="space-y-3 grid grid-rows-3 text-[12px] text-[#64748B]">
                <a href="#">
                  About
                </a>
                <a href="#">
                  Contact
                </a>
                <a href="#">
                  Careers
                </a>
              </div>
            </div>

            <div>
              <h3 className="pb-5 text-[12px] font-bold uppercase text-[#0F172A]">
                Legal
              </h3>

              <div className="space-y-3 grid grid-rows-2 text-[12px] text-[#64748B]">
                <a href="#">
                  Privacy Policy
                </a>
                <a href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          
          <div className="mt-12 flex items-center justify-between border-t border-[#F1F5F9] pt-8 text-[12px] text-[#94A3B8]">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-6 text-[12px]">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
