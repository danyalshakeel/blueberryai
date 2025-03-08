"use client"

import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}

