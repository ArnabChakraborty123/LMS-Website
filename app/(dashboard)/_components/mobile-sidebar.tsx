import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from "./sidebar"
  import { Menu } from "lucide-react"

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu />
        </SheetTrigger >
        <SheetContent className="md:hidden fixed  left-0 w-64  bg-white shadow-lg transition-transform transform">
        <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar