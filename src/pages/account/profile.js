import Head from "next/head";
import { Poppins } from "@next/font/google";
import Header from "@/components/Banner/Header";
import Footer from "@/components/Banner/Footer";
import UserProfileEditContainer from "@/components/Container/UserProfileEditContainer";
import { useSelector } from "react-redux";
import SignInWithGoogle from "@/components/Button/SignInWithGoogle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: "normal",
});

export default function Profile() {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  return (
    <>
      <Head>
        <title>Profile | The Hub Of Open-Sources</title>
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
        <section className="realtive px-4 flex flex-row items-center justify-center w-full">
          <div className="py-10 max-w-3xl w-full">
            {isUserLoggedIn ? (
              <UserProfileEditContainer />
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <div className="mt-2 mb-8 flex flex-row items-center justify-center w-full">
                  <p className="text-base text-center text-c-white-2 font-medium tracking-wide">
                    Need to sign-in first in order to preview the content.
                  </p>
                </div>
                <SignInWithGoogle />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
