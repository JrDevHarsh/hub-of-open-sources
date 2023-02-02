import Head from "next/head";
import { Poppins } from "@next/font/google";
import SignUpContainer from "@/components/Container/SignUpContainer";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: "normal",
});

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign-Up | The Hub Of Open-Sources</title>
        <meta
          name="description"
          content="Hub Of Open-sources is your one-stop destination for discovering, collaborating, and contributing to a wide range of open-source projects. Join our community of developers and start building the future today."
        />
        <meta
          name="keywords"
          content="hub-of-open-sources, hopes, open-source, collaboration, coding, developers, projects, community, contribute, discover, code sharing, software development, build"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4 flex flex-row items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center max-w-lg w-full">
          <Link
            href="/"
            aria-label="Go to home page"
            title="Go to home page"
            className="flex flex-row items-center justify-center w-auto"
          >
            <h1 className="text-3xl text-center text-c-white-1 font-medium tracking-wide">
              Hub Of Open-Sources
            </h1>
          </Link>
        </div>
      </header>
      <main className={poppins.className}>
        <SignUpContainer />
      </main>
    </>
  );
}
