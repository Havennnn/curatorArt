const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="flex items-center flex-col">
      <span>{icon}</span>
      <h4 className="mt-6 text-2xl text-black font-bold">{title}</h4>
      <p className="mt-2 text-center text-[#2A4D93]-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
