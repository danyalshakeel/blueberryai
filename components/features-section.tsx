import { BarChart3, Shield, Sliders, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Trading Tools</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers a comprehensive suite of features designed to optimize your trading experience and
              maximize your potential returns.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-Time AI Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Leverage our AI agent for microsecond trade execution, ensuring you never miss profitable opportunities
                in fast-moving markets.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access comprehensive dashboards and performance metrics to track your portfolio's performance and make
                data-driven decisions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Secure Funds Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Robust security protocols for seamless deposits and withdrawals, with multi-layer protection for your
                assets and personal information.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sliders className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Customizable Risk Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Personalize your trading risk parameters for peace of mind, allowing you to trade confidently within
                your comfort zone.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

