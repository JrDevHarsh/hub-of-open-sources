export default function UserProfileContainerSkeleton() {
  return (
    <div className="flex flex-row items-start justify-between w-full">
      <div className="hidden md:inline-block w-[120px] h-[120px] bg-c-black-2 rounded-full"></div>
      <div className="px-4 py-2 flex flex-col items-center justify-start gap-y-4 w-full md:w-10/12">
        <div className="flex flex-row items-center justify-start w-full">
          <div className="w-2/12 md:w-0">
            <div className="block md:hidden w-[60px] h-[60px] bg-c-black-2 rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 w-10/12 md:w-full">
            <div className="inline-block py-2.5 md:py-4 w-80 bg-c-black-2 rounded"></div>
            <div className="inline-block py-2 md:py-2.5 w-40 bg-c-black-2 rounded"></div>
          </div>
        </div>
        <div className="inline-block w-full h-20 bg-c-black-2 rounded"></div>
        <div className="inline-block w-full md:w-96 h-16 bg-c-black-2 rounded"></div>
      </div>
    </div>
  );
}
