import { ReactNode } from "react";

interface IPagePresentationCard {
  cardTitle: string;
  cardSubtitle: string;
  cardBackgroundImage: string;
  cardContent: ReactNode;
  css: string;
}

const PagePresentationCard = (props: IPagePresentationCard) => {
  const style = {
    backgroundImage: `url(${props.cardBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className={`${props.css} card-responsive rounded-xl pt-3 md:pt-7 pb-3 md:pb-5 px-3 md:px-6 flex flex-col items-start`}
      style={style}
    >
      <div className="flex items-center w-auto custom-card-title text-sm md:text-3xl px-2 py-1">
        {props.cardTitle}
      </div>
      <div className="text-lg md:text-5xl font-semibold py-2 md:py-6 pb-2">
        {props.cardSubtitle}
      </div>
      {props.cardContent}
    </div>
  );
};

export default PagePresentationCard;
