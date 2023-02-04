import { db } from "@/config/firebase";
import { updateCurrentUser } from "@/store/slices/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

export default function SaveUserInfoButton({
  defaultValue,
  updateProp,
  value,
  setEditing,
}) {
  const userId = useSelector((state) => state.user.currentUser.userId);
  const dispatch = useDispatch();

  async function handleSaveUserInfo() {
    setEditing(false);
    if (defaultValue === value) return;
    try {
      const date = Date.now().toString();
      const updateUserRef = doc(db, "users", userId);
      await updateDoc(updateUserRef, {
        [updateProp]: value,
        updatedAt: date,
      });
      dispatch(
        updateCurrentUser({
          [updateProp]: value,
          updatedAt: date,
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      onClick={handleSaveUserInfo}
      className="px-3 py-1.5 flex flex-row items-center justify-center w-auto text-c-black-1 bg-white hover:bg-c-white-1 rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>

      <span className="ml-0.5 text-sm text-center text-current font-medium tracking-wide">
        Save
      </span>
    </button>
  );
}
