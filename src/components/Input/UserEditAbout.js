import { useState } from "react";
import CancelUserInfoButton from "../Button/CancelUserInfoButton";
import SaveUserInfoButton from "../Button/SaveUserInfoButton";
import UpdateUserInfoButton from "../Button/UpdateUserInfoButton";

export default function UserEditAbout({
  defaultValue,
  updateProp,
  updateValue,
}) {
  const [about, setAbout] = useState(defaultValue || "");
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="relative p-4 flex flex-col items-start justify-center w-full border border-solid border-[#333] rounded-lg">
      <div className="absolute -top-3 left-4 w-auto bg-c-black-3">
        <label
          htmlFor="userInputName"
          className="text-sm text-left text-c-white-1 font-medium tracking-wide"
        >
          About
        </label>
      </div>
      {isEditing ? (
        <textarea
          placeholder="Write more about your"
          id="userInputAbout"
          autoFocus={isEditing}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          onFocus={() => setEditing(true)}
          className="px-3 py-1.5 w-full h-40 text-base text-c-white-1 text-left font-medium tracking-wider rounded"
        ></textarea>
      ) : (
        <div className="px-3 py-1.5 w-full h-40 bg-[#3b3b3b] rounded">
          <p className="text-base text-c-white-1 text-left font-medium tracking-wider">
            {about}
          </p>
        </div>
      )}

      <div className="mt-2 flex flex-row items-center justify-start gap-x-4 w-full">
        {isEditing ? (
          <>
            <SaveUserInfoButton
              defaultValue={defaultValue}
              updateProp={updateProp}
              updateValue={updateValue}
              value={about}
              setEditing={setEditing}
            />
            <CancelUserInfoButton
              defaultValue={defaultValue}
              setValue={setAbout}
              setEditing={setEditing}
            />
          </>
        ) : (
          <UpdateUserInfoButton setEditing={setEditing} />
        )}
      </div>
    </div>
  );
}
