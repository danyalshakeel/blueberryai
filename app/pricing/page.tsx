import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your trading needs. No hidden fees, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Basic Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individual traders just getting started</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to AI trading algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 50 trades per day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Advanced risk management</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Custom trading strategies</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/ai-trading">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col relative border-primary">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  POPULAR
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For serious traders looking for an edge</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Basic</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited trades</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority email & chat support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced risk management</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Custom trading strategies</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/ai-trading">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For professional traders and institutions</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom trading strategies</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 phone support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>White-label options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/ai-trading">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Feature Comparison</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare our plans to find the perfect fit for your trading needs.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-medium">Feature</th>
                    <th className="py-4 px-6 text-center font-medium">Basic</th>
                    <th className="py-4 px-6 text-center font-medium">Pro</th>
                    <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">AI Trading Algorithms</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                    <td className="py-4 px-6 text-center">Custom</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Daily Trade Limit</td>
                    <td className="py-4 px-6 text-center">50</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Analytics Dashboard</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                    <td className="py-4 px-6 text-center">Enterprise</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Risk Management Tools</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Custom Strategies</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">API Access</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Support</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center">Priority Email & Chat</td>
                    <td className="py-4 px-6 text-center">24/7 Phone & Dedicated Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing FAQ</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about our pricing and plans.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your
                    next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any additional fees?</AccordionTrigger>
                  <AccordionContent>
                    There are no hidden fees. The monthly subscription covers all features included in your plan.
                    However, some exchanges may charge their own trading fees which are separate from our platform fees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer annual billing?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer annual billing with a 20% discount compared to monthly billing. Contact our sales team
                    for more information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum,
                    and USDC.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your 14-day free trial today. No credit card required.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/ai-trading">Start Free Trial</Link>
                </Button>
                <p className="text-xs text-muted-foreground">No credit card required. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

