import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex gap-8">
      <div className="hidden w-[140px] md:block">
        <AccountNavigation />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
