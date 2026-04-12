"use client";
import "../../styles/services.css";
import logo_1 from "@/public/images/services/service_1.jpg";
import logo_2 from "@/public/images/services/service_2.jpg";
import logo_3 from "@/public/images/services/service_3.jpg";
import logo_4 from "@/public/images/services/service_4.jpg";
import logo_5 from "@/public/images/services/service_5.jpg";
import logo_6 from "@/public/images/services/service_6.jpg";
import Image from "next/image";
import Link from "next/link";
import SplitText from "@/app/components/atoms/SplitText";
import {
  AnimationsBox,
  CertificatesBox,
  MainBox,
} from "@/app/components/atoms/MotionBox";

export const Services = () => {
  return (
    <div className="mainContainer">
      <SplitText text="my services" />
      <MainBox name="servicesContainer">
        <p>The Best Services I Can Help You With</p>
        <div className="logoContainer">
          <AnimationsBox name="left">
            <Image src={logo_1} alt="Logo Image" className="servicesLogo" />
            <h6>Problem Solving</h6>
          </AnimationsBox>
          <AnimationsBox name="left">
            <Image src={logo_2} alt="Logo Image" className="servicesLogo" />
            <h6>Landing Page</h6>
          </AnimationsBox>
          <AnimationsBox name="right">
            <Image src={logo_3} alt="Logo Image" className="servicesLogo" />
            <h6>Building E-commerce </h6>
          </AnimationsBox>
          <AnimationsBox name="right">
            <Image src={logo_4} alt="Logo Image" className="servicesLogo" />
            <h6>Next.js Development</h6>
          </AnimationsBox>
          <AnimationsBox name="left">
            <Image src={logo_5} alt="Logo Image" className="servicesLogo" />
            <h6>Adobe Photoshop</h6>
          </AnimationsBox>
          <AnimationsBox name="left">
            <Image src={logo_6} alt="Logo Image" className="servicesLogo" />
            <h6>Responsive Design</h6>
          </AnimationsBox>
        </div>
      </MainBox>
      <SplitText text="certificates" />
      <div>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/9RZZ6ZKXSRHH"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>Advanced React</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/TLDL9GAFTDFR"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>React Basics</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/J2YBGNRBVZ83"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>Programming with JavaScript</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/WBJ9SHQERMGB"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>Version Control</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/A5WBE4VDRG5D"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>HTML and CSS in depth</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/verify/HAJGRQ7PNXUK"
            }
            target="_blank"
            className="servicesLink"
          >
            <h3>meta</h3>
            <h2>Introduction to Front-End Development</h2>
          </Link>
        </CertificatesBox>
        <CertificatesBox>
          <Link
            href={"https://learn.udacity.com/view-certificate/nd000-fwd-t1"}
            target="_blank"
            className="servicesLink"
          >
            <h3>udacity</h3>
            <h2>Web Development Challenger</h2>
          </Link>
        </CertificatesBox>
      </div>
    </div>
  );
};
