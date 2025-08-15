import { Link } from "@tanstack/react-router"
import { Contact, Newspaper } from "lucide-react"

export const Sidebar = () => {
    return (
        <div className="bg-slate-50 h-[calc(100vh-73px)] p-5 w-1/5">
            <div className="flex flex-col gap-3">
                <Link className="text-teal-800 px-4 py-2.5 flex gap-2 items-center" to="/">
                    <Contact size={16} /> Contacts
                </Link>
                <Link className="bg-teal-800 text-teal-50 px-4 py-2.5 flex gap-2 items-center rounded-full" to="/">
                    <Newspaper size={16} /> Activities
                </Link>
            </div>
        </div>
    )
}