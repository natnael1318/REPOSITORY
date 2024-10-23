import React from "react";
import yellowCar from "../../assets/website/team.jpeg";
import yellowCar1 from "../../assets/website/vector1.png";
import ImageSlider from "../Navbar/ImageSlider";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            {/* this my try to slide images */}
            {/* <div className="h-70 w-full max-w-xl mx-auto bg-gray-0 overflow-hidden">
          
        <h2 className="text-center mb-4"><ImageSlider /></h2>
        
      </div> */}
            {/* <div className="w-full sm:max-w-[280px] md:max-w-[700px]"> <ImageSlider /></div> */}
            {/* <div className="min-h-screen flex items-center justify-center  bg-gray-1">
            <div className="w-full sm:max-w-[280px] md:max-w-[500px] h-70 overflow-hidden bg-gray-1300">
                      <ImageSlider />
            </div>
             </div> */}
            {/* another 2ty */}
            <div className="min-h-32 flex items-center justify-center bg-gray-100">
              <div className="w-full sm:max-w-[300px] md:max-w-[900px] h-[400px] overflow-hidden bg-gray-1">
                <ImageSlider />
              </div>
            </div>
            {/* <img 
              src={ }
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[700px]"
            /> */}
            {/* <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div> */}
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Healway Medical Travel And{" "}
              <span className="text-primary">Office Clinic:</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="300">
              <b> Come and Visit Healway medical consultancy And Travel,</b>
              <br />
              We are exclusive agents for BLK Super Specialty Hospital's Fortis
              , Yashoda , Apollo hospitals in India; Acibadem Hospitals Turkey;
              WMC hospitals Thailand! <br />
              We will facilitate your abroad treatment with great
              professionalism. Our services include thourough discussion of the
              case with a medical doctor here and abroad ; continuous followup
              by medical professionals; arranging visa, transport and
              accommodation as well as finding fair price for excellent
              treatment.
            </h2>
            <h2 data-aos="fade-up" data-aos-delay="500">
              HEALWAY/የህክምና ማማከር እና ጉዞ ድርጅት በሀገራችን እና በውጭ በሚገኙ የህክምና ባለሙያዎች ተቋቁሞ
              ህንድ፣ቱርክ እና ታይላንድ ከሚገኙ ስመ ጥር እና ደረጃቸዉን የጠበቁ ሆስፒታሎች ጋር በመሆን ዘመናዊ
              የህጻናት፣ የነርቭ እና ሀብለ ሰረሰር፣የአጥንት እና የዳሌ፣ የልብ፣ የካንሰር ፣ የኩላሊት እና ጉበት
              ንቅለ ተከላ እንዲሁም የስነ ተዋልዶ የህክምና አገልግሎቶችን በፍጥነት እና በተመጣጣኝ ዋጋ የሚያገኙበትን
              መፍትሄ አቅርቦለወታል። <br />
              የውጭ ሀገር ህክምና ለማያስፈልገው ማንኛውም የጤና እክል፣ የተሻሉ ህክምና መዳረሻዎችን ፣ የመድሀኒት እና
              የህክምና ግብዓቶች መገኛዎችን፣ እንዲሁም የት እና በማን እንደሚታዪ ሊጠቁምዎት ከተለያዪ የህክምና ዘርፍ
              የተውጣጡ አጋሮቻችን በአካልም በስልክም ዝግጁ ሆነው ይጠብቁዎታል:: <br />
              ደንበኞቻችን ወደ ውጭ ከመላካቸው በፊት ከሚያክሟቸው ባለሙያዎች ጋር በዘመናዊ መንገድ ተገናኝተው
              የሚመካከሩበት ስርዓት ስላለን እና ፣ በመረጃ ላይ የተመሰረተ ዉሳኔ ስለሚዎስኑ ሀሳብ አይግባዎት።
              ሰራተኞቻችን የጉዞ ዝግጅትዎን እና የትርጉም አገልግሎትዎን፣ በፍጥነት እና በትህትና ይጨርሱልዎታል፤
              ካስፈለገም ባጠቃላይ የውጭ ጉዞዎ አጠገብዎ ሳይለዩ ያግዙዎታል።
            </h2>

            <h2 data-aos="fade-up" data-aos-delay="600">
              <b>Healway Medical Travel: </b>
              Asitti dhufaa Healway Medical Consultancy fi Travel argadhaa,
              Akkuma Taajjabdoota, BLK Super Specialty Hospital, Fortis,
              Yashoda, Apollo Hospitals Indiyaa; Acibadem Hospitals Tuurkiyyaa;
              WMC Hospitals Taayilandi! <br />
              Tajaajila yaala biyya alaatti siif qopheessina, ogummaa ol aanaa
              fi kabaja qabna. Tajaajiloonni keenya, haala qorannoo dhukkubsataa
              waliin mari’achu, doktoraa biyya keessaafi alaa wajjin; deeggarsa
              itti fufaa ogeeyyii fayyaa; viizaa, geejjiba, fi qubannaa
              qopheessuu, akkasumas baasiin gaarii ta’eef yaala gaarii barbaaduu
              dabalata.
            </h2>
            <h2 data-aos="fade-up" data-aos-delay="700">
              {" "}
              <b>Safarada Caafimaadka Healway:</b>
              Kaalay oo booqo Healway lataliyaha caafimaadka iyo safarka. Waxaan
              nahay wakiilo gaar ah oo ka tirsan: Isbitaalada BLK Super
              Specialty, Fortis, Yashoda, iyo Apollo ee Hindiya; Isbitaalada
              Acibadem ee Turkiga; Isbitaalada WMC ee Thailand! <br />
              <br />
              Waxaan fududeyn doonaa daaweyntaada dibadda si xirfad leh.
              Adeegyadeena waxaa ka mid ah wada hadal qoto dheer oo ku saabsan
              kiiskaaga oo ay la socdaan dhakhaatiir halkan iyo dibadda; kormeer
              joogto ah oo ay sameeyaan xirfadlayaal caafimaad; qabanqaabinta
              fiisaha, gaadiidka iyo hoyga, iyo sidoo kale helitaanka qiimo
              macquul ah oo loogu talagalay daaweyn heer sare ah.
            </h2>
            {/* <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
