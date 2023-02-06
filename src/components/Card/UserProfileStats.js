export default function UserProfileStats({ views, projects }) {
  return (
    <div className="mt-2 md:mt-4 px-2 md:px-3 py-2.5 md:py-4 flex flex-row items-center justify-center max-w-md w-full bg-black rounded-lg">
      <div className="flex flex-col items-center justify-center flex-auto w-auto">
        <span className="text-sm text-center text-c-white-2 font-medium tracking-wide">
          Projects
        </span>
        <p
          className="text-lg md:text-2xl text-center text-white font-medium tracking-wide"
          aria-label="Stats: Projects"
        >
          {projects}
        </p>
      </div>
      <div className="inline-block w-[1px] h-12 bg-[#333]"></div>
      <div className="flex flex-col items-center justify-center flex-auto w-auto">
        <span className="text-sm text-center text-c-white-2 font-medium tracking-wide">
          Views
        </span>
        <p
          className="text-lg md:text-2xl text-center text-white font-medium tracking-wide"
          aria-label="Stats: Views"
        >
          {views + 1}
        </p>
      </div>
    </div>
  );
}
