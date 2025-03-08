import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empower Your Trading with AI
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience automated, high-frequency trading with our state-of-the-art AI platform. Take control of your
                investments with precision and confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/ai-trading">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="font-medium">10,000+</span>
                <span className="text-muted-foreground">Active Traders</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center space-x-1">
                <span className="font-medium">$500M+</span>
                <span className="text-muted-foreground">Trading Volume</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center space-x-1">
                <span className="font-medium">99.9%</span>
                <span className="text-muted-foreground">Uptime</span>
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
  )
}

