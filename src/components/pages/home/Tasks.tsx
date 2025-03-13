
import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { CircleDot, Trash2, Edit } from "lucide-react"
import {Header} from "@/components/Header"
import { AddTaskDialog } from "./AddTask"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Task {
  id: string
  title: string
  date: string
  description: string
  priority: "Extreme" | "High" | "Moderate" | "Low"
  status: "Not Started" | "In Progress" | "Completed"
  createdOn: string
  image: string
  objective?: string
  fullDescription?: string
  additionalNotes?: string[]
  deadline?: string
}

export default function Tasks() {
    
  const [selectedTask, setSelectedTask] = useState<string>("task1");
  
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }
  

  const currentTask = tasks.find((task) => task.id === selectedTask)

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

<AddTaskDialog onAddTask={handleAddTask} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <p className="text-sm text-gray-500">{task.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{task.description}</p>
                <p className="text-xs text-gray-500 mt-2">Priority: {task.priority}</p>
                <p className="text-xs text-gray-500">Story Points: {task.storyPoints}</p>
                <img src={task.image} alt="Task" className="mt-2 w-full h-32 object-cover rounded" />
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
      </div>

        {/* Main Content Area
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tasks List 
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 border-b pb-2">My Tasks</h2>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedTask === task.id
                        ? "border-[#ff6767] bg-[#fff8f8]"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedTask(task.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <CircleDot
                          className={`h-5 w-5 mt-1 ${
                            task.status === "Not Started"
                              ? "text-[#ff6767]"
                              : task.status === "In Progress"
                                ? "text-blue-500"
                                : "text-green-500"
                          }`}
                        />
                        <div>
                          <h3 className="font-medium">{task.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{task.description}</p>

                          <div className="flex items-center gap-4 mt-2 text-xs">
                            <div>
                              <span className="text-gray-500">Priority: </span>
                              <span
                                className={
                                  task.priority === "Extreme"
                                    ? "text-red-500"
                                    : task.priority === "High"
                                      ? "text-orange-500"
                                      : task.priority === "Moderate"
                                        ? "text-amber-500"
                                        : "text-green-500"
                                }
                              >
                                {task.priority}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Status: </span>
                              <span
                                className={
                                  task.status === "Not Started"
                                    ? "text-[#ff6767]"
                                    : task.status === "In Progress"
                                      ? "text-blue-500"
                                      : "text-green-500"
                                }
                              >
                                {task.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <img
                          src={task.image || "/placeholder.svg"}
                          alt={task.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Created on: {task.createdOn}</div>
                  </div>
                ))}
              </div>
            </div>

            
            {currentTask && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={currentTask.image || "/placeholder.svg"}
                        alt={currentTask.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">{currentTask.title}</h2>
                        <div className="flex flex-col gap-1 mt-2">
                          <div className="text-sm">
                            <span className="text-gray-500">Priority: </span>
                            <span
                              className={
                                currentTask.priority === "Extreme"
                                  ? "text-red-500"
                                  : currentTask.priority === "High"
                                    ? "text-orange-500"
                                    : currentTask.priority === "Moderate"
                                      ? "text-amber-500"
                                      : "text-green-500"
                              }
                            >
                              {currentTask.priority}
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Status: </span>
                            <span
                              className={
                                currentTask.status === "Not Started"
                                  ? "text-[#ff6767]"
                                  : currentTask.status === "In Progress"
                                    ? "text-blue-500"
                                    : "text-green-500"
                              }
                            >
                              {currentTask.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">Created on: {currentTask.createdOn}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-700">Task Title:</h3>
                        <p>{currentTask.title}</p>
                      </div>

                      {currentTask.objective && (
                        <div>
                          <h3 className="font-medium text-gray-700">Objective:</h3>
                          <p>{currentTask.objective}</p>
                        </div>
                      )}

                      {currentTask.fullDescription && (
                        <div>
                          <h3 className="font-medium text-gray-700">Task Description:</h3>
                          <p className="text-gray-600">{currentTask.fullDescription}</p>
                        </div>
                      )}

                      {currentTask.additionalNotes && currentTask.additionalNotes.length > 0 && (
                        <div>
                          <h3 className="font-medium text-gray-700">Additional Notes:</h3>
                          <ul className="list-disc pl-5 text-gray-600">
                            {currentTask.additionalNotes.map((note, index) => (
                              <li key={index}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentTask.deadline && (
                        <div>
                          <h3 className="font-medium text-gray-700">Deadline for Submission:</h3>
                          <p className="text-gray-600">{currentTask.deadline}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-gray-100 hover:bg-gray-200 border-none"
                  >
                    <Trash2 className="h-5 w-5 text-[#ff6767]" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#ff6767] hover:bg-[#ff5252] border-none"
                  >
                    <Edit className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  )
}

