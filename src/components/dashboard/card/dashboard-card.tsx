import Link from "next/link";

export const DashboardCard = ({title, to}:{title:string, to:string}) => {
  return (
    <Link
      href={to}
      className="hover:animate-pulse border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded"
    >
        {title}
    </Link>
  );
};
