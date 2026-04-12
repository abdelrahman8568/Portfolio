import Cover from "@/app/components/organisms/home/cover";
import Introduction from "@/app/components/organisms/home/introduction";

export const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Cover />
        <Introduction />
      </div>
    </>
  );
};
