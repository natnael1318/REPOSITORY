import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import image from'../../assets/website/vector1.png'
import Contact from "../Footer/Contact"

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            Healway Medical Travel And Office Clinic
            </h1>
            <p className="text-sm">
              <a href="https://maps.app.goo.gl/bRbvVjfjYCqHJ1pG7?g_st=atm" className=" hover:text-primary duration-300"><IoLocationOutline /> Address - <br />
               Addis Ababa, Piassa, Beto commercial center 5th floor next to teklehaymanot hospital</a>
             <br />
             Call us - <a href="tel:+251953929206" className=" hover:text-primary duration-300">+251953929206</a>  // 
             <a href="tel:+251953929205" className=" hover:text-primary duration-300">+251953929205</a>     <br />
            Email - <a href="mailto:healway09@gmail.com" className=" hover:text-primary duration-300">healway09@gmail.com</a>  {" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/healway4?igsh=eWRzMHBydXg0d2cz&utm_source=qrE0">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/share/iE8bzDjG6ebHvrjD/?mibextid=LQQJ4d">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/hayat-mohammed-8b8861274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://healway09@gmail.com">
                
                <MdOutlineMail className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://t.me/+bHmIiqsI6uc1MzE0" 
              className="text-2xl hover:text-primary duration-300" > <FaTelegram /></a>

              <a href="https://maps.app.goo.gl/bRbvVjfjYCqHJ1pG7?g_st=atm" className="text-2xl hover:text-primary duration-300"><IoLocationOutline /></a>

              
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
          
                 
        <footer >
            <div className="flex justify-between items-center">
                <div>
                    {/* <p>&copy; 2024 Your Company Name</p> */}
                </div>
                <Contact />
            </div>
        </footer>
                      

              {/* <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            
              <div className="py-8 px-4 ">
              <div className=""> <img src={image} alt="vhvjvjv" />
                {/* <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
