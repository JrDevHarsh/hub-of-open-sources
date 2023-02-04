import Link from "next/link";

export default function UserAccountCard() {
  return (
    <Link
      href="/account/profile"
      aria-label="Go to user's project"
      className="relative p-4 w-80 h-24 bg-transparent hover:bg-[#6464641a] focus-visible:bg-[#6464641a] border border-solid border-[#c8c8c826] rounded-lg"
    >
      <div className="flex flex-row items-center justify-center text-c-white-1 w-full">
        <div className="flex flex-row items-center justify-center w-1/6">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            className="h-8 w-8"
            aria-label="Icon: Account Settings"
          >
            <g>
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-start justify-center w-5/6">
          <p className="text-base text-left text-current font-medium tracking-wide">
            Your Profile
          </p>
          <p className="text-sm text-justify text-[#696969] font-medium tracking-wide">
            View e-mail, edit name and bio
          </p>
        </div>
      </div>
    </Link>
  );
}
