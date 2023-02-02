import Link from "next/link";

export default function SignUpContainer() {
  return (
    <section
      className="flex py-1 px-4 flex-row items-center justify-center w-full"
      role="dialog"
    >
      <div className="relative flex flex-col items-center justify-center max-w-lg w-full">
        <form action="" method="post" className="w-full">
          <div className="relative px-6 pt-6 pb-8 w-full h-auto bg-[#24232b] rounded-lg">
            <div className="flex flex-row items-center justify-start w-full">
              <h2 className="text-xl text-center text-c-white-1 font-medium tracking-wide">
                Create a new User
              </h2>
            </div>
            <div className="mt-4 flex flex-col items-center justify-start gap-y-4 w-full">
              <div className="flex flex-col items-start justify-center w-full">
                <label
                  htmlFor="userInputName"
                  className="text-xs text-center text-c-white-1 font-medium tracking-wide"
                >
                  Your name
                </label>
                <input
                  id="userInputName"
                  type="text"
                  placeholder="First and last name"
                  className="px-3 py-1.5 mt-1 w-full text-sm text-left text-c-white-1 font-normal tracking-wide rounded"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <label
                  htmlFor="userInputEmail"
                  className="text-xs text-center text-c-white-1 font-medium tracking-wide"
                >
                  Your E-mail
                </label>
                <input
                  id="userInputEmail"
                  type="text"
                  placeholder="Enter your E-mail"
                  className="px-3 py-1.5 mt-1 w-full text-sm text-left text-c-white-1 font-normal tracking-wide rounded"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <label
                  htmlFor="userInputPassword"
                  className="text-xs text-center text-c-white-1 font-medium tracking-wide"
                >
                  Password
                </label>
                <input
                  id="userInputPassword"
                  type="password"
                  placeholder="At least 8 characters"
                  className="px-3 py-1.5 mt-1 w-full text-sm text-left text-c-white-1 font-normal tracking-wide rounded"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-row items-center justify-center w-full">
              <button
                type="submit"
                className="px-3 py-2 w-full bg-[#a4ffaf] hover:bg-[#a2d9a8] text-base text-center text-c-black-1 font-medium tracking-wider rounded"
                aria-label="Button: Submit"
              >
                Create new User
              </button>
            </div>
            <div className="mt-4 flex flex-row items-center justify-start w-full">
              <span className="text-sm text-center text-c-gray-1 font-medium tracking-wide">
                Already have an account?
              </span>
              <Link
                href="/sign-in"
                aria-label="Sign-In"
                title="Sign In"
                className="ml-1 text-sm text-center text-white font-medium tracking-wide no-underline hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
