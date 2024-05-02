const TechnologyCard = ({ technology, style }) => (
  <div
    className="m-1 h-fit w-fit rounded-2xl bg-purple-900 p-2 text-sm font-bold text-white transition-all hover:scale-105"
    style={style}
  >
    {technology}
  </div>
);

export default TechnologyCard;
