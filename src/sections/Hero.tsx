
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/harshu_portfolioPic.jpg";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, useScroll, useTransform } from "motion/react";
import { stagger } from "motion";


const Hero: FC = () => {
  const [titleScope, titleAnimate]= useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);


  const {scrollYProgress} = useScroll({
    target: scrollingDiv,
    offset:['start end', 'end end']
  })

  const portraitWidth = useTransform(scrollYProgress,[0,1], ['100%', '240%'])

  useEffect(()=>{
    new SplitType(titleScope.current,{
      types:"lines,words",
      tagName: "span",
    });
    titleAnimate(titleScope.current.querySelectorAll('.word'),{
      transform: 'translateY(0)',
    },{
      duration:0.5,
      delay: stagger(0.2),
    })
  },[titleAnimate,titleScope])


  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0" >
        <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
         className=" text-5xl  mt-40 md:text-6xl lg:text-7xl "ref={titleScope}>Crafting digital expreiences through code and creative design</motion.h1>
        <div className="flex flex-col md:flex-row md:items-center  mt-10  items-start gap-6">
          <motion.div 
          initial={{opacity: 0, y:"100%"}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:0.5,
            delay:1.75,
          }}>

          <Button variant="secondary"  className="border border-red-orange-500"iconAfter={
            <div className="overflow-hidden size-5">
              <div className="  h-5 w-10 flex  group-hover/button:-translate-x-1/2 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
            
            </div>
            </div>
          }>
            <a href="https://github.com/HA2345567" target="_blank">
    <span> View My Work</span>
        
</a>
          </Button>
          </motion.div>
          <motion.div
          initial={{opacity: 0, y:"100%"}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:0.5,
            delay:2.2,
          }}>
          <Button variant="text">Let&apos;s Talk</Button>
          </motion.div>
        </div>
      </div>

        </div>
        <div className="md:col-span-5 relative">
        <motion.div className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full" style={{
          width: portraitWidth,

        }}>
        <Image src={heroImage} alt="My portrait" className="size-full object-cover"/>
      </motion.div>
        

        </div>
      </div>
      <div className="md:h-[200vh] " ref={scrollingDiv}>

      </div>
     
      
    </section>
  );
};

export default Hero;
