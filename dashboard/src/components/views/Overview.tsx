import MetricCard from '../MetricCard'
import ChartCard from '../ChartCard'
import RecentActivity from '../RecentActivity'
import {
  CurrencyDollarIcon,
  UsersIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'

const metrics = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive' as const,
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1%',
    changeType: 'positive' as const,
    icon: UsersIcon,
  },
  {
    title: 'Sales',
    value: '+12,234',
    change: '+19%',
    changeType: 'positive' as const,
    icon: ShoppingCartIcon,
  },
  {
    title: 'Growth',
    value: '+573',
    change: '+201%',
    changeType: 'positive' as const,
    icon: TrendingUpIcon,
  },
]

const revenueData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
  { month: 'Jul', revenue: 3490, expenses: 4300 },
]

const activityData = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created new project',
    time: '2 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'Updated user profile',
    time: '5 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'Completed task assignment',
    time: '10 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Overview() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Page header */}
        <div className="pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-bold leading-6 text-gray-900">Dashboard Overview</h1>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            A comprehensive view of your business metrics and recent activity.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and activity */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Revenue chart */}
          <div className="lg:col-span-2">
            <ChartCard
              title="Revenue vs Expenses"
              subtitle="Monthly comparison"
              data={revenueData}
              dataKeys={['revenue', 'expenses']}
              colors={['#3b82f6', '#ef4444']}
            />
          </div>

          {/* Recent activity */}
          <div className="lg:col-span-1">
            <RecentActivity activities={activityData} />
          </div>
        </div>

        {/* Additional metrics row */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Conversion Rate</span>
                <span className="text-sm font-medium text-gray-900">3.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Order Value</span>
                <span className="text-sm font-medium text-gray-900">$89.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
                <span className="text-sm font-medium text-gray-900">4.8/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-medium text-gray-900">1.2s</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">System Health</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Server Uptime</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-900">99.9%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database Health</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-900">Optimal</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">API Response</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-900">Good</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cache Hit Rate</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-900">95.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}