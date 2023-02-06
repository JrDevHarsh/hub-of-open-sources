import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import UserProfileCard from "../Card/UserProfileCard";
import UserProfileCardSkeleton from "../Skeleton/UserProfileCardSkeleton";

export default function UserProfilesContainer() {
  const [users, setUsers] = useState([]);

  async function fetchUsersProfile() {
    let usersData = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        let userData = doc.data();
        userData.userId = doc.id;
        usersData.push(userData);
      });
      setUsers(usersData);
    }
  }

  useEffect(() => {
    fetchUsersProfile();
  }, []);

  return (
    <div className="relative px-4 py-6 flex flex-row items-center justify-center w-full">
      <div className="max-w-desktop w-full">
        <div className="flex flex-row items-start justify-center flex-wrap gap-5 w-full h-auto">
          {users.length === 0 ? (
            <UserProfileCardSkeleton />
          ) : (
            users.map((user) => (
              <UserProfileCard
                key={user.userId}
                id={user.userId}
                name={user.name}
                img={user.avatar || "/assets/images/image-victor.jpg"}
                about={user.about}
                projects={user.projects}
                views={user.views}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
