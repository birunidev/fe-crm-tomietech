import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import { Contact, Newspaper } from "lucide-react"

export const Sidebar = () => {

    const location = useLocation()
    console.log(location)


    return (
        <div className="bg-slate-50 h-[calc(100vh-73px)] p-5 w-1/5">
            <div className="flex flex-col gap-3">
                <Link className={
                    cn("text-teal-800 px-4 py-2.5 flex gap-2 items-center rounded-full ",
                        location.href === '/contacts' ? 'bg-teal-800 text-teal-50' : 'text-teal-800 hover:bg-teal-50'
                    )} to="/contacts">
                    <Contact size={16} /> Contacts
                </Link>
                <Link className={
                    cn("text-teal-800 px-4 py-2.5 flex gap-2 items-center rounded-full",
                        location.href === '/' ? 'bg-teal-800 text-teal-50' : 'text-teal-800 hover:bg-teal-50'
                    )} to="/">
                    <Newspaper size={16} /> Activities
                </Link>
            </div>
        </div >
    )
}