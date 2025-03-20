import { ReactNode } from "react";

interface IPageInfo {
  title: string | ReactNode;
  titleCss?: string;
  description?: string;
  descriptionCss?: string;
  buttonText?: string;
  buttonMargins?: string;
  secondButtonText?: string;
  secondButtonMargins?: string;
}

const PageInfo = (props: IPageInfo) => {
  return (
    <div className="page-info mx-auto text-center">
      <div
        className={`text-title font-semibold uppercase text-gray-200 ${props.titleCss}`}
      >
        {props.title}
      </div>

      {props.description ? (
        <div
          className={`w-1/2 mt-4 m-auto text-gray-300 ${props.descriptionCss}`}
        >
          {props.description}
        </div>
      ) : null}

      <div className="flex justify-center">
        {props.buttonText ? (
          <button
            className={`${
              props.buttonMargins ? props.buttonMargins : "mt-8 mb-2"
            } btn-gradient hover:brightness-120 text-white font-semibold cursor-pointer py-1 px-4 rounded-lg`}
          >
            {props.buttonText}
          </button>
        ) : null}

        {props.secondButtonText ? (
          <button
            className={`${
              props.secondButtonMargins
                ? props.secondButtonMargins
                : "mt-8 mb-2"
            } custom-btn hover:brightness-120 text-white font-semibold cursor-pointer py-1 px-4 ml-6 rounded-lg`}
          >
            {props.secondButtonText}
            <span className="ml-2 font-bold" aria-hidden="true">
              →
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PageInfo;
