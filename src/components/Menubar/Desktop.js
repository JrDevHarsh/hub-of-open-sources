import Link from "next/link";
import menulist from "@/data/menubar.json";
import { useRouter } from "next/router";

export default function Desktop() {
  const router = useRouter();

  return (
    <ul className="flex flex-row items-center justify-start w-auto">
      {menulist.map((item) => (
        <li key={item.id} className="flex flex-row items-center justify-center">
          <Link
            href={item.path}
            className={`relative p-2 pb-3 flex flex-row items-center justify-center w-auto ${
              router.asPath.split("/")[1] === item.path_name
                ? "text-white"
                : "text-[#696969] hover:text-[#c9d1d9] focus-within:text-[#c9d1d9]"
            }`}
            aria-label={item.aria_label}
            title={item.title}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
              className="h-5 w-5"
            >
              <g>
                <path d={item.svg_path}></path>
              </g>
            </svg>
            <span className="ml-1 text-base text-center text-current font-medium tracking-wide">
              {item.title}
            </span>
            {router.asPath.split("/")[1] === item.path_name && (
              <span className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"></span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
