import { FC } from "react";
import image1 from "@/assets/images/New_Pic01.png";
import image2 from "@/assets/images/project-1.jpg";
import image3 from "@/assets/images/iphone1.png";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "SmartInvoice - Professional Invoice Management System",
    image: image1,
    href: "https://smartinvoice-rosy.vercel.app/", // Add the appropriate link here
  },
  {
    name: "Food Ordering App",
    image: image2,
    href: "https://hungerbull-fronted-982j.onrender.com/", // Add the appropriate link here
  },
  {
    name: "Iphone 3-d Project",
    image: image3,
    href: "https://iphone-3d-project.vercel.app/",
  },
];

const Projects: FC = () => {
  return (
    <div>
      <section className="section" id="projects">
        <div className="container">
          <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
          <div className="mt-10 md:mt-16 lg:mt-20">
            {projects.map(({ name, image, href }) => (
              <a
                href={href}
                key={name}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-t last:border-b border-stone-400 py-6 md:py-8 flex flex-col relative group/project">
                  {/* Background overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300"></div>
                  <div className="relative">
                    {/* Mobile Image */}
                    <div className="aspect-video md:hidden">
                      <Image
                        src={image}
                        alt={`${name} image`}
                        className="size-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                      <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl">
                          {name}
                        </h3>
                      </div>
                      <div className="relative">
                        {/* Hover Image */}
                        <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 lg:group-hover/project:scale-110 group-hover/project:scale-100 transition-all duration-500 z-10">
                          <Image
                            src={image}
                            alt={`${name} image`}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Hover Arrow Animation */}
                      <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                        <div className="size-6 overflow-hidden">
                          <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
