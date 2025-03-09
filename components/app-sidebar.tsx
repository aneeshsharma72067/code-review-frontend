import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useFiles } from "@/context/FileContext";
import Link from "next/link";
import { useParams } from "next/navigation";

export function AppSidebar() {
  const { files } = useFiles();

  const { id } = useParams();

  return (
    <Sidebar collapsible="none" className="">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div>Code Files</div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 ">
              {files.map((file, index) => {
                return (
                  <SidebarMenuItem
                    key={index}
                    className=" duration-300 hover:bg-gray-200"
                  >
                    <Link
                      href={`/optimization/${id}/${file.webkitRelativePath}`}
                      className="text-base text-zinc-800"
                    >
                      {file.webkitRelativePath}
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
