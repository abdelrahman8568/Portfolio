"use client";
import Image from "next/image";
import Link from "next/link";
import SplitText from "@/app/components/atoms/SplitText";
import {
  AnimationsBox,
  CertificatesBox,
  MainBox,
} from "@/app/components/atoms/MotionBox";
import { SubTitle } from "@/app/components/atoms/SubTitle";
import logo_1 from "@/public/images/services/service_1.jpg";
import logo_2 from "@/public/images/services/service_2.jpg";
import logo_3 from "@/public/images/services/service_3.jpg";
import logo_4 from "@/public/images/services/service_4.jpg";
import logo_5 from "@/public/images/services/service_5.jpg";
import logo_6 from "@/public/images/services/service_6.jpg";
import ShinyText from "@/app/components/atoms/ShinyText";

const servicesData = [
  { id: 1, img: logo_1, title: "Problem Solving" },
  { id: 2, img: "", title: "" },
  { id: 3, img: logo_2, title: "Landing Page" },
  { id: 4, img: "", title: "" },
  { id: 6, img: "", title: "" },
  { id: 5, img: logo_3, title: "Building E-commerce" },
  { id: 8, img: "", title: "" },
  { id: 7, img: logo_4, title: "Next.js Development" },
  { id: 9, img: logo_5, title: "Adobe Photoshop" },
  { id: 10, img: "", title: "" },
  { id: 11, img: logo_6, title: "Responsive Design" },
  { id: 12, img: "", title: "" },
];

const certificatesData = [
  {
    id: 1,
    href: "https://www.coursera.org/account/accomplishments/verify/9RZZ6ZKXSRHH",
    org: "meta",
    title: "Advanced React",
  },
  {
    id: 2,
    href: "https://www.coursera.org/account/accomplishments/verify/TLDL9GAFTDFR",
    org: "meta",
    title: "React Basics",
  },
  {
    id: 3,
    href: "https://www.coursera.org/account/accomplishments/verify/J2YBGNRBVZ83",
    org: "meta",
    title: "Programming with JavaScript",
  },
  {
    id: 4,
    href: "https://www.coursera.org/account/accomplishments/verify/WBJ9SHQERMGB",
    org: "meta",
    title: "Version Control",
  },
  {
    id: 5,
    href: "https://www.coursera.org/account/accomplishments/verify/A5WBE4VDRG5D",
    org: "meta",
    title: "HTML and CSS in depth",
  },
  {
    id: 6,
    href: "https://www.coursera.org/account/accomplishments/verify/HAJGRQ7PNXUK",
    org: "meta",
    title: "Introduction to Front-End Development",
  },
  {
    id: 7,
    href: "https://learn.udacity.com/view-certificate/nd000-fwd-t1",
    org: "udacity",
    title: "Web Development Challenger",
  },
];

export const Services = () => {
  return (
    <div className="mainContainer">
      <SplitText text="my services" />
      <MainBox>
        <SubTitle text={{ content: "The Best Services I Can Help You With" }} />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1.25 max-w-[90%] w-full">
          {servicesData.map((service) =>
            service.img === "" ? (
              <span className=" w-full h-full" key={service.id} />
            ) : (
              <AnimationsBox key={service.id}>
                <div className="w-full h-full flex text-center items-center justify-center relative">
                  <Image
                    src={service.img}
                    alt="Logo Image"
                    className="opacity-30 transition-all ease duration-700 z-999 rounded-[50%]  hover:rounded-none hover:shadow-[0_0_20px_2px_gray]"
                  />
                  <ShinyText
                    text={service.title}
                    disabled={false}
                    speed={3}
                    className="text-2xl md:text-[1.8rem] font-semibold md:w-45 absolute cursor-default flex justify-center"
                  />
                </div>
              </AnimationsBox>
            ),
          )}
        </div>
      </MainBox>
      <SplitText text="certificates" />
      {certificatesData.map((cert) => (
        <CertificatesBox key={cert.id}>
          <Link
            href={cert.href}
            target="_blank"
            className="group bg-dark w-full h-full no-underline text-start p-[5%] md:text-[22px] border border-primary overflow-hidden block"
          >
            <h3 className="py-2.5 text-gray font-bold uppercase duration-700 border-l-2 border-primary pl-[5vw] relative right-[5vw] transition-all ease-in-out group-hover:right-0 group-hover:pl-[3vw]">
              {cert.org}
            </h3>
            <h2 className="border-l-2 border-gray font-bold pl-[3vw] text-white">
              {cert.title}
            </h2>
          </Link>
        </CertificatesBox>
      ))}
    </div>
  );
};
