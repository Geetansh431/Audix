import "./home.css";
import A from "../../assets/img/bg.mp4";

const Home = () => {
  return (
    <div className="h">
      <div className="h-main">
        <div className="logo">itsraag</div>

        <nav className="langu">
          <a href="https://www.instagram.com/itsraag/" className="Button">
            INSTA
          </a>
          <a href="https://www.youtube.com/@itsraag/shorts" className="Button">
            YT
          </a>
        </nav>
        <div className="heading">
          We don't do <br />
          advertising
        </div>
        <div className="view">
          <a href="#" className="Button-view">
            View Manifesto
          </a>
        </div>
        <div className="date">2021 — where it began</div>

        <video loop muted autoPlay className="backdrop">
          <source src={A} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
