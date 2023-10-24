// import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Link href="/">
          <Image src="/logo.png" height={100} width={100} alt="logo" />
        </Link>
        {/* <Logo /> */}
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
