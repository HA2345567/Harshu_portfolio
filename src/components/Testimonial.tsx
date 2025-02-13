

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Testimonial =(props: {
  quote:string;
  name: string;
  role: string;
  company:string;
  imagePositionY: number;
  image:string| StaticImport;
  className?: string;

}& HTMLAttributes<HTMLDivElement>)=>{

  const {quote , name, role, company, imagePositionY, image,className, ...rest}  = props;
return (
 <div  className={twMerge("grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center" , className)}{...rest}>
              <div className="aspect-square col-span-2 md:aspect-[9/16] ">
                <Image src={image} alt={name} className="object-cover size-full "style={{
                objectPosition:`50% ${imagePositionY * 100}%`}}/>
              </div>
              <blockquote className="col-span-3">
                <div className="text-3xl md:text-5xl mt-8 md:mt-0 lg:text-6xl">
                <span>&ldquo;</span>
               <span >{quote}</span>
               <span>&rdquo;</span>
               </div>
               <cite className="mt-4 md:mt-8 md:text-lg not-italic block lg:text-xl">{name} , {role} at {company} </cite>
              </blockquote>

            </div>
)
 
}

export default Testimonial;