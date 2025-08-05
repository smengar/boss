import { useDashboard } from '../context/DashboardContext'
import Overview from './views/Overview'
import Analytics from './views/Analytics'
import Reports from './views/Reports'
import Users from './views/Users'
import Settings from './views/Settings'

export default function DashboardContent() {
  const { activeView } = useDashboard()

  const renderView = () => {
    switch (activeView) {
      case 'overview':
        return <Overview />
      case 'analytics':
        return <Analytics />
      case 'reports':
        return <Reports />
      case 'users':
        return <Users />
      case 'settings':
        return <Settings />
      default:
        return <Overview />
    }
  }

  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-900 capitalize">{activeView}</h1>
      </div>
      <main className="flex-1">
        {renderView()}
      </main>
    </div>
  )
}