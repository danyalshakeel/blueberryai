import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Future of Trading Today!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start your journey towards automated, AI-powered trading and take control of your financial future.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button size="lg" asChild>
                <Link href="#">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Request Demo</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">No credit card required. Start with a free 14-day trial.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

