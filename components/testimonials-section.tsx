import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Traders Worldwide</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our users have to say about their experience with our AI trading platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              "This platform has completely transformed my trading strategy. The AI algorithms consistently identify
              opportunities I would have missed, and the automated execution is flawless."
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                  <span className="font-medium text-sm">JD</span>
                </div>
                <div>
                  <p className="text-sm font-medium">James Donovan</p>
                  <p className="text-xs text-muted-foreground">Professional Trader</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              "As someone new to trading, I was hesitant at first. But the platform's intuitive interface and risk
              management tools gave me the confidence to start. The results have exceeded my expectations."
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                  <span className="font-medium text-sm">SL</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Lin</p>
                  <p className="text-xs text-muted-foreground">Retail Investor</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              "The analytics dashboard provides invaluable insights into my portfolio performance. Combined with the AI
              trading capabilities, this platform has become an essential tool for my investment strategy."
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                  <span className="font-medium text-sm">MR</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Fund Manager</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex h-10 w-32 items-center justify-center rounded-lg bg-background p-4">
              <div className="text-xl font-bold text-muted-foreground">TechFin</div>
            </div>
            <div className="flex h-10 w-32 items-center justify-center rounded-lg bg-background p-4">
              <div className="text-xl font-bold text-muted-foreground">InvestDaily</div>
            </div>
            <div className="flex h-10 w-32 items-center justify-center rounded-lg bg-background p-4">
              <div className="text-xl font-bold text-muted-foreground">TradeNews</div>
            </div>
            <div className="flex h-10 w-32 items-center justify-center rounded-lg bg-background p-4">
              <div className="text-xl font-bold text-muted-foreground">FinTech+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

