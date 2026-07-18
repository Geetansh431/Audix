import "./About.css";
import Z from "../../assets/chirag/IMG_5037.mp4";

export const About = () => {
  return (
    <div className="f">
      <h2 className="about-agency">
        We meet our clients at eye level. We analyze and <br />
        question the existing, think differently and new. <br />
        With a focus on strategy and creativity, we find <br />
        bold solutions. This leads not only to <br />
        outstanding ideas - but to great successes. <br />
        <br />
        We don't just do communication - we shape it. <br />
        Only then can we create a meaningful <br />
        conversation that ultimately leads to the goal. <br />
        <br />
      </h2>
      <div className="agency">Chirag</div>
      <div className="agency-right">Arora</div>
      <div className="agen">
        <video loop muted autoPlay className="agency-vid">
          <source src={Z} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
