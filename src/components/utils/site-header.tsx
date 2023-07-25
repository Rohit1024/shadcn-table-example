import { siteConfig } from "@/config/site"
// import { ThemeToggle } from "./theme-toggle"
import { MainNav } from "./main-nav"
import { UserNav } from "../user-nav"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <ThemeToggle /> */}
            <UserNav/>
          </nav>
        </div>
      </div>
    </header>
  )
}