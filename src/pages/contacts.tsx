import { ContactCard } from "@/components/contact-card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { contacts } from "@/data/contacts";
import { Filter, UserPlus } from "lucide-react";
import { useState } from "react";


export function ContactsPage() {
    const [filterStatus, setFilterStatus] = useState('all');

    return (
        <div className="p-6 w-full bg-white">
            {/* Filters and Actions */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-900">Contacts</h2>
                    <span className="text-sm text-gray-500">({contacts.length} contacts)</span>
                </div>
                <div className="flex items-center space-x-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center">
                                <Filter className="w-4 h-4 text-gray-400" />
                                <span>
                                    {filterStatus === "all"
                                        ? "All Status"
                                        : filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setFilterStatus("all")}>
                                All Status
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterStatus("customer")}>
                                Customer
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterStatus("qualified")}>
                                Qualified
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterStatus("prospect")}>
                                Prospect
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterStatus("proposal")}>
                                Proposal
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterStatus("lead")}>
                                Lead
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="flex items-center bg-teal-600 hover:bg-teal-700 transition-colors">
                        <UserPlus className="w-4 h-4" />
                        <span>Add Contact</span>
                    </Button>
                </div>
            </div>

            {/* Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact) => (
                    <ContactCard contact={contact} />
                ))}
            </div>
        </div>
    );
}