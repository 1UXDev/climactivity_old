export default function Video({ src }) {
  return (
    <video className="bgVideo" autoPlay loop muted id="video">
      <source src={src} type="video/mp4" />;
    </video>
  );
}
