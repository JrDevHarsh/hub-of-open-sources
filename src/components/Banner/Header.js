import TopMain from "@/components/Navbar/TopMain";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 flex flex-row items-center justify-center w-full bg-c-black-1 border-b border-solid border-c-black-2">
      <div className="relative mx-auto max-w-desktop w-full">
        <TopMain />
      </div>
    </header>
  );
}
