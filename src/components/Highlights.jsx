import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";
import { watchImg, rightImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        start: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#title",
        start: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div
          ref={scrollRef}
          className="mb-12 md:flex w-full items-end justify-between"
        >
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
