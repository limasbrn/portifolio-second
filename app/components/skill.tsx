interface SkillProps {
  text: string;
}

export const Skill = ({ text }: SkillProps) => {
  return <div className="item hover_item centralize">{text}</div>;
};
