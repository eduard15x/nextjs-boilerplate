import { ReactNode } from "react";

interface IPageInfo {
  title: string | ReactNode;
  description?: string;
  buttonText?: string;
  buttonMargins?: string;
}

const PageInfo = (props: IPageInfo) => {
  return (
    <div className="page-info mx-auto text-center">
      <div className="text-title font-semibold uppercase text-gray-200">
        {props.title}
      </div>

      {props.description ? (
        <div className="w-1/2 mt-4 m-auto text-gray-300">
          {props.description}
        </div>
      ) : null}

      {props.buttonText ? (
        <button
          className={`${
            props.buttonMargins ? props.buttonMargins : "mt-8 mb-2"
          } btn-gradient hover:brightness-95 text-white font-semibold cursor-pointer py-1 px-4 rounded-lg`}
        >
          {props.buttonText}
        </button>
      ) : null}
    </div>
  );
};

export default PageInfo;
