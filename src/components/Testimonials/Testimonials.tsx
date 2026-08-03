import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    image:
      "https://ui-avatars.com/api/?name=Priya+Nair&background=1a1a1a&color=fff",
    name: "Priya Nair",
    jobtitle: "CEO, Fieldstone",
    text: "They pushed back on our first brief in the best way possible, and the result was a much stronger product.",
    audio: "priya-nair.mp3",
    social: "https://twitter.com",
  },
  {
    image:
      "https://ui-avatars.com/api/?name=Marcus+Lee&background=1a1a1a&color=fff",
    name: "Marcus Lee",
    jobtitle: "Marketing Director, Hollow & Co.",
    text: "Meticulous attention to detail, and they genuinely cared about how the site would perform, not just how it looked.",
    audio: "marcus-lee.mp3",
    social: "https://twitter.com",
  },
  {
    image:
      "https://ui-avatars.com/api/?name=Sofia+Reyes&background=1a1a1a&color=fff",
    name: "Sofia Reyes",
    jobtitle: "Founder, Reyes Studio",
    text: "We came in with almost nothing and left with a full identity system we're proud to put in front of clients.",
    audio: "sofia-reyes.mp3",
    social: "https://twitter.com",
  },
  {
    image:
      "https://ui-avatars.com/api/?name=Ethan+Cole&background=1a1a1a&color=fff",
    name: "Ethan Cole",
    jobtitle: "COO, Northbound",
    text: "Communication was clear from day one, and the final site converts noticeably better than our old one.",
    audio: "ethan-cole.mp3",
    social: "https://twitter.com",
  },
  {
    image:
      "https://ui-avatars.com/api/?name=Lena+Ford&background=1a1a1a&color=fff",
    name: "Lena Ford",
    jobtitle: "Founder, Ford & Vale",
    text: "Raag understood our tone immediately and translated it into something visually sharp without losing the warmth.",
    audio: "lena-ford.mp3",
    social: "https://twitter.com",
  },
  {
    image:
      "https://ui-avatars.com/api/?name=Omar+Siddiqui&background=1a1a1a&color=fff",
    name: "Omar Siddiqui",
    jobtitle: "Head of Growth, Vantage",
    text: "Straightforward, no fluff, and the kind of craftsmanship that made our stakeholders stop asking questions.",
    audio: "omar-siddiqui.mp3",
    social: "https://twitter.com",
  },
];

export const Testimonials = () => {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null,
  );
  const audioElementsRef = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    const elements = testimonials.map((testimonial) => {
      if (!testimonial.audio) return null;
      const audio = new Audio(`/audio/${testimonial.audio}`);
      audio.addEventListener("ended", () => setCurrentPlayingIndex(null));
      return audio;
    });
    audioElementsRef.current = elements;

    return () => {
      elements.forEach((audio) => audio?.pause());
    };
  }, []);

  const handlePlay = (index: number) => {
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const previous = audioElementsRef.current[currentPlayingIndex];
      previous?.pause();
      if (previous) previous.currentTime = 0;
    }

    const audio = audioElementsRef.current[index];
    if (audio) {
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
      setCurrentPlayingIndex(index);
    }
  };

  const handlePause = (index: number) => {
    const audio = audioElementsRef.current[index];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setCurrentPlayingIndex(null);
  };

  return (
    <div className="fi">
      <div className="blog-back">
        <div className="blog-head">Testimonials</div>
        <p className="blog-about">
          Many voices, one blog. A first impression of how we tick. Also: <br />
          Developments, trends and opinions that move us in digitalwerk, but
          also <br />
          beyond. And of course a look behind the scenes - about the development
          of our projects and <br />
          work come from.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isPlaying={currentPlayingIndex === index}
              onPlay={() => handlePlay(index)}
              onPause={() => handlePause(index)}
            />
          ))}
        </div>
      </div>
      <div className="footer">
        <p className="digi">Let's get physical or keep it digital</p>
        <h1 className="get-in">Get in touch</h1>
      </div>
      <div className="credit-row"></div>
    </div>
  );
};
