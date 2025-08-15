import { Newspaper, User } from "lucide-react"
import { Button } from "../ui/button"

export const ActivityLogCard = ({ onSave }: {
    onSave: () => void
}) => {
    return (
        <>
            <div className="bg-slate-50 rounded-lg flex flex-col gap-2 p-3 text-slate-700">
                <div className="flex items-center gap-3">
                    <User size={16} className="text-teal-800" />
                    <span className="text-sm">Sarah Johnson (TechCorp Inc)</span>
                </div>
                <div className="flex items-center gap-3">
                    <Newspaper size={16} className="text-teal-800" />
                    <span className="text-sm">Phone call (15 mins)</span>
                </div>
                <p className="text-sm">
                    Summary: Discussed Q4 contract renewal. Client interested in enterprise features. Follow-up needed on pricing proposal by Friday.
                </p>
            </div>
            <div className="flex items-center gap-2 w-full">
                <Button onClick={onSave} className="bg-teal-600 flex-1 hover:bg-teal-800">
                    Save activity
                </Button>
                <Button className="bg-slate-50 text-teal-600 min-w-[100px] hover:bg-slate-100">
                    Edit
                </Button>
            </div></>
    )
}