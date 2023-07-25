import { cn } from "@/lib/utils"
import { ThemeProvider } from "./utils/theme-provider"
import { TailwindIndicator } from "./utils/tailwind-indicator"
import { SiteHeader } from "@/components/utils/site-header"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div
            className={cn(
                "min-h-screen bg-background font-sans antialiased"
            )}
        >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="relative flex min-h-screen flex-col">
                    <SiteHeader />
                    <div className="flex-1">{children}</div>
                </div>
                <TailwindIndicator />
            </ThemeProvider>
        </div>
    )
}