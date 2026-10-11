import "./RecentWork.css";
import work1 from "../../assets/Work/itsraag_DYWrXXWiStz.jpg";
import work2 from "../../assets/Work/itsraag_DD_cjqNTKCX.jpg";
import work3 from "../../assets/Work/itsraag_DKu-5fnTZAW.jpg";
import work4 from "../../assets/Work/itsraag_DdobIgRNASC.jpg";

const works: { href: string; image?: string; alt: string }[] = [
  {
    href: "https://www.instagram.com/reel/DYWrXXWiStz/",
    image: work1,
    alt: "Work 1",
  },
  {
    href: "https://www.instagram.com/reel/DD_cjqNTKCX/",
    image: work2,
    alt: "Work 2",
  },
  {
    href: "https://www.instagram.com/reel/DKu-5fnTZAW/",
    image: work3,
    alt: "Work 3",
  },
  {
    href: "https://www.instagram.com/reel/DQMM3Csiaf0/",
    image: work4,
    alt: "Work 4",
  },
];

export const RecentWork = () => {
  return (
    <div className="t">
      <div className="rec">Work</div>
      <div className="rec-grid">
        {works.map((w, i) => (
          <div className={`rec-${i + 1}`} key={w.href}>
            <a
              className="sub-rec-1"
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${w.alt} – watch on Instagram`}
            >
              {w.image ? (
                <img className="picdrop" src={w.image} alt={w.alt} />
              ) : (
                <div className="picdrop" style={{ background: "#eee" }} />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
