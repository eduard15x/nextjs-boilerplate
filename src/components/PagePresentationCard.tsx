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
    minHeight: "540px",
    maxHeight: "600px",
  };

  return (
    <div
      className={`${props.css} rounded-xl pt-7 pb-5 px-6 flex flex-col items-start`}
      style={style}
    >
      <div className="flex items-center w-auto custom-card-title text-3xl px-2 py-1">
        {props.cardTitle}
      </div>
      <div className="text-5xl font-semibold py-6 pb-2">
        {props.cardSubtitle}
      </div>
      {props.cardContent}
    </div>
  );
};

export default PagePresentationCard;
