import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Code, Save, ArrowDown, ArrowUp, Database, RefreshCw, Cpu, Zap, Settings, Sliders } from "lucide-react"
import Link from "next/link"

export default function AiSettingsPage() {
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
              <Button variant="outline" size="sm" className="bg-background" asChild>
                <Link href="/dashboard/history">Trading History</Link>
              </Button>
              <Button variant="default" size="sm" className="bg-primary" asChild>
                <Link href="/dashboard/ai-settings">AI Settings</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Main Content */}
          {/* Add more options to the Tabs section */}
          <Tabs defaultValue="general" className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="strategies">Strategies</TabsTrigger>
                <TabsTrigger value="risk">Risk Management</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" title="Import Settings">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Import
                </Button>
                <Button variant="outline" size="sm" title="Export Settings">
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* General Settings */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Agent Status</CardTitle>
                  <CardDescription>Enable or disable your AI trading agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ai-status">Trading Status</Label>
                      <div className="text-sm text-muted-foreground">
                        When enabled, the AI agent will trade on your behalf based on your settings
                      </div>
                    </div>
                    <Switch id="ai-status" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Notifications</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive notifications about trades and important events
                      </div>
                    </div>
                    <Switch id="notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-update">Auto-Update AI Models</Label>
                      <div className="text-sm text-muted-foreground">
                        Automatically update to the latest AI models when available
                      </div>
                    </div>
                    <Switch id="auto-update" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Schedule</CardTitle>
                  <CardDescription>Set when your AI agent should be active</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="always-active" />
                    <Label htmlFor="always-active">Always active (24/7)</Label>
                  </div>

                  <div className="space-y-2">
                    <Label>Active Days</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox id={`day-${day.toLowerCase()}`} defaultChecked={day !== "Sat" && day !== "Sun"} />
                          <Label htmlFor={`day-${day.toLowerCase()}`}>{day}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Start Time</Label>
                      <Input id="start-time" type="time" defaultValue="08:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">End Time</Label>
                      <Input id="end-time" type="time" defaultValue="20:00" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                        <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                        <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                        <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                        <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Preferences</CardTitle>
                  <CardDescription>Select which markets your AI agent should trade in</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Asset Classes</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="crypto" defaultChecked />
                        <Label htmlFor="crypto">Cryptocurrencies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="stocks" defaultChecked />
                        <Label htmlFor="stocks">Stocks</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="forex" />
                        <Label htmlFor="forex">Forex</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="commodities" />
                        <Label htmlFor="commodities">Commodities</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Assets</Label>
                    <Textarea
                      placeholder="Enter comma-separated assets (e.g., BTC, ETH, AAPL, MSFT)"
                      defaultValue="BTC, ETH, AAPL, MSFT, GOOGL, AMZN"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty to allow the AI to trade all available assets within the selected classes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Strategies Settings */}
            <TabsContent value="strategies" className="space-y-6">
              {/* Add Template buttons to the AI Trading Strategies card */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Trading Strategies</CardTitle>
                  <CardDescription>Configure and customize your trading strategies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Momentum Trading</h3>
                        <p className="text-sm text-muted-foreground">
                          Capitalizes on the continuation of existing market trends
                        </p>
                      </div>
                      <Switch id="momentum-strategy" defaultChecked />
                    </div>

                    <div className="space-y-2 pl-6 border-l-2 border-primary/20">
                      <div className="space-y-1">
                        <Label htmlFor="momentum-lookback">Lookback Period (days)</Label>
                        <div className="flex items-center gap-2">
                          <Slider id="momentum-lookback" defaultValue={[14]} max={30} step={1} className="flex-1" />
                          <span className="w-12 text-center">14</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="momentum-threshold">Signal Threshold</Label>
                        <div className="flex items-center gap-2">
                          <Slider id="momentum-threshold" defaultValue={[0.5]} max={1} step={0.1} className="flex-1" />
                          <span className="w-12 text-center">0.5</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label>Technical Indicators</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="rsi" defaultChecked />
                            <Label htmlFor="rsi">RSI</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="macd" defaultChecked />
                            <Label htmlFor="macd">MACD</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="ma" defaultChecked />
                            <Label htmlFor="ma">Moving Averages</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="bb" />
                            <Label htmlFor="bb">Bollinger Bands</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Mean Reversion</h3>
                        <p className="text-sm text-muted-foreground">
                          Assumes that prices will revert to their historical average
                        </p>
                      </div>
                      <Switch id="reversion-strategy" defaultChecked />
                    </div>

                    <div className="space-y-2 pl-6 border-l-2 border-primary/20">
                      <div className="space-y-1">
                        <Label htmlFor="reversion-window">Mean Window (days)</Label>
                        <div className="flex items-center gap-2">
                          <Slider id="reversion-window" defaultValue={[20]} max={50} step={1} className="flex-1" />
                          <span className="w-12 text-center">20</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="reversion-deviation">Deviation Threshold</Label>
                        <div className="flex items-center gap-2">
                          <Slider id="reversion-deviation" defaultValue={[2]} max={5} step={0.1} className="flex-1" />
                          <span className="w-12 text-center">2.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Breakout Trading</h3>
                        <p className="text-sm text-muted-foreground">
                          Enters the market when price breaks above or below a defined range
                        </p>
                      </div>
                      <Switch id="breakout-strategy" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Custom Strategy</h3>
                        <p className="text-sm text-muted-foreground">Create your own custom trading strategy</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Code className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </div>
                  </div>

                  {/* Add template controls at the bottom */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      <Database className="mr-2 h-4 w-4" />
                      Load Template
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Save className="mr-2 h-4 w-4" />
                      Save as Template
                    </Button>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reset to Default
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategy Allocation</CardTitle>
                  <CardDescription>Determine how your capital is allocated across different strategies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="momentum-allocation">Momentum Trading</Label>
                      <span className="text-sm">60%</span>
                    </div>
                    <Slider id="momentum-allocation" defaultValue={[60]} max={100} step={5} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="reversion-allocation">Mean Reversion</Label>
                      <span className="text-sm">40%</span>
                    </div>
                    <Slider id="reversion-allocation" defaultValue={[40]} max={100} step={5} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="breakout-allocation">Breakout Trading</Label>
                      <span className="text-sm">0%</span>
                    </div>
                    <Slider id="breakout-allocation" defaultValue={[0]} max={100} step={5} />
                  </div>

                  <div className="pt-2 text-sm text-muted-foreground">
                    Note: Total allocation should equal 100%. The system will automatically adjust values to ensure
                    this.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Risk Management */}
            <TabsContent value="risk" className="space-y-6">
              {/* Add action buttons to the Risk Parameters card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Risk Parameters</CardTitle>
                    <CardDescription>Configure risk management settings for your AI agent</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Run Risk Analysis
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="risk-level">Risk Level</Label>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                    <Slider id="risk-level" defaultValue={[50]} max={100} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Conservative</span>
                      <span>Moderate</span>
                      <span>Aggressive</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-position-size">Maximum Position Size</Label>
                    <div className="flex space-x-2">
                      <Input id="max-position-size" type="number" defaultValue="10" />
                      <Select defaultValue="percent">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percent">% of Portfolio</SelectItem>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-xs text-muted-foreground">Maximum amount to allocate to a single position</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-drawdown">Maximum Drawdown</Label>
                    <div className="flex space-x-2 items-center">
                      <Input id="max-drawdown" type="number" defaultValue="15" />
                      <span>%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      AI will pause trading if portfolio drawdown exceeds this percentage
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stop-loss">Default Stop Loss</Label>
                    <div className="flex space-x-2 items-center">
                      <Input id="stop-loss" type="number" defaultValue="5" />
                      <span>%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="take-profit">Default Take Profit</Label>
                    <div className="flex space-x-2 items-center">
                      <Input id="take-profit" type="number" defaultValue="15" />
                      <span>%</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="trailing-stop" defaultChecked />
                    <Label htmlFor="trailing-stop">Use trailing stop loss</Label>
                  </div>

                  {/* Add buttons at the bottom */}
                  <div className="flex justify-end space-x-2 pt-4 mt-4 border-t">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Apply Risk Settings</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Diversification</CardTitle>
                  <CardDescription>Configure how your portfolio should be diversified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-asset-allocation">Maximum Allocation per Asset Class</Label>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Cryptocurrencies</span>
                          <span className="text-sm">60%</span>
                        </div>
                        <Slider defaultValue={[60]} max={100} step={5} />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Stocks</span>
                          <span className="text-sm">30%</span>
                        </div>
                        <Slider defaultValue={[30]} max={100} step={5} />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Forex</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Slider defaultValue={[5]} max={100} step={5} />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Commodities</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Slider defaultValue={[5]} max={100} step={5} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-correlation">Maximum Correlation</Label>
                    <div className="flex space-x-2 items-center">
                      <Slider id="max-correlation" defaultValue={[0.7]} max={1} step={0.1} className="flex-1" />
                      <span className="w-12 text-center">0.7</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      AI will avoid adding highly correlated assets to reduce portfolio risk
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advanced Settings */}
            <TabsContent value="advanced" className="space-y-6">
              {/* Add test buttons to the AI Model Configuration card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>AI Model Configuration</CardTitle>
                    <CardDescription>Advanced settings for the AI trading model</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Cpu className="mr-2 h-4 w-4" />
                      Test Model
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="model-version">AI Model Version</Label>
                    <Select defaultValue="v4">
                      <SelectTrigger id="model-version">
                        <SelectValue placeholder="Select model version" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v4">v4.0 (Latest - Recommended)</SelectItem>
                        <SelectItem value="v3">v3.5 (Stable)</SelectItem>
                        <SelectItem value="v2">v2.8 (Legacy)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prediction-horizon">Prediction Horizon</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="prediction-horizon">
                        <SelectValue placeholder="Select prediction horizon" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (1-24 hours)</SelectItem>
                        <SelectItem value="medium">Medium (1-7 days)</SelectItem>
                        <SelectItem value="long">Long (1-4 weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      How far into the future the AI should attempt to predict market movements
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="data-sources">Data Sources</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="price-data" defaultChecked />
                        <Label htmlFor="price-data">Price Data</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="volume-data" defaultChecked />
                        <Label htmlFor="volume-data">Volume Data</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sentiment-data" defaultChecked />
                        <Label htmlFor="sentiment-data">Market Sentiment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="news-data" defaultChecked />
                        <Label htmlFor="news-data">News Analysis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social-data" defaultChecked />
                        <Label htmlFor="social-data">Social Media Trends</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="macro-data" />
                        <Label htmlFor="macro-data">Macroeconomic Indicators</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="execution-speed">Execution Speed</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger id="execution-speed">
                        <SelectValue placeholder="Select execution speed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ultra">Ultra Fast (Microseconds)</SelectItem>
                        <SelectItem value="high">High Speed (Milliseconds)</SelectItem>
                        <SelectItem value="balanced">Balanced (Default)</SelectItem>
                        <SelectItem value="careful">Careful (Prioritize Accuracy)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Faster execution may result in higher fees but reduces slippage in volatile markets
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backtest-period">Backtest Period</Label>
                    <Select defaultValue="1y">
                      <SelectTrigger id="backtest-period">
                        <SelectValue placeholder="Select backtest period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3m">3 Months</SelectItem>
                        <SelectItem value="6m">6 Months</SelectItem>
                        <SelectItem value="1y">1 Year</SelectItem>
                        <SelectItem value="3y">3 Years</SelectItem>
                        <SelectItem value="5y">5 Years</SelectItem>
                        <SelectItem value="max">Maximum Available</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Period used to backtest and optimize AI strategies</p>
                  </div>

                  {/* Add buttons at the bottom */}
                  <div className="flex justify-end space-x-2 pt-4 mt-4 border-t">
                    <Button variant="outline">Use Latest Models</Button>
                    <Button>Apply Model Settings</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API & Integration</CardTitle>
                  <CardDescription>Configure API connections and third-party integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex space-x-2">
                      <Input id="api-key" type="password" value="••••••••••••••••••••••••••••••" readOnly />
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use this key to access the BlueberryAI API programmatically
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Connected Exchanges</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-bold">CB</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Coinbase Pro</p>
                            <p className="text-xs text-muted-foreground">Connected on May 12, 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-bold">BN</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Binance</p>
                            <p className="text-xs text-muted-foreground">Connected on April 3, 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      Connect New Exchange
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label>Webhook Notifications</Label>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm">Discord Webhook</div>
                        <div className="text-xs text-muted-foreground">Receive trade notifications on Discord</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm">Slack Webhook</div>
                        <div className="text-xs text-muted-foreground">Receive trade notifications on Slack</div>
                      </div>
                      <Switch />
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      Configure Webhooks
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Add a new Templates tab section */}
            <TabsContent value="templates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Strategy Templates</CardTitle>
                  <CardDescription>Save and load AI trading strategy templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Momentum Strategy</h3>
                          <p className="text-sm text-muted-foreground">High-performance trend following</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Load
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Settings className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Conservative Strategy</h3>
                          <p className="text-sm text-muted-foreground">Lower risk with stable returns</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Load
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Sliders className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Custom Strategy #1</h3>
                          <p className="text-sm text-muted-foreground">Your personalized strategy</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Load
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 mt-4 border-t">
                    <Button variant="outline">Import Template</Button>
                    <Button>Create New Template</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        {/* Add additional buttons to the footer of the page */}
        <div className="flex justify-between items-center mt-8">
          <Button variant="outline" size="lg" className="space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Reset All Settings</span>
          </Button>

          <div className="flex space-x-2">
            <Button variant="outline" size="lg">
              Cancel Changes
            </Button>
            <Button size="lg">
              <Save className="mr-2 h-4 w-4" />
              Save All Changes
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

