import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about TradingAI and our services.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for answers..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="general" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="trading">Trading</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
              </div>

              {/* General FAQs */}
              <TabsContent value="general" className="space-y-4">
                <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is TradingAI?</AccordionTrigger>
                      <AccordionContent>
                        TradingAI is an advanced trading platform that uses artificial intelligence to automate trading
                        strategies across various financial markets. Our platform analyzes market data in real-time and
                        executes trades based on sophisticated algorithms, helping traders of all experience levels
                        achieve better results.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How does AI trading work?</AccordionTrigger>
                      <AccordionContent>
                        Our AI trading system uses deep learning algorithms to analyze vast amounts of market data,
                        identify patterns, and predict price movements. The system then executes trades automatically
                        based on these predictions, following risk parameters set by you. The AI continuously learns and
                        adapts to changing market conditions to improve its performance over time.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is TradingAI suitable for beginners?</AccordionTrigger>
                      <AccordionContent>
                        Yes, TradingAI is designed to be accessible for traders of all experience levels. Beginners can
                        benefit from our automated trading systems without needing deep technical knowledge. We provide
                        educational resources and a user-friendly interface to help you get started. However, we
                        recommend understanding basic trading concepts before using our platform.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What markets can I trade with TradingAI?</AccordionTrigger>
                      <AccordionContent>
                        TradingAI supports trading across multiple markets, including stocks, forex, cryptocurrencies,
                        commodities, and futures. Our platform integrates with major exchanges and brokers to provide a
                        wide range of trading opportunities.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>How secure is TradingAI?</AccordionTrigger>
                      <AccordionContent>
                        Security is our top priority. We implement enterprise-grade security measures, including
                        end-to-end encryption, multi-factor authentication, and regular security audits. Your funds
                        remain with your broker or exchange, and we use secure API connections to execute trades on your
                        behalf. We never have direct access to your funds.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              {/* Account FAQs */}
              <TabsContent value="account" className="space-y-4">
                <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I create an account?</AccordionTrigger>
                      <AccordionContent>
                        Creating an account is simple. Click the "Sign Up" button on our homepage, enter your email
                        address, create a password, and follow the verification steps. Once verified, you can complete
                        your profile and connect your trading accounts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I have multiple trading accounts?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you can connect multiple trading accounts from different brokers or exchanges to your
                        TradingAI account. This allows you to manage all your trading activities from a single
                        dashboard.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                      <AccordionContent>
                        If you forget your password, click the "Forgot Password" link on the login page. We'll send a
                        password reset link to your registered email address. Follow the instructions in the email to
                        create a new password.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                      <AccordionContent>
                        To delete your account, go to Account Settings, scroll to the bottom, and click "Delete
                        Account." You'll need to confirm this action. Please note that account deletion is permanent and
                        will remove all your data from our systems.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              {/* Trading FAQs */}
              <TabsContent value="trading" className="space-y-4">
                <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I start trading with AI?</AccordionTrigger>
                      <AccordionContent>
                        After creating an account, connect your broker or exchange API, select a trading strategy, set
                        your risk parameters, and activate the AI. Our system will begin analyzing the market and
                        executing trades based on your settings. You can monitor performance in real-time through your
                        dashboard.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I customize the trading strategies?</AccordionTrigger>
                      <AccordionContent>
                        Yes, depending on your subscription plan. Pro and Enterprise users can adjust various parameters
                        of our pre-built strategies. Enterprise users can also create completely custom strategies with
                        the help of our team.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What is the minimum investment required?</AccordionTrigger>
                      <AccordionContent>
                        The minimum investment depends on your broker or exchange requirements. TradingAI itself doesn't
                        have a minimum requirement, but we recommend starting with at least $1,000 to effectively
                        utilize our strategies and diversify your trades.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do I monitor my trading performance?</AccordionTrigger>
                      <AccordionContent>
                        Our platform provides comprehensive analytics dashboards that show your trading performance in
                        real-time. You can view metrics such as profit/loss, win rate, drawdown, and more. We also
                        provide detailed reports that you can export for your records.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I stop the AI from trading at any time?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you have full control over the AI. You can pause or stop trading at any time with a single
                        click. You can also set up trading schedules to automatically activate or deactivate the AI
                        during specific hours or days.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              {/* Billing FAQs */}
              <TabsContent value="billing" className="space-y-4">
                <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and
                        cryptocurrency payments (Bitcoin, Ethereum, and USDC). For Enterprise plans, we also accept wire
                        transfers.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How does billing work?</AccordionTrigger>
                      <AccordionContent>
                        We offer monthly and annual subscription plans. Your subscription will automatically renew at
                        the end of each billing cycle unless you cancel. You can view and manage your billing
                        information in your account settings.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                      <AccordionContent>
                        We offer a 14-day money-back guarantee for new subscribers. If you're not satisfied with our
                        service within the first 14 days, contact our support team for a full refund. After this period,
                        refunds are considered on a case-by-case basis.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                      <AccordionContent>
                        You can cancel your subscription at any time through your account settings. Go to Billing,
                        select "Manage Subscription," and click "Cancel Subscription." Your access will continue until
                        the end of your current billing period.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our support team is here to help you with any questions you may have.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

