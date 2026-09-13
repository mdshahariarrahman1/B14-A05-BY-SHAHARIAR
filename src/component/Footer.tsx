import footerlogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <>
      <footer className="border-t border-[#F1F5F9] bg-[#FFFFFF]">
        <div className="px-4 pt-8 pb-6 md:container md:mx-auto md:px-[72.5px] md:pt-16 md:pb-10 ">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-5 md:gap-22 md:text-left">
            <div className=' col-span-1 md:col-span-2'>
              <div className='flex justify-center md:block'>
                <img src={footerlogo} alt="" className='w-30 md:w-auto' />
              </div>

              <p className="pt-4  text-[12px] leading-5 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building<br className='hidden md:block'/> modern software.
              </p>

              <div className="flex justify-center gap-5 pt-5 pb-1 text-[12px] font-semibold text-[#475569] md:justify-start md:pt-6">
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            
            <div className='hidden md:block'>
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

            
            <div className='hidden md:block'>
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

            <div className='hidden md:block'>
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

          
          <div className="mmt-6 flex items-center justify-between border-t border-[#F1F5F9] pt-3 text-[11px] text-[#94A3B8] md:mt-12 md:pt-8 md:text-[12px]">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-4 text-[11px] md:gap-6 md:text-[12px]">
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
