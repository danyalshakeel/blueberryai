import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Brain,
  Clock,
  Code,
  Cpu,
  Database,
  Globe,
  Lock,
  Sliders,
  Smartphone,
  Zap,
  Shield,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Platform Features</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the powerful features that make BlueberryAi the leading platform for AI-powered trading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="ai" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="ai">AI Trading</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
              </div>

              {/* AI Trading Features */}
              <TabsContent value="ai" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">AI Trading Features</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our cutting-edge AI algorithms power your trading strategy with precision and speed.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Neural Network Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Our deep learning models analyze market patterns and predict price movements with remarkable
                        accuracy.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Microsecond Execution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Execute trades at lightning speed with our low-latency infrastructure, ensuring you never miss
                        an opportunity.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Sliders className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Customizable Algorithms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Tailor your trading strategy with adjustable parameters to match your risk tolerance and
                        investment goals.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Multi-Market Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Trade across multiple markets and asset classes with a single platform, from stocks to
                        cryptocurrencies.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>24/7 Trading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Our AI never sleeps, continuously monitoring markets and executing trades even when you're away.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Strategy Backtesting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Test your trading strategies against historical data to validate their effectiveness before
                        risking real capital.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Analytics Features */}
              <TabsContent value="analytics" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Analytics Features</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Gain deep insights into your trading performance with our comprehensive analytics tools.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Real-Time Dashboards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Monitor your portfolio performance in real-time with intuitive, customizable dashboards.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Historical Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Analyze your trading history with detailed metrics and visualizations to identify strengths and
                        weaknesses.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>AI Performance Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Understand how our AI is making trading decisions with transparent performance metrics and
                        explanations.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Mobile Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Access your trading analytics on the go with our mobile app, available for iOS and Android.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Security Features */}
              <TabsContent value="security" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Security Features</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Your funds and data are protected with enterprise-grade security measures.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Multi-Factor Authentication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Secure your account with multiple layers of authentication, including biometric verification.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Cold Storage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        The majority of funds are stored in offline, cold storage wallets to prevent unauthorized
                        access.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Encryption</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        All data is encrypted with military-grade encryption both in transit and at rest.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Technical Specifications</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Built for Performance</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is engineered with cutting-edge technology to deliver unparalleled trading performance.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mt-12">
              <div className="rounded-lg border bg-background shadow-sm">
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold">System Architecture</h3>
                </div>
                <div className="p-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Infrastructure</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Distributed cloud architecture</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Global server locations for low latency</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Auto-scaling to handle peak trading volumes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>99.99% uptime guarantee</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">AI Technology</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Deep neural networks for market analysis</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Reinforcement learning for strategy optimization</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Natural language processing for news analysis</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Continuous model training and improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-background shadow-sm mt-6">
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                </div>
                <div className="p-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Speed</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Trade execution in under 10 microseconds</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Real-time data processing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Instant market analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Capacity</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Millions of trades processed daily</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Support for thousands of concurrent users</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>Petabytes of market data analyzed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience These Features Today
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start trading with the power of AI and see the difference for yourself.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button size="lg" asChild>
                    <Link href="/ai-trading">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

