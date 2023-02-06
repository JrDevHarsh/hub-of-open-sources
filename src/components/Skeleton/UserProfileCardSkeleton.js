export default function UserProfileCardSkeleton() {
  return (
    <div className="relative flex flex-col items-center justify-start w-56 h-72 bg-c-black-1 rounded-lg border border-solid border-[#333]">
      <div className="p-4 flex flex-col items-center justify-center gap-y-4 w-full">
        <div className="animate-pulse inline-block mx-auto w-[60px] h-14 bg-c-black-2 rounded-full"></div>
        <div className="animate-pulse inline-block py-2.5 w-full bg-c-black-2 rounded"></div>
        <div className="animate-pulse inline-block w-full h-20 bg-c-black-2 rounded"></div>
      </div>
      <div className="flex p-2 flex-row items-center justify-center gap-x-4 w-full border-t border-solid border-[#333]">
        <div className="animate-pulse inline-block w-20 h-12 bg-c-black-2 rounded"></div>
        <div className="animate-pulse inline-block w-20 h-12 bg-c-black-2 rounded"></div>
      </div>
    </div>
  );
}
