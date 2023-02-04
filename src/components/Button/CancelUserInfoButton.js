export default function CancelUserInfoButton({
  defaultValue,
  setValue,
  setEditing,
}) {
  function handleOnClickCancel() {
    setValue(defaultValue);
    setEditing(false);
  }
  return (
    <button
      onClick={handleOnClickCancel}
      className="px-3 py-1.5 flex flex-row items-center justify-center w-auto bg-c-black-2 hover:bg-[#464545] rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <span className="ml-0.5 text-sm text-center text-c-white-1 font-medium tracking-wide">
        Cancel
      </span>
    </button>
  );
}
