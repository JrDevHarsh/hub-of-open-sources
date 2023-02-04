import Image from "next/image";
import UserEditAbout from "@/components/Input/UserEditAbout";
import UserEditName from "@/components/Input/UserEditName";
import UserAccountProfileSkeleton from "@/components/Skeleton/UserAccountProfileSkeleton";
import { useEffect } from "react";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { createCurrentUser } from "@/store/slices/userSlice";

export default function UserProfileEditContainer() {
  const user = useSelector((state) => state.user.currentUser);
  const userId = useSelector((state) => state.user.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null || !user) {
      fetchUserInfo(userId);
    }
  }, []);

  async function fetchUserInfo(userId) {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(userRef, where("uid", "==", userId));
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      userData.userId = querySnapshot.docs[0].id;
      dispatch(createCurrentUser(userData));
    }
  }

  if (!user) {
    return <UserAccountProfileSkeleton />;
  }

  return (
    <div className="px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-4 bg-c-black-3 w-full h-auto rounded-lg">
      <div className="flex flex-col items-center justify-start w-full md:w-3/12">
        <div className="flex flex-row items-center justify-center w-full">
          <Image
            src={user.avatar}
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
            {new Date(parseInt(user.createdAt)).toLocaleString()}
          </p>
        </div>
        <div className="mt-2 flex flex-col items-center justify-center w-full">
          <span className="text-xs text-center text-[#696969] font-medium tracking-wide">
            Updated At
          </span>
          <p className="text-sm text-c-white-1 text-center font-medium tracking-wide">
            {new Date(parseInt(user.updatedAt)).toLocaleString()}
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
              {user.email}
            </p>
          </div>
        </div>
        <UserEditName defaultValue={user.name} updateProp="name" />
        <UserEditAbout defaultValue={user.about} updateProp="about" />
      </div>
    </div>
  );
}
