"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  ChevronUp,
  DollarSign,
  LineChart,
  PieChart,
  Settings,
  TrendingUp,
  Wallet,
} from "lucide-react"

// Mock data for demonstration
const mockPortfolioData = {
  totalBalance: 45231.89,
  balanceChange: 20.1,
  activeTrades: 12,
  tradesChange: 3,
  winRate: 68.2,
  winRateChange: 4.3,
  monthlyProfit: 2463.65,
  profitChange: -2.5,
}

const mockRecentActivity = [
  { id: 1, type: "trade", name: "BTC/USD Long", time: "Today, 10:45 AM", amount: 245.23, positive: true },
  { id: 2, type: "trade", name: "ETH/USD Short", time: "Today, 9:12 AM", amount: -78.45, positive: false },
  { id: 3, type: "deposit", name: "Deposit", time: "Yesterday, 2:34 PM", amount: 1000.0, positive: true },
  { id: 4, type: "trade", name: "AAPL Long", time: "Yesterday, 11:23 AM", amount: 432.87, positive: true },
]

export default function DashboardPage() {
  const [portfolioData, setPortfolioData] = useState(mockPortfolioData)
  const [recentActivity, setRecentActivity] = useState(mockRecentActivity)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update portfolio data with small random changes
      setPortfolioData((prev) => ({
        ...prev,
        totalBalance: prev.totalBalance + (Math.random() * 100 - 50),
        activeTrades: Math.max(
          8,
          Math.min(15, prev.activeTrades + (Math.random() > 0.7 ? 1 : Math.random() > 0.7 ? -1 : 0)),
        ),
        winRate: Math.max(60, Math.min(75, prev.winRate + (Math.random() * 1 - 0.5))),
        monthlyProfit: prev.monthlyProfit + (Math.random() * 50 - 25),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Function to refresh data
  const refreshData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setPortfolioData({
        ...mockPortfolioData,
        totalBalance: mockPortfolioData.totalBalance + (Math.random() * 1000 - 500),
        monthlyProfit: mockPortfolioData.monthlyProfit + (Math.random() * 200 - 100),
      })
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="flex-1">
      <div className="px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John! Here's an overview of your trading activity.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={refreshData} disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⟳</span>
                  Refreshing...
                </>
              ) : (
                <>
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className={isLoading ? "opacity-60 animate-pulse" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${portfolioData.totalBalance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`text-${portfolioData.balanceChange >= 0 ? "green" : "red"}-500 flex items-center`}>
                  {portfolioData.balanceChange >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(portfolioData.balanceChange)}%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          <Card className={isLoading ? "opacity-60 animate-pulse" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(portfolioData.activeTrades)}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`text-${portfolioData.tradesChange >= 0 ? "green" : "red"}-500 flex items-center`}>
                  {portfolioData.tradesChange >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(portfolioData.tradesChange)}
                </span>
                from yesterday
              </p>
            </CardContent>
          </Card>
          <Card className={isLoading ? "opacity-60 animate-pulse" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioData.winRate.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                <span className={`text-${portfolioData.winRateChange >= 0 ? "green" : "red"}-500 flex items-center`}>
                  {portfolioData.winRateChange >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(portfolioData.winRateChange)}%
                </span>
                from last week
              </p>
            </CardContent>
          </Card>
          <Card className={isLoading ? "opacity-60 animate-pulse" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${portfolioData.monthlyProfit.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`text-${portfolioData.profitChange >= 0 ? "green" : "red"}-500 flex items-center`}>
                  {portfolioData.profitChange >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(portfolioData.profitChange)}%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trades">Trades</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="ai-strategies">AI Strategies</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Chart */}
              <Card className={`lg:col-span-5 ${isLoading ? "opacity-60 animate-pulse" : ""}`}>
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>Your portfolio value over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/10 rounded-md flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className={`lg:col-span-2 ${isLoading ? "opacity-60 animate-pulse" : ""}`}>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest trading activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center">
                        <div className="mr-2 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {activity.type === "trade" ? (
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          ) : (
                            <Wallet className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{activity.name}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        <div className={`ml-auto font-medium ${activity.positive ? "text-green-500" : "text-red-500"}`}>
                          {activity.positive ? "+" : ""}
                          {activity.amount.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional cards for top assets, AI strategies, and market insights */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* These cards would be similar to the ones above, with their own state and data */}
              {/* For brevity, I'm not implementing all of them in detail */}
            </div>
          </TabsContent>

          <TabsContent value="trades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Trades</CardTitle>
                <CardDescription>Your currently active trading positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
                    <div>Asset</div>
                    <div>Type</div>
                    <div>Entry Price</div>
                    <div>Current Price</div>
                    <div>P/L</div>
                  </div>
                  {/* Active trades would be mapped here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Detailed analysis of your trading performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/10 rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-strategies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Trading Strategies</CardTitle>
                <CardDescription>Manage your automated AI trading strategies</CardDescription>
              </CardHeader>
              <CardContent>{/* AI strategies would be mapped here */}</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

