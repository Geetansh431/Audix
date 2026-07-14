import "./Manifesto.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Manifesto = () => {
  return (
    <div className="s">
      <div className="mani">Manifesto</div>
      <div className="text-way">
        <p className="about">
          We don't build for one side of the table. We build <br />
          the room where brands, creators, and everyday <br />
          people actually want to show up — because trust <br />
          isn't given here, it's earned in the open.
        </p>
        <p className="about-2">
          Brands find an audience that isn't sold to, it's <br />
          spoken to. Influencers find a stage that rewards <br />
          honesty over hype. Followers find voices worth <br />
          following, not feeds to scroll past. And companies <br />
          find a platform built to last, not just to launch.
          <br />
          <br />
          One space, four reasons to stay, and it actually <br />
          works.
          <br />
        </p>
      </div>
      <div className="oval">
        <DotLottieReact
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        />
      </div>
    </div>
  );
};
