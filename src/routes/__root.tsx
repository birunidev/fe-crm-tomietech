import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { BaseLayout } from '@/components/layout/base-layout'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <BaseLayout>
                <Outlet />
            </BaseLayout>
        </React.Fragment>
    )
}
