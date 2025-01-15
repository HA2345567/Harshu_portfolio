"use client";
import Button from "@/components/Button";
import { useRef, useCallback } from "react";
import { useInView } from "motion/react";
import { FC, useEffect } from "react";

const navItems = [
  {
    href: "#Home",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

function useTextRevealAnimation(): {
  scope: React.RefObject<HTMLElement>;
  enteranceAnimation: () => void;
} {
  const scope = useRef<HTMLElement>(null);

  const enteranceAnimation = useCallback(() => {
    if (scope.current) {
      // Example animation logic: Adding a class or triggering a CSS animation
      scope.current.style.opacity = "1";
      scope.current.style.transform = "translateY(0)";
      scope.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }
  }, []);

  return { scope, enteranceAnimation };
}

const Footer: FC = () => {
  const { scope, enteranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      enteranceAnimation();
    }
  }, [inView, enteranceAnimation]);

  const handleClickNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="section" id="contact">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl mt-8 md:text-7xl lg:text-8xl font-extralight opacity-0 transform translate-y-4"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                variant="secondary"
                className="mt-8 border border-red-orange-500"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                }
              >
                <a href="mailto:bhardwajharsh0312@gmail.com">
                  bhardwajharsh0312@gmail.com
                </a>
              </Button>
            </div>
            <div>
              <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Harsh Bhardwaj &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
