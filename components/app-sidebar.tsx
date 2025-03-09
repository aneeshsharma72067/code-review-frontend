import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Ellipsis,
  Loader2,
  LogOut,
  MessageSquare,
  Pencil,
  Plus,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export function AppSidebar() {
  const [title, setTitle] = useState("New Chat");
  const [isOpen, setIsOpen] = useState(false);
  const [titleLoader, setTitleLoader] = useState(false);
  const [logoutLoader, setLogoutLoader] = useState(false);
  const [renameDialog, setRenameDialog] = useState(false);
  const [chatToRename, setChatToRename] = useState("");
  const router = useRouter();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div>Recent Chats</div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu></SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
