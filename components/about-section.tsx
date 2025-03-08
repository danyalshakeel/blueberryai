import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Our Platform</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionizing Trading</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines cutting-edge AI technology with high-frequency trading strategies to provide you
              with a powerful, automated trading solution. We've built a system that empowers traders of all experience
              levels to participate in markets with confidence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <h3 className="font-medium">AI-Powered Trading</h3>
                    <p className="text-sm text-muted-foreground">
                      Our advanced AI algorithms analyze market data in real-time to identify profitable trading
                      opportunities with precision and speed.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <h3 className="font-medium">User Empowerment</h3>
                    <p className="text-sm text-muted-foreground">
                      Take control of your trading strategy with customizable parameters while our platform handles the
                      execution.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Security & Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Your funds and data are protected with enterprise-grade security, and all operations comply with
                      regulatory requirements.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted">
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
  )
}

