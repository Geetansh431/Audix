import "./RecentWork.css";

// TODO: swap these placeholder URLs for the real case videos.
// Each must be a direct .mp4 URL (Instagram Reel links won't work as a video source).
const videos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

export const RecentWork = () => {
  return (
    <div className="t">
      <div className="rec">Work</div>
      <div className="rec-grid">
        {videos.map((src, i) => (
          <div className={`rec-${i + 1}`} key={src}>
            <div className="sub-rec-1">
              <video
                className="picdrop"
                src={src}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
