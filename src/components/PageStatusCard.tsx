import Image from "next/image";

interface IPageStatusCard {
  iconPath: string;
  iconAlt: string;
  firstText?: string;
  secondText: string;
  css: string;
}

const PageStatusCard = (props: IPageStatusCard) => {
  return (
    <div className={`${props.css}`}>
      <div className="h-full flex items-start ">
        <div className="tcnt relative">
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
              props.firstText ? "flex flex-grow items-end" : ""
            } text-gray-300 font-semibold text-sh-effect`}
            style={{ maxWidth: "250px" }}
          >
            {props.secondText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageStatusCard;
