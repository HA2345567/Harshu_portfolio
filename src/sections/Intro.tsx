"use client"
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";


const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope,{
    once:true,

  });

  useEffect(() => {
    if (!scope.current) return; // Ensure `scope.current` exists
  
    try {
      // Create an instance of SplitType
      //ts-ignore
      const splitter = new SplitType(scope.current.querySelector("h2"), {
        types: "lines,words", // Correct type format
        tagName: "span",      // Wrap each word/line in a <span> tag
      });
  
      // Cleanup: Revert changes if SplitType instance supports it
      return () => {
        if (splitter) splitter.revert();
      };
    } catch (error) {
      console.error("Error initializing SplitType:", error);
    }
  }, [scope]);
  

  useEffect(() =>{
    if(inView){
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform:"translateY(0%)",
        },{
          duration: 0.5,
          delay:stagger(0.1),
        }
      )
     
    }
  },[inView, animate,scope])

  return <div>
    <section className="py-24 md:py-24 lg:py-40  mt-12 lg:mt-20" id="intro" ref={scope}>
      <div className="container  ">
      <h2 className="text-3xl 
       md:text-4xl lg:text-3xl ">
        I am a full-stack developer, with a stronger focus on backend development, passionate about creating seamless web applications. My interests include Web3 and blockchain, focusing on decentralized solutions, and DevOps, enhancing system efficiency and scalability. I thrive on solving challenges, learning continuously, and building innovative, reliable software that pushes the boundaries of technology.
      </h2>

      </div>
    </section>


  </div>;
};

export default Intro;
