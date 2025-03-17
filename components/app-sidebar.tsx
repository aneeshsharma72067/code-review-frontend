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
  const { file, files, allowMultpleFiles } = useFiles();

  const { id, filepath } = useParams();

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
              {allowMultpleFiles ? (
                <>
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
                </>
              ) : (
                <>
                  <SidebarMenuItem className=" duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 py-2 rounded-md px-5">
                    <Link
                      href={`/optimization/${id}/${file?.name}`}
                      className="text-base text-zinc-800 dark:text-white"
                    >
                      {filepath}
                    </Link>
                  </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
