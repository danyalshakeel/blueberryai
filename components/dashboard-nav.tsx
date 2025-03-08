"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Clock,
  CreditCard,
  Home,
  Settings,
  Sliders,
  TrendingUp,
  Zap,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Trading",
    icon: Zap,
    submenu: [
      {
        title: "Live Trading",
        href: "/dashboard/trading",
        icon: TrendingUp,
      },
      {
        title: "Trading History",
        href: "/dashboard/history",
        icon: Clock,
      },
      {
        title: "AI Settings",
        href: "/dashboard/ai-settings",
        icon: Sliders,
      },
    ],
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Wallet",
    href: "/dashboard/wallet",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    // Default open state for Trading submenu
    Trading: true,
  })

  const toggleSubmenu = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="w-64 border-r bg-background h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center">
          <TrendingUp className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold">BlueberryAI</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            if (item.submenu) {
              const isOpen = openItems[item.title] || false
              return (
                <div key={item.title} className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={cn(
                      "flex items-center w-full text-left px-3 py-2 text-sm font-medium rounded-md",
                      "hover:bg-muted transition-colors",
                      "focus:outline-none focus-visible:ring focus-visible:ring-primary",
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{item.title}</span>
                    <span className="ml-auto">
                      {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="ml-6 pl-3 border-l space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "flex items-center px-3 py-2 text-sm rounded-md",
                            pathname === subItem.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground",
                            "transition-colors",
                          )}
                        >
                          <subItem.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href || "#"}
                className={cn(
                  "flex items-center px-3 py-2 text-sm rounded-md",
                  pathname === item.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  "transition-colors",
                )}
              >
                <item.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Pro Plan</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log Out</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

