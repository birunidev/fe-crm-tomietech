import { ActivitiesPage } from '@/pages/activities'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ActivitiesPage />
}
