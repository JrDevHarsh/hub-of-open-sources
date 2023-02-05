import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full h-auto bg-c-black-1 z-10 border-t border-solid border-t-c-black-3">
      <nav
        className="mx-auto py-8 px-4 flex flex-row items-center justify-between max-w-c-desktop w-full"
        role="navigation"
      >
        <div className="block w-auto">
          <Link
            href="/"
            className="text-xl text-center text-white font-medium tracking-wide"
            title="Go to home page"
            aria-label="Github Project Hub"
          >
            Github Project Hub
          </Link>
        </div>
        <div className="inline-block w-auto">
          <p className="text-sm text-c-white-1 text-center font-normal tracking-wide">
            <span className="hidden md:block">
              Open-source project released under the{" "}
            </span>
            <a
              href="https://github.com/JunDevHarsh/hub-of-open-sources/blob/dev/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project's LICENSE"
              className="text-white font-medium no-underline hover:underline"
              title="License"
            >
              MIT
            </a>{" "}
            License
          </p>
        </div>
        <ul
          className="flex flex-row items-center justify-center w-auto"
          role="list"
        >
          <li className="w-auto" role="listitem">
            <a
              href="https://github.com/jundevharsh/hub-of-open-sources"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to github code"
              className="group/item relative inline-block text-c-white-1 hover:text-white"
            >
              <span className="hidden group-hover/item:block absolute bottom-[calc(100%+5px)] right-0 px-4 py-1 w-auto bg-c-black-3 border border-solid border-c-black-2 rounded-md">
                <span className="absolute -bottom-1.5 right-2.5 w-2.5 h-2.5 bg-c-black-3 rotate-45 border border-t-0 border-l-0 border-solid border-c-black-2"></span>
                <span className="text-sm text-center text-white font-medium tracking-wide">
                  Github
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
                fill="currentColor"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
