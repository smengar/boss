import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardContent from './components/DashboardContent'
import { DashboardProvider } from './context/DashboardContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <DashboardProvider>
      <div className="h-screen flex overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              <div className="w-6"></div>
            </div>
          </div>

          {/* Main dashboard content */}
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <DashboardContent />
          </main>
        </div>
      </div>
    </DashboardProvider>
  )
}

export default App
