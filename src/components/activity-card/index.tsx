import { Building, Clock, Dot, Phone } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"

export const ActivityCard = () => {
    return (
        <div className="px-6 py-4 border rounded-lg">
            <div className="flex items-start gap-3">
                <Avatar className="size-10">
                    <AvatarImage src="/image.png" />
                </Avatar>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Sarah Johnson</p>
                        <p className="flex items-center gap-2 text-teal-600">
                            <Phone size={16} />
                            Phone Call
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Building size={16} />
                            TechCorp Inc
                        </div>
                        <Dot />
                        <div className="flex items-center gap-2 text-slate-400">
                            <Clock size={16} />
                            2 hours ago
                        </div>
                    </div>
                    <p className="text-slate-600">
                        Discussed Q4 pricing and contract renewal
                    </p>
                </div>
            </div>
        </div>
    )
}