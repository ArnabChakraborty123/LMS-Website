"use client"
import { UserButton } from "@clerk/nextjs"
const navbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
        <UserButton />
    </div>
  )
}

export default navbarRoutes