import { Building2, Clock, Mail, MoreVertical, Phone } from "lucide-react";

type Contact = {
    id: number;
    name: string;
    title: string;
    company: string;
    email: string;
    phone: string;
    avatar: string;
    status: string;
    lastContact: string;
    dealValue: string;
    tags: string[];
    notes: string;
    activities: number;
    deals: number;
    location: string;
    linkedin: string;
    source: string;
    created: string;
};

export const ContactCard = ({ contact }: { contact: Contact }) => {
    return (
        <div
            key={contact.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600">{contact.title}</p>
                    </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{contact.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 truncate">{contact.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Last contact: {contact.lastContact}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className={`px-2 py-1 rounded-full text-xs font-medium`}>
                    {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                </span>
                <span className="text-sm font-semibold text-green-600">{contact.dealValue}</span>
            </div>

            <div className="flex space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 bg-teal-50 text-teal-600 px-3 py-2 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium flex items-center justify-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium flex items-center justify-center space-x-1">
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                </button>
            </div>
        </div>
    )
}