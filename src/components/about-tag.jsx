/* eslint-disable react/prop-types */
const AboutTag = ({ icon, text, className }) => {
  return (
    <div
      className={`${className} w flex h-24 flex-col items-center justify-center gap-2 rounded-lg  p-2 text-center text-xs font-semibold  `}
    >
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default AboutTag;
