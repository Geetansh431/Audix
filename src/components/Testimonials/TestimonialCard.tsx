import React, { useState } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export interface Testimonial {
  image?: string;
  name?: string;
  jobtitle?: string;
  text?: string;
  audio?: string;
  social?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const createWaveVariants = (): Variants[] => {
  const variants: Variants[] = [];
  for (let i = 0; i < 40; i++) {
    variants.push({
      initial: {
        scaleY: 1,
        transition: { duration: 0.5 },
      },
      animate: {
        scaleY: [1, Math.random() * 1.2 + 1, 1],
        transition: {
          duration: Math.random() * 0.5 + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 0.5,
        },
      },
    });
  }
  return variants;
};

const waveVariants = createWaveVariants();

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isPlaying,
  onPlay,
  onPause,
}) => {
  const [barHeights] = useState(() =>
    waveVariants.map(() => Math.random() * 20 + 5)
  );

  const openInNewTab = (url?: string) => {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  };

  return (
    <div className="testimonial-card">
      {testimonial.social && (
        <div
          className="testimonial-social"
          onClick={() => openInNewTab(testimonial.social)}
        >
          <RiTwitterXLine size={18} />
        </div>
      )}
      <div className="testimonial-header">
        <img
          src={testimonial.image || "https://ui-avatars.com/api/?name=User"}
          alt={testimonial.name || "profile"}
          className="testimonial-avatar"
        />
        <div className="testimonial-identity">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-jobtitle">{testimonial.jobtitle}</span>
        </div>
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      {testimonial.audio && (
        <div className="testimonial-player">
          {!isPlaying ? (
            <span className="testimonial-play-btn" onClick={onPlay}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                />
              </svg>
            </span>
          ) : (
            <span className="testimonial-play-btn" onClick={onPause}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
                />
              </svg>
            </span>
          )}
          <div className="testimonial-waveform">
            {waveVariants.map((variant, i) => (
              <motion.div
                key={i}
                className="testimonial-wave-bar"
                style={{ height: `${barHeights[i]}px` }}
                variants={variant}
                initial="initial"
                animate={isPlaying ? "animate" : "initial"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
