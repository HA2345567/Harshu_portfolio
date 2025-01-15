"use client"
import { FC, useRef } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from 'next/image';
import { useScroll,motion, useTransform } from "motion/react";
import Testimonial from "@/components/Testimonial";
import { div } from "motion/react-client";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset: ['start end', 'end start']
  })

  const transformTop = useTransform(scrollYProgress,[0,1] ,['0%','15%']);
   const transformBottom = useTransform(scrollYProgress,[0,1] ,['0%','-15%']);
  const testimonialIndex =0;
  return (
    <section className="section" id="testimonials">
      <h2 className="text-4xl md:text-7xl flex flex-col overflow-hidden tracking-tighter" ref={titleRef} >
        <motion.span className="whitespace-nowrap"style={{
        x: transformTop,
        }}>Some nice words from my past cleints </motion.span>
        <motion.span className="whitespace-nowrap self-end text-red-orange-500" style={{
          x: transformBottom,
        }}>Some nice words from my past cleints </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 ">
          {testimonials.map(({name, company, role, quote, image, imagePositionY},index)=> index ===testimonialIndex && (
           <div></div>
          ))}
        </div>
        <div className="flex mt-6 gap-4 L:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</button>
        </div>

      </div>
    </section>
  )
};

export default Testimonials;
