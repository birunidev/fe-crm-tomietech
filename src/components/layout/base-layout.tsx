import type { PropsWithChildren } from "react"
import { Header } from "../header"
import { Sidebar } from "../sidebar"

export const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="main-content w-4/5 bg-slate-50 flex gap-4">
                    {children}
                </div>
            </div>
        </div>
    )
}