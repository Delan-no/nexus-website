import type { ReactNode } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { ToasterProvider } from "@/components/toaster-provider"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
      <ToasterProvider />
    </div>
  )
}
