import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, Brain, Code, Globe, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About TradingAI</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to democratize algorithmic trading through artificial intelligence, making
                  sophisticated trading strategies accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Vision to Reality</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Founded in 2020, TradingAI began with a simple idea: what if sophisticated trading algorithms could be
                  accessible to everyone, not just Wall Street firms?
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our founders, a team of financial experts and AI researchers, set out to build a platform that would
                  level the playing field, giving individual traders the same technological advantages as institutional
                  investors.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Today, TradingAI serves thousands of traders worldwide, processing millions of transactions daily with
                  our cutting-edge AI algorithms.
                </p>
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

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values shape everything we do, from product development to customer service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We believe sophisticated trading tools should be accessible to everyone, not just financial
                    institutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Security</h3>
                  <p className="text-muted-foreground">
                    We prioritize the security of our users' funds and data with enterprise-grade protection systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously push the boundaries of what's possible with AI and algorithmic trading.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe in clear communication about our algorithms, fees, and performance metrics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in every aspect of our platform, from user experience to algorithm
                    performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Adaptability</h3>
                  <p className="text-muted-foreground">
                    We continuously adapt our algorithms to changing market conditions to ensure optimal performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Experts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse team combines expertise in finance, artificial intelligence, and software engineering.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/40">JD</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. James Donovan</h3>
                  <p className="text-muted-foreground">CEO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Former quantitative analyst with 15 years of experience in algorithmic trading.
                  </p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/40">SL</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. Sarah Lin</h3>
                  <p className="text-muted-foreground">CTO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    AI researcher with a Ph.D. in Machine Learning from MIT.
                  </p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/40">MR</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                  <p className="text-muted-foreground">Chief Investment Officer</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Former hedge fund manager with expertise in risk management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your journey with TradingAI today and experience the future of algorithmic trading.
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
                    <Link href="/contact">Contact Us</Link>
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

