interface ISubTitle {
  text: {
    content: string;
    className?: string;
  };
}

export const SubTitle: React.FC<ISubTitle> = ({ text }) => {
  return (
    <p
      className={`w-[90%] text-start text-xl md:text-[2em] text-gray font-normal pb-[5%] ${text.className}`}
    >
      {text.content}
    </p>
  );
};
