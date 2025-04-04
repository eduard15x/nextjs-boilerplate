import Link from "next/link";

interface IPageCardLink {
  linkText: string;
  linkHref: string;
}

const PageCardLink = (props: IPageCardLink) => {
  return (
    <div>
      <Link
        href={props.linkHref}
        className="mr-4 hover:brightness-90 text-white text-sm md:text-xl font-semibold"
      >
        {props.linkText}
        <span className="ml-2 font-bold" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
};

export default PageCardLink;
