"use client";
import "../../styles/contact.css";
import { font2 } from "@/public/fonts/font";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import gmail from "@/public/images/contact/google.png";
import github from "@/public/images/contact/github.png";
import linkedin from "@/public/images/contact/linkedin.png";
import whatsapp from "@/public/images/contact/whatsapp.png";
import man from "@/public/images/contact/man.png";
import SplitText from "@/app/components/atoms/SplitText";
import ScrollReveal from "@/app/components/atoms/ScrollReveal";
import { MainBox } from "@/app/components/atoms/MotionBox";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("SEND MESSAGE");
  const form = useRef<HTMLFormElement>(null);
  const Submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.current !== null) {
      name &&
        email &&
        message &&
        (setSuccess("Message sent successfully ✔"),
        setName(""),
        setNumber(""),
        setEmail(""),
        setMessage(""));
      emailjs.sendForm("service_k5883fe", "template_61id30q", form.current, {
        publicKey: "QTN-KBHw-RxW4xxUB",
      });
    }
  };
  setTimeout(() => {
    setSuccess("SEND MESSAGE");
  }, 5000);

  return (
    <div className="mainContainer">
      <SplitText text="contact" />
      <MainBox name="contactContainer">
        <h4>Let's Connect</h4>
        <ScrollReveal
          baseOpacity={0.3}
          enableBlur={false}
          baseRotation={0}
          blurStrength={100}
        >
          If you have any suggestion, project or even you want to say “hello”,
          please fill out the form below and I will reply you shortly.
        </ScrollReveal>
        <form onSubmit={Submit} ref={form} className={font2}>
          <div className="info">
            <div className="name">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className={`formSpan ${name && "activeMessage"}`}>
                Name
              </span>
            </div>
            <div className="phone">
              <input
                type="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <span className={`formSpan ${number && "activeMessage"}`}>
                Phone
              </span>
            </div>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={`formSpan ${email && "activeMessage"}`}>
              Email
            </span>
          </div>
          <div className="message">
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className={`formSpan ${message && "activeMessage"}`}>
              Message
            </span>
          </div>
          <input type="submit" value={success} className="btn" />
        </form>
        <MainBox name="links">
          <Link
            href={"mailto:abdelrahman.mohamed8568@gmail.com"}
            target="_blank"
          >
            <Image src={gmail} alt={""} className="logo" />
          </Link>
          <Link href={"https://github.com/abdelrahman8568"} target="_blank">
            <Image src={github} alt={""} className="logo" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/abdelrahman8568/"}
            target="_blank"
          >
            <Image src={linkedin} alt={""} className="logo" />
          </Link>
          <Link href={"https://wa.me/+201110828568"} target="_blank">
            <Image src={whatsapp} alt={""} className="logo" />
          </Link>
          <Image src={man} alt={""} className="man" />
        </MainBox>
      </MainBox>
    </div>
  );
};
