import "./Testimonials.css";

export const Testimonials = () => {
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
        <div className="cards-grid">
          <div className="cards">
            <div className="card-head"></div>
          </div>
          <div className="cards-2">
            <div className="card-head-2"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="digi">Let's get physical or keep it digital</p>
        <h1 className="get-in">Get in touch</h1>
      </div>
      <div className="credit-row">
        <a href="" className="credit">
          @itsraag.work
        </a>
        <a href="" className="credit">
          Instagram
        </a>
      </div>
    </div>
  );
};
