import Head from "next/head";
import { Poppins } from "@next/font/google";
import Header from "@/components/Banner/Header";
import Footer from "@/components/Banner/Footer";
import { useRouter } from "next/router";
import UserProfileContainer from "@/components/Container/UserProfileContainer";
import UserProfileContainerSkeleton from "@/components/Skeleton/UserProfileContainerSkeleton";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: "normal",
});

export default function Users() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  async function getUserFromId(userId) {
    try {
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        throw new Error("User not exists");
      }
      const user = docSnap.data();
      setUser(user);
      await incrementUserViews(userId, user.views);
    } catch (err) {
      console.log(err);
    }
  }

  async function incrementUserViews(id, userViews) {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      views: userViews + 1,
    });
  }

  useEffect(() => {
    getUserFromId(id);
  }, []);

  return (
    <>
      <Head>
        <title>{user !== null ? user.name : "Loading..."}</title>
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
      <main className={poppins.main}>
        <div className="relative py-10 px-4 flex flex-row items-center justify-center w-full">
          <div className="relative py-4 md:py-8 px-5 md:px-12 block max-w-5xl w-full bg-c-black-1 rounded-lg overflow-hidden">
            {user !== null ? (
              <UserProfileContainer
                name={user.name}
                img={user.avatar || "/assets/images/image-victor.jpg"}
                createdAt={user.createdAt}
                about={user.about}
                projects={user.projects}
                views={user.views}
              />
            ) : (
              <UserProfileContainerSkeleton />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
