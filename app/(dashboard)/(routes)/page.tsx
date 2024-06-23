import { UserButton } from "@clerk/nextjs";
const dashboardpage = () => {
  return (
    <div>
       <UserButton
      afterSignOutUrl="/" 
      />
     
       
    </div>
  )
}

export default dashboardpage;