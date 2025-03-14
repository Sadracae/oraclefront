"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown, ChevronRight, Filter, Plus, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskItem } from "@/components/pages/home/TaskItem"
import { AddTaskDialog } from "@/components/pages/home/AddTask"

interface SprintTask {
  id: string
  title: string
  description: string
  priority: string
  status: string
  date: string
  image: string
  assignee?: string
  assigneeAvatar?: string
}

interface SprintType {
  id: string
  name: string
  startDate: string
  endDate: string
  progress: number
  status: "Active" | "Completed" | "Planned"
  tasks: SprintTask[]
}

export default function Sprints() {
  const [expandedSprint, setExpandedSprint] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  const sprintsData: SprintType[] = [
    {
      id: "sprint1",
      name: "Sprint 1: User Authentication",
      startDate: "01/07/2023",
      endDate: "14/07/2023",
      progress: 100,
      status: "Completed",
      tasks: [
        {
          id: "task1",
          title: "Implement Login UI",
          description: "Create responsive login interface with email and password fields",
          priority: "High",
          status: "Completed",
          date: "02/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "John Doe",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task2",
          title: "Implement Registration UI",
          description: "Create responsive registration form with validation",
          priority: "High",
          status: "Completed",
          date: "05/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Jane Smith",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task3",
          title: "Backend Authentication API",
          description: "Implement JWT authentication with secure password hashing",
          priority: "Extreme",
          status: "Completed",
          date: "10/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Mike Johnson",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: "sprint2",
      name: "Sprint 2: Task Management Core",
      startDate: "15/07/2023",
      endDate: "28/07/2023",
      progress: 75,
      status: "Active",
      tasks: [
        {
          id: "task4",
          title: "Task Creation UI",
          description: "Design and implement task creation modal with all required fields",
          priority: "High",
          status: "Completed",
          date: "16/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "John Doe",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task5",
          title: "Task Listing UI",
          description: "Implement responsive task listing with filtering and sorting",
          priority: "Moderate",
          status: "In Progress",
          date: "18/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Jane Smith",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task6",
          title: "Task CRUD API",
          description: "Implement backend API for creating, reading, updating and deleting tasks",
          priority: "Extreme",
          status: "In Progress",
          date: "20/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Mike Johnson",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: "sprint3",
      name: "Sprint 3: Dashboard & Analytics",
      startDate: "29/07/2023",
      endDate: "11/08/2023",
      progress: 0,
      status: "Planned",
      tasks: [
        {
          id: "task7",
          title: "Dashboard UI",
          description: "Design and implement main dashboard with task overview and statistics",
          priority: "High",
          status: "Not Started",
          date: "29/07/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "John Doe",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task8",
          title: "Task Analytics",
          description: "Implement charts and graphs for task completion analytics",
          priority: "Moderate",
          status: "Not Started",
          date: "02/08/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Jane Smith",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: "task9",
          title: "User Performance Metrics",
          description: "Implement user performance tracking and visualization",
          priority: "Low",
          status: "Not Started",
          date: "05/08/2023",
          image: "/placeholder.svg?height=80&width=80",
          assignee: "Mike Johnson",
          assigneeAvatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
  ]

  const filteredSprints =
    activeTab === "all" ? sprintsData : sprintsData.filter((sprint) => sprint.status.toLowerCase() === activeTab)

  const toggleSprint = (sprintId: string) => {
    if (expandedSprint === sprintId) {
      setExpandedSprint(null)
    } else {
      setExpandedSprint(sprintId)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Planned":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex flex-col">
      {/* Top Navigation */}
      <Header day="Tuesday" date="20/06/2023" title = "To" titleSpan = "Do"/>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          userName="Sadrac Aramburo"
          userEmail="sundargurung360@gmail.com"
          userAvatar="/placeholder.svg?height=80&width=80"
        />

        {/* Main Content Area */}
        <div className="p-4 md:p-6 flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold flex items-center">
                <div className="mr-2 h-6 w-6 text-[#ff6767]" />
                Sprints
              </h2>
              <p className="text-gray-500 mt-1">Manage your project sprints and associated tasks</p>
            </div>

            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Button variant="outline" size="sm" className="rounded-lg border-gray-200">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button className="bg-[#ff6767] hover:bg-[#ff5252] rounded-lg" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                New Sprint
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="planned">Planned</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                {filteredSprints.map((sprint) => (
                  <div key={sprint.id} className="border rounded-lg overflow-hidden">
                    <div
                      className="p-4 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                      onClick={() => toggleSprint(sprint.id)}
                    >
                      <div className="flex items-center">
                        {expandedSprint === sprint.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500 mr-2" />
                        )}
                        <div>
                          <h3 className="font-medium text-lg">{sprint.name}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {sprint.startDate} - {sprint.endDate}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {sprint.tasks.length} tasks
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-3 md:mt-0">
                        <div className="flex items-center gap-2 w-full md:w-auto">
                          <div className="text-sm font-medium">{sprint.progress}%</div>
                          <div className="w-32 md:w-40">
                            <Progress value={sprint.progress} className="h-2" />
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(sprint.status)}`}>{sprint.status}</Badge>
                      </div>
                    </div>

                    {expandedSprint === sprint.id && (
                      <div className="p-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium">Tasks in this Sprint</h4>
                          <AddTaskDialog />
                        </div>

                        <div className="space-y-3">
                          {sprint.tasks.map((task) => (
                            <div key={task.id} className="border rounded-lg p-4">
                              <TaskItem
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                status={task.status}
                                date={task.date}
                                image={task.image}
                              />
                              {task.assignee && (
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <img
                                      src={task.assigneeAvatar || "/placeholder.svg?height=24&width=24"}
                                      alt={task.assignee}
                                      className="w-5 h-5 rounded-full mr-1"
                                    />
                                    Assigned to: {task.assignee}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

