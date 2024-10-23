import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaHandHoldingMedical } from "react-icons/fa6";

const skillsData = [
  {
    name: "Our Services",
    icon: <FaHandHoldingMedical  className="text-4xl text-primary" />,
    link: "#",
    description:
      "In foreign countries such as India, Thailand, and Turkey, hospitals that meet your expectations for treatment. 2. Connecting with a doctor who can address your illness and scheduling an appointment. 3. Travel arrangements and translation services. 4. Preparing a professional to assist you during your travels abroad. 5. Providing any necessary health consultation and medical advice services.  6. Offering referral services to the best medical professionals available abroad.",
    aosDelay: "0",
  },
  {
    name: "አገልግሎታችን",
    icon: <FaHandHoldingMedical  className="text-4xl text-primary" />,
    link: "#",
    description:
      "1-በውጭ ሀገር ህንድ ፣ ታይላንድ እና ቱርክ በሚገኙ ደረጃቸዉን የጠበቁ ሆስፒታሎች ህክምና ማመቻቸት 2-ለበሽታዎ የሚመጥን ሀኪም ጋር ማገናኘት እና ቀጠሮ ማስያዝ 3-የጉዞ ዝግጅት እና ትርጉም አገልግሎት 4-በውጭ ሀገር ጉዞዎ የሚያግዝ ባለሙያ ማዘጋጀት 5-ለማንኛውም የጤና እክል የህክምና የምክር አገልግሎት መስጠት 6-ውጭ ሀገር በሚገኙ ምርጥ የህክምና ባለሙያዎች በቢሯችን የማማከር አገልግሎት መስጠት",
    aosDelay: "300",
  },
  {
    name: "Tajaajiloota Keenya",
    icon: <FaHandHoldingMedical  className="text-4xl text-primary" />,
    link: "#",
    description:
      "1.Dalalka shisheeye sida Hindiya, Thailand, iyo Turkey, isbitaallada ka buuxa heerarka aad sugayso. 2.La xiriir dhakhtar ku habboon xanuunkaaga iyo ballan qabsashada. 3.Diyaarinta safarka iyo adeegyada tarjumaada.4.Diyaarinta xirfadle kaa caawinaya safarkaaga shisheeye.5. Bixinta talo caafimaad iyo adeegyada la-talin caafimaad ee loo baahan yahay.6. Bixinta adeegyo ku saabsan in la xariiriyo xirfadlayaasha caafimaadka ugu fiican ee dalalka shisheeye. ",
    aosDelay: "500",
  },
  {
    name: "Adeegyadeena",
    icon: <FaHandHoldingMedical  className="text-4xl text-primary" />,
    link: "#",
    description:
      "1. Biyya alaa akka Hindiyaa, Tayilaandii fi Turkkiitti, hospitaala sadarkaa barbaadame qabaniin yaala argachuuf. 2. Dhakataa xanuu keetiif siif mijatu wajjin walqunnamtii gochuu fi yeroo qopheessuu.  3. Qophii imalaa fi tajaajila hiikuu.  4. Biyya alaa imala keetiif gargaaraa ta’e qopheessuu.5. Tajaajila yaala fi gorsa fayyaa barbaachisu hundumaaf kennuu.6. Biyya alaa hospitaala ogeeyyii fayyaa olaanaa jiran waliin walqunnamtii gochuu.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              Specialties of Partner Hospitals // የህክምና ጉዞ ወደተለያዩ የአለም መዳረሻዎች 
            </p> */}
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            {/* <button className="primary-btn">Learn More</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
