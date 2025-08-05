import { BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const analyticsData = [
  { name: 'Page Views', value: 4000, growth: 12 },
  { name: 'Unique Visitors', value: 3000, growth: 8 },
  { name: 'Bounce Rate', value: 2000, growth: -5 },
  { name: 'Session Duration', value: 2780, growth: 15 },
  { name: 'Conversion Rate', value: 1890, growth: 3 },
  { name: 'Return Visitors', value: 2390, growth: 20 },
]

const pieData = [
  { name: 'Desktop', value: 65, color: '#3b82f6' },
  { name: 'Mobile', value: 25, color: '#10b981' },
  { name: 'Tablet', value: 10, color: '#f59e0b' },
]

const areaData = [
  { month: 'Jan', users: 4000, sessions: 2400, pageviews: 2400 },
  { month: 'Feb', users: 3000, sessions: 1398, pageviews: 2210 },
  { month: 'Mar', users: 2000, sessions: 9800, pageviews: 2290 },
  { month: 'Apr', users: 2780, sessions: 3908, pageviews: 2000 },
  { month: 'May', users: 1890, sessions: 4800, pageviews: 2181 },
  { month: 'Jun', users: 2390, sessions: 3800, pageviews: 2500 },
]

export default function Analytics() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-bold leading-6 text-gray-900">Analytics</h1>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            Detailed analytics and insights about your website performance.
          </p>
        </div>

        {/* Main charts grid */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bar chart */}
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie chart */}
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Area chart */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="sessions"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="pageviews"
                    stackId="1"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Analytics insights */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Top Pages</h3>
            <div className="space-y-3">
              {[
                { page: '/dashboard', views: '12,345', percentage: 25 },
                { page: '/analytics', views: '8,901', percentage: 18 },
                { page: '/reports', views: '6,789', percentage: 14 },
                { page: '/users', views: '4,567', percentage: 9 },
                { page: '/settings', views: '3,210', percentage: 7 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{item.page}</div>
                    <div className="text-sm text-gray-500">{item.views} views</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.percentage * 4}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Conversion Funnel</h3>
            <div className="space-y-4">
              {[
                { stage: 'Visitors', count: 10000, percentage: 100 },
                { stage: 'Product Views', count: 5000, percentage: 50 },
                { stage: 'Add to Cart', count: 1500, percentage: 15 },
                { stage: 'Checkout', count: 800, percentage: 8 },
                { stage: 'Purchase', count: 320, percentage: 3.2 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{item.stage}</div>
                    <div className="text-sm text-gray-500">{item.count.toLocaleString()}</div>
                  </div>
                  <div className="text-sm text-gray-600">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Real-time Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Users</span>
                <span className="text-lg font-semibold text-green-600">1,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pages/Session</span>
                <span className="text-lg font-semibold text-gray-900">3.2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg. Session</span>
                <span className="text-lg font-semibold text-gray-900">4m 32s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-lg font-semibold text-red-600">32.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}