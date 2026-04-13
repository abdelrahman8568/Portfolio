"use client";

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
import { SubTitle } from "@/app/components/atoms/SubTitle";
import { font2 } from "@/public/fonts/font";

const SOCIAL_LINKS = [
  { id: 1, href: "mailto:abdelrahman.mohamed8568@gmail.com", src: gmail },
  { id: 2, href: "https://github.com/abdelrahman8568", src: github },
  {
    id: 3,
    href: "https://www.linkedin.com/in/abdelrahman8568/",
    src: linkedin,
  },
  { id: 4, href: "https://wa.me/+201110828568", src: whatsapp },
];
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [btnText, setBtnText] = useState("SEND MESSAGE");
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setBtnText("SENDING...");
      emailjs
        .sendForm("service_k5883fe", "template_61id30q", form.current, {
          publicKey: "QTN-KBHw-RxW4xxUB",
        })
        .then(() => {
          setBtnText("Message sent successfully ✔");
          setFormData({ name: "", email: "", number: "", message: "" });
          setTimeout(() => setBtnText("SEND MESSAGE"), 5000);
        })
        .catch((error) => {
          console.error("Failed to send message:", error);
          setBtnText("FAILED TO SEND");
          setTimeout(() => setBtnText("SEND MESSAGE"), 5000);
        });
    }
  };

  return (
    <div className="mainContainer">
      <SplitText text="contact" />
      <MainBox>
        <SubTitle text={{ content: "Let's Connect" }} />
        <ScrollReveal
          baseOpacity={0.3}
          enableBlur={false}
          baseRotation={0}
          blurStrength={100}
          textClassName="pb-5"
        >
          If you have any suggestion, project or even you want to say “hello”,
          please fill out the form below and I will reply you shortly.
        </ScrollReveal>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className={`${font2} flex w-[95%] md:w-[80%] flex-col gap-5 z-10`}
        >
          <div className="flex w-full justify-between max-md:flex-col gap-5">
            <InputField
              type="text"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              type="number"
              name="number"
              label="Phone"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <InputField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            type="textarea"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value={btnText}
            disabled={btnText === "SENDING..."}
            className="h-17.5 w-full cursor-pointer border-2 border-gray bg-transparent text-[1.5em] uppercase text-white transition-all duration-500 hover:border-primary hover:text-primary disabled:opacity-50"
          />
        </form>
        <div>
          <div className="flex w-full flex-wrap items-center justify-around pt-[10%]">
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.id} href={link.href} target="_blank">
                <Image
                  src={link.src}
                  alt="Social Icon"
                  className="h-37.5 w-37.5 rounded-full opacity-70 transition-all duration-500 hover:border hover:border-dashed hover:border-primary hover:bg-[var(--dc)] hover:scale-110 hover:rotate-[360deg]"
                />
              </Link>
            ))}
            <Image
              src={man}
              alt="Man illustration"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </MainBox>
    </div>
  );
};
const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
  required = false,
}: any) => {
  const isTextarea = type === "textarea";
  const InputTag = isTextarea ? "textarea" : "input";

  return (
    <div className="group relative h-full w-full ">
      <InputTag
        type={isTextarea ? undefined : type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer [&::-webkit-inner-spin-button]:appearance-none [-webkit-autofill]:bg-amber-800! w-full bg-black border border-gray outline-none text-white pl-[5%] transition-all duration-500 max-md:text-[1.5em] focus:border-primary ${
          isTextarea
            ? "h-45 resize-none pt-[2%] text-[2em]"
            : "h-17.5 text-[2em]"
        }`}
      />
      <span
        className={`pointer-events-none absolute left-0 top-0 bottom-0 m-5! text-gray text-2xl bg-black h-fit transition-all ease-in-out peer-hover:-top-8.5 peer-focus:-top-8.5 peer-focus:text-primary ${value !== "" && "-top-8.5! text-primary!"}`}
      >
        {label}
      </span>
    </div>
  );
};
