import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import I480 from "../../assets/blog/480.jpeg";
import I490 from "../../assets/blog/490.jpeg";
import I500 from "../../assets/blog/500.jpeg";
import I600 from "../../assets/blog/MRI.jpeg"
const BlogsData = [
  {
    id: 1,
    image: I480,
    title: "Paediatric Cardiology & Congenital Heart Disease",
    description:
      "Liver Transplantation & Regenerative Medicine, Kidney & Urology , Internal Medicine Ophthalmology, Critical Care Pediatric Gastroenterology ,Hepatobiliary and Liver Transplantation",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: I490,
    title: "Cardio Thoracic & Vascular Surgery",
    description:
      "Neurosurgery ,Orthopedics,Surgical Oncology, Robotic Surgery , ENT & Head Neck Surgery ,GI & Bariatric Surgery , Plastic, Aesthetic & Reconstructive Surgery"
     ,
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: I600,
    title: "Medical &Radiation Oncology",
    description:
      "Gynaecology and Gynecological Oncology, Integrative Medicine & Holistic Therapies, Pathology and Laboratory Medicine, Physiotherapy and Rehabilitation, Mental Health & Quality of Life, Radiology & Nuclear Medicine, Dental Medicine, Respiratory & Sleep Medicine, Endocrinology & Diabetes, Rheumatology &  Immunology ",
    author: "Someone",
    date: "April 22, 2022",
  },
 
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Specialities     </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          {/* <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
