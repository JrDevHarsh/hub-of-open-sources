import { auth } from "@/config/firebase";
import { userLogOut } from "@/store/slices/userSlice";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

export default function SignOut() {
  const dispatch = useDispatch();

  async function handleSignOut() {
    signOut(auth)
      .then(() => dispatch(userLogOut()))
      .then(() => console.log("Sign-out successfully"))
      .catch((err) => console.log(err));
  }

  return (
    <button
      onClick={handleSignOut}
      className="px-3 py-1.5 flex flex-row items-center justify-between w-auto text-c-white-1 bg-c-black-3 hover:bg-[#3e3e3e] rounded"
      aria-label="Signout"
    >
      <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
      <span className="ml-1 text-base text-center text-current font-medium tracking-wide">
        Logout
      </span>
    </button>
  );
}
