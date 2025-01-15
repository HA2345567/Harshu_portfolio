"use client"
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website & which tech-stack will used?",
    answer:
      "It depends on the complexity of the website and the scope of the project. Tech-stack - Next.js, Framer Motion",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Which sports do you like and who is you favourite player?",
    answer:
      "I like to play cricket,football,table tennis, kabbadi etc, & Cristiano Ronaldo, Virat Kohli, Ab Deviliers are those my favourite players",
  },
  {
    question: "Which type of Songs & Movies do you like?",
    answer:
      " I like some songs like - Hero by Charlie Puth etc , some fav singers- Charlie Puth, Travis Scott, Drake,Arijit Singh etc, In talking about Movies My fav - Interstaller, Good will hunting, Shawshank Redemption, Memeto etc... ",
  },
];

const FAQs: FC = () => {
  const [SelectedIndex, setSelectedIndex] = useState<number|null>(null);
  return (
    <section className="section" id="faqs"> 
      <div className="container">
        <h2 className="text-4xl md:text-7xl">FAQ's</h2>
        <div className="mt-10 md:mt-20">
          {faqs.map(({question, answer}, faqIndex)=>(
            <div key={question} className="border-t border-stone-400 border-dotted py-6 last:border-b  md:py-8 lg:py-10 relative isolate group/faq"onClick={()=>{
              if(faqIndex === SelectedIndex){
                setSelectedIndex(null);
              }else{
                setSelectedIndex(faqIndex)
              }}

            }>
              <div className={twMerge("absolute bottom-0 left-0   h-0 w-full bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700 group-hover/faq:lg:px-8 ",faqIndex === SelectedIndex  && "h-full")}></div>
              <div className={twMerge("flex items-center justify-between gap-4 tansition-all duration-700",faqIndex === SelectedIndex && "lg:px-8")}>


                <div className="text-2xl md:text-3xl lg:4xl ">{question}</div>
                <div className={twMerge("inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-200", faqIndex === SelectedIndex && 'rotate-45')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>

              </div>
              <AnimatePresence>
              {faqIndex === SelectedIndex && (
              <motion.div 
              className="overflow-hidden lg:px-8 "
              initial= {{height:0}}
              animate={{height:'auto'}}
              exit={{height: 0}}
              transition={{duration: 0.7 , ease: 'easeOut'}}>
               
                <p className="text-xl mt-4">{answer}</p>
                
              </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
         
      </div>
    </section>
  );
};

export default FAQs;
