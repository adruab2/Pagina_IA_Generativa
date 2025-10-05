import { createFileRoute } from '@tanstack/react-router'
import AdminPage from '../pages/AdminPage'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdminPage />
}
