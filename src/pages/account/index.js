import Head from "next/head";
import { Poppins } from "@next/font/google";
import Header from "@/components/Banner/Header";
import Footer from "@/components/Banner/Footer";
import UserAccountContainer from "@/components/Container/UserAccountContainer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: "normal",
});

export default function Account() {
  return (
    <>
      <Head>
        <title>Account | The Hub Of Open-Sources</title>
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
      <Header />
      <main className={poppins.className}>
        <section className="relative flex flex-row items-center justify-center w-full">
          <div className="px-4 py-10 max-w-5xl w-full">
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <h2 className="text-xl text-center text-c-white-1 font-medium tracking-wide">
                  Your Account
                </h2>
              </div>
              <UserAccountContainer />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
