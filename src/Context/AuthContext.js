import { auth } from "@/config/firebase";
import { userLogIn } from "@/store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthContext({ children }) {
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user && !userInfo?.isLoggedIn) {
        const { uid, email, displayName } = user;
        dispatch(
          userLogIn({
            uid,
            email,
            displayName,
          })
        );
      }
      setLoading(false);
    });
    return () => {
      subscribe();
    };
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return <>{children}</>;
}
