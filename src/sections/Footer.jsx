import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} alt="Logo" width={150} height={146} /></a>
          <p className=" font-montserrat leading-7 mt-6 text-base text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-8 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="flex items-center justify-center rounded-full bg-white w-12 h-12">
                <img src={icon.src} alt="" width={24} height={24} className="cursor-pointer"/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-md mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"><a href={link.name}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer mt-1">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
