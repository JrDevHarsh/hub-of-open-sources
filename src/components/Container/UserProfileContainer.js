import Image from "next/image";
import UserProfileStats from "../Card/UserProfileStats";

export default function UserProfileContainer({
  name,
  img,
  about,
  createdAt,
  projects,
  views,
}) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto">
      <div className="flex flex-row items-start justify-between w-full">
        <div className="hidden md:flex items-row items-center justify-center w-auto md:w-2/12">
          <Image
            src={img}
            className="rounded-full"
            width={120}
            height={120}
            alt={`Avatar: ${name}`}
          />
        </div>
        <div className="px-4 py-2 flex flex-col items-center justify-start w-full md:w-10/12">
          <div className="flex flex-row items-center justify-start gap-x-4 w-full">
            <div className="flex md:hidden items-row items-center justify-center w-auto md:w-2/12">
              <Image
                src={img}
                className="rounded-full"
                width={60}
                height={60}
                alt={`Avatar: ${name}`}
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
              <h3 className="text-lg md:text-2xl text-center text-c-white-2 font-medium tracking-wide">
                {name}
              </h3>
              <span className="text-xs md:text-sm text-center text-c-white-1 font-normal tracking-wide">
                Joined:{" "}
                <span className="font-medium">
                  {new Date(createdAt).toLocaleDateString()}
                </span>
              </span>
            </div>
          </div>
          <div className="my-2 inline-block h-20 w-full">
            <p className="text-sm md:text-base text-left text-c-white-1 font-normal tracking-wide">
              {about}
            </p>
          </div>
          <UserProfileStats views={views} projects={projects} />
        </div>
      </div>
    </div>
  );
}
