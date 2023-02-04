export default function UserAccountProfile() {
  return (
    <div className="px-7 py-9 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-8 bg-c-black-3 w-full h-auto rounded-lg">
      <div className="flex flex-col items-center justify-center gap-y-4 w-full md:w-3/12">
        <div className="animate-pulse block w-28 h-28 bg-c-black-2 rounded-full"></div>
        <div className="animate-pulse inline-block py-4 w-48 md:w-full bg-c-black-2 rounded"></div>
        <div className="animate-pulse inline-block py-4 w-48 md:w-full bg-c-black-2 rounded"></div>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-6 w-full md:9/12">
        <div className="relative p-4 flex flex-col items-start justify-center w-full border border-solid border-[#333] rounded-lg">
          <div className="absolute -top-3 left-4 py-2.5 w-20 bg-c-black-3 rounded"></div>
          <div className="animate-pulse absolute -top-3 left-4 py-2.5 w-20 bg-c-black-2 rounded"></div>
          <div className="animate-pulse inline-block py-4 w-full bg-[#3b3b3b] rounded"></div>
        </div>
        <div className="relative p-4 flex flex-col items-start justify-center gap-y-2 w-full border border-solid border-[#333] rounded-lg">
          <div className="absolute -top-3 left-4 py-2.5 w-20 bg-c-black-3 rounded"></div>
          <div className="animate-pulse absolute -top-3 left-4 py-2.5 w-20 bg-c-black-2 rounded"></div>
          <div className="animate-pulse inline-block py-4 w-full bg-[#3b3b3b] rounded"></div>
          <div className="flex flex-row items-start justify-start gap-x-2 w-full">
            <span className="animate-pulse py-4 w-28 bg-[#3b3b3b] rounded"></span>
          </div>
        </div>
        <div className="relative p-4 flex flex-col items-start justify-center gap-y-2 w-full border border-solid border-[#333] rounded-lg">
          <div className="absolute -top-3 left-4 py-2.5 w-20 bg-c-black-3 rounded"></div>
          <div className="animate-pulse absolute -top-3 left-4 py-2.5 w-20 bg-c-black-2 rounded"></div>
          <div className="animate-pulse inline-block h-40 w-full bg-[#3b3b3b] rounded"></div>
          <div className="flex flex-row items-start justify-start gap-x-2 w-full">
            <span className="animate-pulse py-4 w-28 bg-[#3b3b3b] rounded"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
