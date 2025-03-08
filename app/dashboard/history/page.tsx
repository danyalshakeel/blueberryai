import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ArrowDown, CalendarIcon, ChevronUp, Download, Filter, Search, Settings } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="px-4 md:px-6 py-8">
          {/* Add a navigation bar at the top */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard/trading">Live Trading</Link>
              </Button>
              <Button variant="default" size="sm" className="bg-primary" asChild>
                <Link href="/dashboard/history">Trading History</Link>
              </Button>
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard/ai-settings">AI Settings</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Trading History</h1>
              <p className="text-muted-foreground">View and analyze your past trading activities.</p>
            </div>
            {/*
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            */}
          </div>

          {/* Performance Summary */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-green-500 flex items-center">
                  <ChevronUp className="mr-1 h-4 w-4" />
                  +2.3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profit/Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+$12,487.32</div>
                <p className="text-xs text-green-500 flex items-center">
                  <ChevronUp className="mr-1 h-4 w-4" />
                  +15.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Trade Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4h 23m</div>
                <p className="text-xs text-muted-foreground">Based on closed positions</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="all" className="space-y-6">
            {/* Enhance the filter section with more interactive buttons */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <TabsList>
                <TabsTrigger value="all">All Trades</TabsTrigger>
                <TabsTrigger value="open">Open Positions</TabsTrigger>
                <TabsTrigger value="closed">Closed Positions</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled Orders</TabsTrigger>
              </TabsList>

              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search trades..." className="w-[200px] pl-8" />
                </div>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Asset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Assets</SelectItem>
                    <SelectItem value="btc">Bitcoin</SelectItem>
                    <SelectItem value="eth">Ethereum</SelectItem>
                    <SelectItem value="stocks">Stocks</SelectItem>
                    <SelectItem value="forex">Forex</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[180px] justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Date Range</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="range" numberOfMonths={2} />
                    <div className="flex items-center justify-between p-3 border-t">
                      <Button variant="ghost" size="sm">
                        Cancel
                      </Button>
                      <Button size="sm">Apply Range</Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button variant="outline" size="icon" title="View Options">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              {/* Enhance the trades table with interactive buttons for each trade */}
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-8 border-b px-4 py-3 text-sm font-medium">
                      <div>Date & Time</div>
                      <div>Market</div>
                      <div>Type</div>
                      <div>Price</div>
                      <div>Amount</div>
                      <div>Total</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>

                    {/* Trade Row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-15</span>
                        <span className="text-xs text-muted-foreground">14:32:45</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">BTC</span>
                        </div>
                        <span>BTC/USD</span>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$43,521.25</div>
                      <div>0.12 BTC</div>
                      <div>$5,222.55</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Additional trade rows follow the same pattern */}
                    {/* Second trade row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-15</span>
                        <span className="text-xs text-muted-foreground">12:18:32</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">ETH</span>
                        </div>
                        <span>ETH/USD</span>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                          Sell
                        </Badge>
                      </div>
                      <div>$2,245.50</div>
                      <div>1.5 ETH</div>
                      <div>$3,368.25</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Trade Row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-14</span>
                        <span className="text-xs text-muted-foreground">23:45:12</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">AAPL</span>
                        </div>
                        <span>AAPL</span>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$178.25</div>
                      <div>10 shares</div>
                      <div>$1,782.50</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Trade Row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-14</span>
                        <span className="text-xs text-muted-foreground">18:22:05</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">BTC</span>
                        </div>
                        <span>BTC/USD</span>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                          Sell
                        </Badge>
                      </div>
                      <div>$42,980.75</div>
                      <div>0.05 BTC</div>
                      <div>$2,149.04</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Trade Row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-14</span>
                        <span className="text-xs text-muted-foreground">15:10:45</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">MSFT</span>
                        </div>
                        <span>MSFT</span>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$325.75</div>
                      <div>5 shares</div>
                      <div>$1,628.75</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        >
                          Pending
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Trade Row */}
                    <div className="grid grid-cols-8 px-4 py-3 text-sm hover:bg-muted/50">
                      <div className="flex flex-col">
                        <span>2023-05-13</span>
                        <span className="text-xs text-muted-foreground">09:45:22</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold">ETH</span>
                        </div>
                        <span>ETH/USD</span>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$2,198.25</div>
                      <div>2.0 ETH</div>
                      <div>$4,396.50</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Search className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhance the pagination controls at the bottom */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="Rows" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-muted-foreground">Showing 1-10 of 248 trades</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 p-0">
                    1
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 p-0">
                    2
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 p-0">
                    3
                  </Button>
                  <span className="mx-1">...</span>
                  <Button variant="ghost" size="sm" className="w-8 p-0">
                    25
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="open" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-6">
                    <h3 className="text-lg font-medium">Open Positions</h3>
                    <p className="text-muted-foreground">View your currently active trading positions</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="closed" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-6">
                    <h3 className="text-lg font-medium">Closed Positions</h3>
                    <p className="text-muted-foreground">View your completed trades</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-6">
                    <h3 className="text-lg font-medium">Cancelled Orders</h3>
                    <p className="text-muted-foreground">View your cancelled trading orders</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Performance Analytics */}
          {/* Add interactive controls to the Performance Analytics section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold tracking-tight">Performance Analytics</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Customize View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Performance by Asset</CardTitle>
                  <CardDescription>Win/loss ratio and profitability by asset</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/10 rounded-md flex items-center justify-center">
                    <div className="text-muted-foreground">Asset Performance Chart</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Strategy Performance</CardTitle>
                  <CardDescription>Performance comparison of different AI strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/10 rounded-md flex items-center justify-center">
                    <div className="text-muted-foreground">Strategy Performance Chart</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

