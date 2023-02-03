import UserAccountCard from "../Card/UserAccountCard";

export default function UserAccountContainer() {
  return (
    <div className="py-4 relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 flex-wrap w-full">
      <UserAccountCard />
    </div>
  );
}
