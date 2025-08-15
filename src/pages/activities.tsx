import { ActivityCard } from "@/components/activity-card"
import { ActivityLogCard } from "@/components/activity-card/activity-log-card"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ChevronDown, Mic, StopCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const ActivitiesPage = () => {
    // mock record state, should be in global state once in real product developement 
    const [isRecording, setIsRecording] = useState(false)
    const [latestActivities, setLatestActivities] = useState<Array<{ id: number }>>([]);
    const [savedActivities, setSavedActivities] = useState<Array<{ id: number }>>([])
    const [option, setOption] = useState<"with share screen" | "audio only">("with share screen")

    const handleRecordActivity = () => {
        console.log("recording activity")
        setIsRecording(!isRecording)
        if (isRecording) {
            setLatestActivities([...latestActivities, {
                id: Math.random() * 1000
            }])
        }
    }

    const handleSaveActivity = (id: number) => {
        const filteredLatestActivity = latestActivities.filter(activity => activity.id !== id)
        setLatestActivities(filteredLatestActivity)
        setSavedActivities([...savedActivities, { id }])
    }

    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="main-content w-4/5 bg-slate-50 flex gap-4">
                    <div className="w-2/3 bg-white p-4 flex flex-col gap-4 h-[calc(100vh-73px)] overflow-y-auto">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-xl">Recent Activities</h2>
                            <p className="text-slate-400">24 hour ago</p>
                        </div>
                        {/* activity cards */}
                        <div className="flex flex-col gap-3">
                            {
                                savedActivities.map((_, index) => (
                                    <ActivityCard key={index} />
                                ))
                            }
                            {
                                savedActivities.length === 0 && (
                                    <p className="text-center">
                                        Saved Activities will be listed here...
                                    </p>
                                )
                            }
                        </div>
                    </div>
                    <div className="w-1/3 pt-4 flex flex-col gap-4 h-[calc(100vh-73px)] overflow-y-auto">
                        <div className="bg-white p-4 py-12 rounded-xl flex flex-col items-center gap-2">
                            <button
                                onClick={handleRecordActivity}
                                className={`bg-teal-600 cursor-pointer hover:bg-teal-700 text-white size-16 flex items-center justify-center rounded-full relative
                                    ${isRecording ? "animate-pulse" : ""}`}
                            >
                                {isRecording ? <StopCircle /> : <Mic />}
                                {isRecording && (
                                    <span className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-50 animate-ping"></span>
                                )}
                            </button>
                            {
                                !isRecording &&
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center gap-2 text-slate-400 px-0 h-auto">
                                            {option} <ChevronDown />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => setOption("with share screen")}>
                                            with share screen
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setOption("audio only")}>
                                            audio only
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            }

                            {
                                !isRecording ? (
                                    <>
                                        <p>Tap button above to record your activity</p>
                                        <p className="text-sm text-slate-400">AI will capture key details</p></>
                                ) :
                                    <p>Recording your activity...</p>
                            }

                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-lg">Latest Activity</p>
                                <div className="flex flex-col gap-3">
                                    {
                                        latestActivities.map((activity, index) => {
                                            return (
                                                <ActivityLogCard onSave={() => handleSaveActivity(activity.id)} key={index} />
                                            )
                                        })
                                    }
                                    {
                                        latestActivities.length === 0 && (
                                            <div>
                                                <p className="text-slate-400 text-center">After recording, the activity will be listed here...</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}