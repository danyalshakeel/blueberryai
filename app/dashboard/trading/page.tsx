import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { TradingChart } from "@/components/trading-chart"
import { ArrowDown, ArrowUp, ChevronUp, Clock, RefreshCw, Settings, Filter, Download, Database } from "lucide-react"
import Link from "next/link"

export default function TradingPage() {
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
              <Button variant="default" size="sm" className="bg-primary" asChild>
                <Link href="/dashboard/trading">Live Trading</Link>
              </Button>
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard/history">Trading History</Link>
              </Button>
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard/ai-settings">AI Settings</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Select defaultValue="btc-usd">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc-usd">BTC/USD</SelectItem>
                  <SelectItem value="eth-usd">ETH/USD</SelectItem>
                  <SelectItem value="aapl">AAPL</SelectItem>
                  <SelectItem value="msft">MSFT</SelectItem>
                  <SelectItem value="tsla">TSLA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Market Overview */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$43,528.75</div>
                <p className="text-xs text-green-500 flex items-center">
                  <ChevronUp className="mr-1 h-4 w-4" />
                  +2.3% (24h)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.2B</div>
                <p className="text-xs text-muted-foreground">+15% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.45 BTC</div>
                <p className="text-xs text-muted-foreground">$19,587.94</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">P/L</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+$876.32</div>
                <p className="text-xs text-green-500 flex items-center">
                  <ChevronUp className="mr-1 h-4 w-4" />
                  +4.68%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Chart Section - Takes up 2/3 of the space */}
            <div className="md:col-span-2 space-y-6">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>BTC/USD</CardTitle>
                    <CardDescription>Bitcoin to US Dollar</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="1h">
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5m">5m</SelectItem>
                        <SelectItem value="15m">15m</SelectItem>
                        <SelectItem value="1h">1h</SelectItem>
                        <SelectItem value="4h">4h</SelectItem>
                        <SelectItem value="1d">1D</SelectItem>
                        <SelectItem value="1w">1W</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] w-full">
                    <TradingChart />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Trades */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>Recent Trades</CardTitle>
                    <CardDescription>Latest trading activity for this market</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
                      <div>Time</div>
                      <div>Type</div>
                      <div>Price</div>
                      <div>Amount</div>
                      <div>Total</div>
                    </div>
                    <div className="grid grid-cols-5 items-center">
                      <div className="text-sm">12:45:32</div>
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
                    </div>
                    <div className="grid grid-cols-5 items-center">
                      <div className="text-sm">12:42:18</div>
                      <div>
                        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                          Sell
                        </Badge>
                      </div>
                      <div>$43,498.50</div>
                      <div>0.08 BTC</div>
                      <div>$3,479.88</div>
                    </div>
                    <div className="grid grid-cols-5 items-center">
                      <div className="text-sm">12:38:45</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$43,475.00</div>
                      <div>0.15 BTC</div>
                      <div>$6,521.25</div>
                    </div>
                    <div className="grid grid-cols-5 items-center">
                      <div className="text-sm">12:35:22</div>
                      <div>
                        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                          Sell
                        </Badge>
                      </div>
                      <div>$43,450.75</div>
                      <div>0.05 BTC</div>
                      <div>$2,172.54</div>
                    </div>
                    <div className="grid grid-cols-5 items-center">
                      <div className="text-sm">12:30:10</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Buy
                        </Badge>
                      </div>
                      <div>$43,425.50</div>
                      <div>0.10 BTC</div>
                      <div>$4,342.55</div>
                    </div>
                  </div>

                  {/* Add pagination controls */}
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="ghost" size="sm" disabled>
                      Previous
                    </Button>
                    <div className="text-sm text-muted-foreground">Page 1 of 5</div>
                    <Button variant="ghost" size="sm">
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Takes up 1/3 of the space */}
            <div className="space-y-6">
              {/* AI Agent Controls */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>AI Trading Agent</CardTitle>
                    <CardDescription>Configure your AI trading parameters</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" title="View Agent History">
                      <Clock className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" title="Template Library">
                      <Database className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" title="Help">
                      <div className="h-4 w-4 rounded-full border flex items-center justify-center text-xs">?</div>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Trading Status section remains the same */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Trading Status</div>
                      <div className="text-xs text-muted-foreground">Enable/disable AI trading</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Strategy</div>
                    <Select defaultValue="momentum">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="momentum">Momentum Trading</SelectItem>
                        <SelectItem value="swing">Swing Trading</SelectItem>
                        <SelectItem value="day">Day Trading</SelectItem>
                        <SelectItem value="scalping">Scalping</SelectItem>
                        <SelectItem value="custom">Custom Strategy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">Risk Level</div>
                      <div className="text-sm text-muted-foreground">Medium</div>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>Conservative</div>
                      <div>Aggressive</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Position Size</div>
                    <div className="flex space-x-2">
                      <Input type="number" placeholder="0.1" defaultValue="0.1" />
                      <Select defaultValue="btc">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="Asset" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="percent">%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Take Profit</div>
                    <div className="flex space-x-2">
                      <Input type="number" placeholder="5" defaultValue="5" />
                      <div className="flex items-center px-3 border rounded-md">%</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Stop Loss</div>
                    <div className="flex space-x-2">
                      <Input type="number" placeholder="2" defaultValue="2" />
                      <div className="flex items-center px-3 border rounded-md">%</div>
                    </div>
                  </div>

                  {/* Add expanded button options at the bottom */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button variant="outline" className="w-full">
                      <div className="h-4 w-4 mr-2 rounded-full bg-yellow-500"></div>
                      Test Strategy
                    </Button>
                    <Button variant="outline" className="w-full">
                      <div className="h-4 w-4 mr-2 rounded-full bg-blue-500"></div>
                      Save as Template
                    </Button>
                    <Button variant="outline" className="w-full">
                      <div className="h-4 w-4 mr-2 rounded-full bg-red-500"></div>
                      Reset Parameters
                    </Button>
                    <Button className="w-full">Apply Changes</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Market Signals */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Market Signals</CardTitle>
                  <CardDescription>Real-time trading signals from our AI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm font-medium">Buy Signal</div>
                    </div>
                    <div className="text-sm font-medium">Strong</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-medium">Signal Strength</div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-medium">Reasoning</div>
                    <div className="text-sm text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bullish engulfing pattern detected</li>
                        <li>RSI showing oversold conditions</li>
                        <li>MACD crossover confirmed</li>
                        <li>Increased buying volume</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-medium">Recommended Entry</div>
                    <div className="text-sm">$43,450 - $43,550</div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div>Signal Generated:</div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>2 minutes ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <ArrowUp className="mr-2 h-4 w-4" />
                      Buy
                    </Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      Sell
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full">
                      Modify Position
                    </Button>
                    <Button variant="outline" className="w-full">
                      Set Alert
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    Close All Positions
                  </Button>
                  <Button variant="outline" className="w-full">
                    Cancel All Orders
                  </Button>
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

