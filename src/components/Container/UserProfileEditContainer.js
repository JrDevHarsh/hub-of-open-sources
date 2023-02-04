import Image from "next/image";
import UserEditAbout from "@/components/Input/UserEditAbout";
import UserEditName from "@/components/Input/UserEditName";
import UserAccountProfileSkeleton from "@/components/Skeleton/UserAccountProfileSkeleton";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function UserProfileEditContainer() {
  const [render, setRender] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  async function fetchUserInfo() {
    const docRef = doc(db, "users", "IcXmoREutjQFPP0m0j47");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return console.log("No such document!");
    }
    setRender(true);
    const data = docSnap.data();
    setUser(data);
  }

  if (!render) {
    return <UserAccountProfileSkeleton />;
  }
  return (
    <div className="px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-4 bg-c-black-3 w-full h-auto rounded-lg">
      <div className="flex flex-col items-center justify-start w-full md:w-3/12">
        <div className="flex flex-row items-center justify-center w-full">
          <Image
            src={
              user.avatar ||
              "https://lh3.googleusercontent.com/a/AEdFTp77DsPnZ4nlYasd6GckRPOTsjXloUXntpTZe3s=s96-c"
            }
            className="rounded-full"
            priority
            width={120}
            height={120}
            alt="Image of victor"
          />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center w-full">
          <span className="text-xs text-center text-[#696969] font-medium tracking-wide">
            Created At
          </span>
          <p className="text-sm text-c-white-1 text-center font-medium tracking-wide">
            {new Date(
              parseInt(user.createdAt) || 1675424019770
            ).toLocaleString()}
          </p>
        </div>
        <div className="mt-2 flex flex-col items-center justify-center w-full">
          <span className="text-xs text-center text-[#696969] font-medium tracking-wide">
            Updated At
          </span>
          <p className="text-sm text-c-white-1 text-center font-medium tracking-wide">
            {new Date(
              parseInt(user.updatedAt) || 1675424019770
            ).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-y-6 w-full md:w-9/12">
        <div className="relative p-4 flex flex-col items-start justify-center w-full border border-solid border-[#333] rounded-lg">
          <div className="absolute -top-3 left-4 w-auto bg-c-black-3">
            <span className="text-sm text-left text-c-white-1 font-medium tracking-wide">
              E-mail
            </span>
          </div>
          <div className="px-3 py-1.5 w-full bg-[#3b3b3b] rounded">
            <p className="text-base text-c-white-1 text-left font-medium tracking-wider">
              {user.email || "harsh.code97@gmail.com"}
            </p>
          </div>
        </div>
        <UserEditName
          defaultValue={user.name}
          updateProp="name"
          updateValue={setUser}
        />
        <UserEditAbout
          defaultValue={user.about}
          updateProp="about"
          updateValue={setUser}
        />
      </div>
    </div>
  );
}
