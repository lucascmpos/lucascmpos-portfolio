/* eslint-disable react/prop-types */
const TechnologyCard = ({ technology, style }) => (
  <div
    className="flex  h-fit w-fit items-center justify-center rounded-2xl px-2 py-1 text-sm font-bold text-white transition-all hover:scale-105 "
    style={style}
  >
    {technology}
  </div>
);

export default TechnologyCard;
