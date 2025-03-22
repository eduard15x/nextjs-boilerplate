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
}

const PageStatusCard = (props: IPageStatusCard) => {
  return (
    <div className={`${props.css}`}>
      {props.titleText ? (
        <div className="mb-2 text-2xl font-semibold">{props.titleText}</div>
      ) : null}
      <div
        className={`h-full flex ${
          props.firstText ? "items-start " : "items-center"
        }`}
      >
        <div className={`tcnt relative`}>
          <Image
            src={props.iconPath}
            alt={props.iconAlt}
            width={100}
            height={100}
          />
        </div>
        <div
          className={`pl-4 h-full flex flex-col  ${
            props.firstText ? "" : "justify-center"
          }`}
        >
          {props.firstText ? (
            <div className="special-percentage">{props.firstText}</div>
          ) : null}

          <div
            className={`${
              props.firstText ? "flex flex-grow items-end" : "h-full"
            } text-gray-300 font-semibold text-sh-effect`}
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
