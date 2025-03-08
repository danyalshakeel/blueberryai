import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Brain, CheckCircle2, Clock, Code, Cpu, Database, Lock, Sliders, Zap } from "lucide-react"

export default function AiTradingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Trading
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the future of trading with our advanced AI algorithms. Automate your trading strategy,
                    minimize emotions, and maximize returns.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#get-started">
                      Start Trading Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#how-it-works">How It Works</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">24/7</span>
                    <span className="text-muted-foreground">Trading</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">Microsecond</span>
                    <span className="text-muted-foreground">Execution</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">Advanced</span>
                    <span className="text-muted-foreground">Risk Management</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background border rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 flex flex-col justify-center">
                        <div className="space-y-4">
                          <div className="h-2 w-1/2 bg-primary/20 rounded-full"></div>
                          <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
                          <div className="h-2 w-1/3 bg-primary/20 rounded-full"></div>
                          <div className="h-20 w-full bg-primary/10 rounded-lg mt-4"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-16 bg-primary/10 rounded-lg"></div>
                            <div className="h-16 bg-primary/10 rounded-lg"></div>
                          </div>
                          <div className="h-2 w-1/4 bg-primary/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Trading Simplified</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI trading platform combines cutting-edge technology with user-friendly interfaces to make
                  algorithmic trading accessible to everyone.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our AI continuously analyzes market data, news, and trends to identify profitable trading
                    opportunities across multiple markets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sliders className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. Strategy Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Set your risk tolerance, investment goals, and trading preferences. Our platform adapts the AI
                    strategies to match your unique requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Automated Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The AI executes trades at optimal times with microsecond precision, eliminating emotional
                    decision-making and capturing opportunities 24/7.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Key Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose AI Trading</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the advantages of letting AI handle your trading strategy.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Emotion-Free Trading</h3>
                        <p className="text-sm text-muted-foreground">
                          AI eliminates emotional decision-making, sticking to your strategy even in volatile markets.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">24/7 Market Monitoring</h3>
                        <p className="text-sm text-muted-foreground">
                          Our AI never sleeps, constantly analyzing markets and executing trades even when you're away.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Advanced Risk Management</h3>
                        <p className="text-sm text-muted-foreground">
                          Sophisticated risk controls protect your capital and help manage drawdowns effectively.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Microsecond Execution</h3>
                        <p className="text-sm text-muted-foreground">
                          Execute trades at lightning speed, capturing opportunities that humans would miss.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Data-Driven Decisions</h3>
                        <p className="text-sm text-muted-foreground">
                          Our AI analyzes vast amounts of market data to make informed trading decisions based on
                          patterns and trends.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Continuous Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          The AI continuously learns and adapts to changing market conditions, improving its performance
                          over time.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Behind Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Technology</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Power Behind Our AI</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our AI trading platform is built on cutting-edge technology, combining deep learning, natural language
                  processing, and reinforcement learning to deliver exceptional trading performance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <p className="font-medium">Deep Neural Networks</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <p className="font-medium">Big Data Processing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <p className="font-medium">Proprietary Algorithms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="font-medium">Low-Latency Infrastructure</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <p className="font-medium">Enterprise-Grade Security</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-background border rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl p-6">
                        <div className="h-full flex flex-col justify-between">
                          <div className="space-y-2">
                            <div className="h-2 w-1/3 bg-primary/20 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-primary/20 rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-24 w-full bg-primary/10 rounded-lg"></div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-12 bg-primary/10 rounded-lg"></div>
                              <div className="h-12 bg-primary/10 rounded-lg"></div>
                              <div className="h-12 bg-primary/10 rounded-lg"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-1/4 bg-primary/20 rounded-full"></div>
                            <div className="h-2 w-1/3 bg-primary/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Get Started</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Begin Your AI Trading Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to start trading with our AI platform.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Create an Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sign up for a TradingAI account in minutes. Choose your subscription plan and complete the
                    verification process.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>Connect Your Broker</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Link your existing brokerage account or create a new one with our partner brokers. We support major
                    exchanges worldwide.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Activate AI Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Set your trading parameters, risk tolerance, and investment amount. Then activate the AI and watch
                    it work for you.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 text-center mt-8">
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/pricing">Choose Your Plan</Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Start with a 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Success Stories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Traders</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real experiences from traders using our AI platform.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-muted/60 backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic text-muted-foreground">
                      "The AI trading platform has completely transformed my approach to the markets. I've seen a 32%
                      increase in my portfolio since I started using it six months ago."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                        <span className="font-medium text-sm text-primary">MK</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Michael K.</p>
                        <p className="text-xs text-muted-foreground">Retail Trader</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/60 backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic text-muted-foreground">
                      "As a busy professional, I never had time to monitor the markets. Now the AI does it for me 24/7,
                      and I'm seeing better returns than when I was actively trading myself."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                        <span className="font-medium text-sm text-primary">JL</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Jennifer L.</p>
                        <p className="text-xs text-muted-foreground">Doctor & Part-time Trader</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/60 backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic text-muted-foreground">
                      "The risk management features are exceptional. Even during market downturns, the AI has protected
                      my capital while finding opportunities others missed."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                        <span className="font-medium text-sm text-primary">RT</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Robert T.</p>
                        <p className="text-xs text-muted-foreground">Institutional Investor</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Trading?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of traders who are already leveraging the power of AI to enhance their trading
                  performance.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button size="lg" asChild>
                    <Link href="/pricing">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start with a free 14-day trial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

