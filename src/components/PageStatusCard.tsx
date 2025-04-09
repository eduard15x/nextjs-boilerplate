import Image from "next/image";
import { ReactNode } from "react";

interface IPageStatusCard {
  iconPath: string;
  iconAlt: string;
  titleText?: string;
  firstText?: string;
  secondText: string | ReactNode;
  css: string;
  maxWidth?: string;
  arrangeItem?: string;
  titleCss?: string;
  secondTextCss?: string;
}

const PageStatusCard = (props: IPageStatusCard) => {
  return (
    <div className={`${props.css}`}>
      {props.titleText ? (
        <div
          className={`mb-2 text-lg md:text-2xl font-semibold text-gray-200 md:text-gray-100 ${
            props.titleCss ? props.titleCss : ""
          }`}
        >
          {props.titleText}
        </div>
      ) : null}
      <div
        className={`h-full flex md:text-center md:text-start flex-col md:flex-row ${
          props.firstText
            ? "items-start custom-page-status-card-center"
            : "items-center custom-page-status-card-start"
        } ${props.arrangeItem ? props.arrangeItem : ""}`}
      >
        <div className={`image-wrapper relative`}>
          <Image
            src={props.iconPath}
            alt={props.iconAlt}
            width={100}
            height={100}
          />
        </div>
        <div
          className={`pt-4 md:pt-3 md:pt-0 md:pl-4 h-full flex flex-col  ${
            props.firstText ? "" : "justify-center"
          }`}
        >
          {props.firstText ? (
            <div className="special-percentage">{props.firstText}</div>
          ) : null}

          <div
            className={`${
              props.firstText ? "flex flex-grow items-end" : "h-full"
            } text-gray-200 font-semibold text-sh-effect leading-5 ${
              props.secondTextCss ? props.secondTextCss : ""
            }`}
            style={{ maxWidth: props.maxWidth ? props.maxWidth : "250px" }}
          >
            {props.secondText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageStatusCard;
