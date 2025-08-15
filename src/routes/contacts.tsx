import { ContactsPage } from '@/pages/contacts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ContactsPage />
}
