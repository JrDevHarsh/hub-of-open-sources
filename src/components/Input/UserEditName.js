import { useState } from "react";
import CancelUserInfoButton from "../Button/CancelUserInfoButton";
import SaveUserInfoButton from "../Button/SaveUserInfoButton";
import UpdateUserInfoButton from "../Button/UpdateUserInfoButton";

export default function UserEditName({ defaultValue, updateProp }) {
  const [name, setName] = useState(defaultValue || "");
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="relative p-4 flex flex-col items-start justify-center w-full border border-solid border-[#333] rounded-lg">
      <div className="absolute -top-3 left-4 w-auto bg-c-black-3">
        <label
          htmlFor="userInputName"
          className="text-sm text-left text-c-white-1 font-medium tracking-wide"
        >
          Name
        </label>
      </div>
      {isEditing ? (
        <input
          type="text"
          placeholder="Enter your name"
          id="userInputName"
          autoFocus={isEditing}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setEditing(true)}
          className="px-3 py-1.5 w-full text-base text-c-white-1 text-left font-medium tracking-wider rounded"
        />
      ) : (
        <div className="px-3 py-1.5 w-full bg-[#3b3b3b] rounded">
          <p className="text-base text-c-white-1 text-left font-medium tracking-wider">
            {name}
          </p>
        </div>
      )}

      <div className="mt-2 flex flex-row items-center justify-start gap-x-4 w-full">
        {isEditing ? (
          <>
            <SaveUserInfoButton
              updateProp={updateProp}
              defaultValue={defaultValue}
              value={name}
              setEditing={setEditing}
            />
            <CancelUserInfoButton
              defaultValue={defaultValue}
              setValue={setName}
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
