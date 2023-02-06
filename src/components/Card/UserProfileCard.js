import Image from "next/image";
import Link from "next/link";

export default function UserProfileCard({
  id,
  name,
  img,
  about,
  projects,
  views,
}) {
  return (
    <Link
      href={`/users/${id}`}
      aria-label={`Go to ${name} profile`}
      className="relative block w-56 h-72 bg-c-black-3 rounded-xl overflow-hidden border borer-solid border-[#333]"
    >
      <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="py-4 flex flex-row items-center justify-center w-full h-auto">
          <Image
            src={img}
            className="rounded-full"
            priority
            width={60}
            height={60}
            alt={`${name}'s Profile Picture`}
          />
        </div>
        <div className="px-4  flex flex-col items-center w-full">
          <p
            className="text-base text-center text-white font-medium tracking-wide"
            title={`User: ${name}`}
          >
            {name}
          </p>
          <p
            className="text-sm text-center text-c-white-1 font-normal tracking-wide"
            title="About"
          >
            {about}
          </p>
        </div>
        <div className="mt-auto px-4 py-3 flex flex-row items-center justify-center gap-x-4 w-full border-t border-solid border-t-[#333]">
          <div className="flex flex-col items-center justify-center flex-1 w-auto h-full">
            <p
              className="text-xl text-center text-white font-medium tracking-wide"
              title={`Projects: ${projects}`}
            >
              {projects}
            </p>
            <span className="text-xs text-center text-c-gray-1 font-normal tracking-wide">
              Projects
            </span>
          </div>
          <div className="inline-block w-[1px] h-full bg-[#333]"></div>
          <div className="flex flex-col items-center justify-center flex-1 w-auto h-full">
            <p
              className="text-xl text-center text-white font-medium tracking-wide"
              title={`Views: ${views}`}
            >
              {views}
            </p>
            <span className="text-xs text-center text-c-gray-1 font-normal tracking-wide">
              Views
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
