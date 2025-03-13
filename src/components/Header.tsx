import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Calendar, Search } from "lucide-react"

interface HeaderProps {
  date: string
  day: string
  title : string
  titleSpan : string
}


export function Header({ date, day , title, titleSpan}: HeaderProps) {
  return (
    
    <header className="bg-white py-3 px-6 flex items-center justify-between border-b">
    <h1 className="text-2xl font-bold">
      <span className="text-[#ff6767]">{title}</span>-{titleSpan}
    </h1>

    <div className="flex-1 max-w-xl mx-8">
      <div className="relative">
        <Input placeholder="Search your task here..." className="pl-4 pr-10 py-2 rounded-full border-gray-200" />
        <Button
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#ff6767] hover:bg-[#ff5252] h-8 w-8 rounded-full"
        >
          <Search className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <Button
        size="icon"
        variant="outline"
        className="rounded-full border-gray-200 bg-[#ff6767] text-white hover:bg-[#ff5252]"
      >
        <Bell className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="rounded-full border-gray-200 bg-[#ff6767] text-white hover:bg-[#ff5252]"
      >
        <Calendar className="h-5 w-5" />
      </Button>
      <div className="text-right text-sm">
        <div className="font-medium">{day}</div>
        <div className="text-[#ff6767]">{date}</div>
      </div>
    </div>
  </header>
  )
}

