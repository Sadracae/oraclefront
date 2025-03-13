import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CircleDot, HelpCircle, LayoutGrid, LogOut, Settings } from "lucide-react"
import { useNavigate, useLocation } from 'react-router-dom';


interface SidebarProps {
  userName: string
  userEmail: string
  userAvatar?: string
}

export function Sidebar({ userName, userEmail, userAvatar }: SidebarProps) {

    const navigate = useNavigate(); // Initialize navigate here
    const location = useLocation();
    
    const handleLogout = () => {
        navigate("/"); // Now navigate works because it's initialized
        // Implement logout logic here
    }
    const handleMyTask = () => {
        navigate("/tasks"); // Now navigate works because it's initialized
        // Implement logout logic here

    }

    const handleDashboard = () => {
      navigate("/dashboard"); // Now navigate works because it's initialized
      // Implement logout logic here

  }
  const handleSettings = () => {
    navigate("/settings"); // Now navigate works because it's initialized
    // Implement logout logic here

}
const handleSprints = () => {
  navigate("/sprints"); // Now navigate works because it's initialized
  // Implement logout logic here

}
const handleCalendar = () => {
  navigate("/calendar"); // Now navigate works because it's initialized
  // Implement logout logic here

}

    

  return (

    <div className="hidden md:flex w-64 bg-[#ff6b6b] text-white flex-col">
      <div className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-20 h-20 border-2 border-white">
          <AvatarImage src={userAvatar || "/placeholder.svg?height=80&width=80"} alt={userName} />
          <AvatarFallback>
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="mt-2 font-semibold text-lg">{userName}</h3>
        <p className="text-xs text-white/80">{userEmail}</p>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1">
          <Button onClick={handleDashboard} variant="ghost" className={`w-full justify-start text-white hover:bg-white/20 rounded-xl ${location.pathname === "/dashboard" ? "bg-white/30" : ""}`}>
            <LayoutGrid className="mr-2 h-5 w-5" />
            Dashboard
          </Button>

          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20  rounded-xl">
            <CircleDot className="mr-2 h-5 w-5" />
            Vital Task
          </Button>

          <Button onClick={handleSprints} variant="ghost" className="w-full justify-start text-white hover:bg-white/20  rounded-xl">
            <CircleDot className="mr-2 h-5 w-5" />
            Sprints
          </Button>

          <Button onClick={handleCalendar} variant="ghost" className="w-full justify-start text-white hover:bg-white/20  rounded-xl">
            <CircleDot className="mr-2 h-5 w-5" />
            Calendar
          </Button>

          <Button onClick={handleMyTask} variant="ghost" className={`w-full justify-start text-white hover:bg-white/20 rounded-xl ${location.pathname === "/tasks" ? "bg-white/30" : ""}`}>
            <CircleDot className="mr-2 h-5 w-5" />
            My Task
          </Button>
          

          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 rounded-xl">
            <CircleDot className="mr-2 h-5 w-5" />
            Task Categories
          </Button>

          <Button onClick={handleSettings} variant="ghost" className={`w-full justify-start text-white hover:bg-white/20 rounded-xl ${location.pathname === "/settings" ? "bg-white/30" : ""}`}>
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>

          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 rounded-xl">
            <HelpCircle className="mr-2 h-5 w-5" />
            Help
          </Button>
        </div>
      </nav>

      <div className="p-4">
        <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-white hover:bg-white/20 rounded-xl">
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}

