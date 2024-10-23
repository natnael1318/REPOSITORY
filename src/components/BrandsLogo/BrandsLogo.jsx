import React from "react";
import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";
import team from "../../assets/website/vector1.png";
import { IoLocationOutline } from "react-icons/io5";
import brand6 from "../../assets/brands/apollo.svg";
import brand7 from "../../assets/brands/OLC1.svg";
import brand8 from "../../assets/brands/th1.svg";
import brand9 from "../../assets/brands/BLK.svg";
const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-18 mt-16 sm:mt-0">
        <h1 className="text-center"></h1>
       
        <div className="py-6 md:px-40 flex flex-wrap items-center justify-evenly gap-3">
    <img src={brand9} alt="" className="w-16 md:w-17" />
    <img src={brand6} alt="" className="w-12 md:w-16" />
    <img src={brand7} alt="" className="w-12 md:w-16" />
    <img src={brand8} alt="" className="w-12 md:w-16" />
    {/* <img src={Brand5} alt="" className="w-12 md:w-16" /> */}
</div>
      </div>
    </>
  );
};

export default BrandsLogo;
  {/* <img src={team} alt="" /> */}
          {/* <h1 data-aos="fade-up" data-aos-delay="300">• Visa assistance <br />
• Assistance with finding right doctors <br />
• Assistance with medical opinions <br />
• Appointment scheduling services <br />
• Facilitating talking with doctors <br /> before departure and arrival  </h1>
<h1 data-aos="fade-up" data-aos-delay="500">
• Patient attendant services <br />
• Pick up and drop facility from and to the airport <br />
• Facilitating travel within the country <br />
• Interpreter services <br />
• Keeping the family posted about the treatment <br />
• Arranging trips to preferred destinations <br />
</h1> */}
