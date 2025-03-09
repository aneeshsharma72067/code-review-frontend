"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="flex w-screen">
        <AppSidebar />
        {/* <SidebarTrigger /> */}
        <div className="flex-1 flex flex-col w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
