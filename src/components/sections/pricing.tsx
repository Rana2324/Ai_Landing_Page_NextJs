"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Star, Zap, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: { monthly: "Free", yearly: "Free" },
    description: "Perfect for individual developers getting started with AI-powered coding.",
    features: [
      "Basic AI code suggestions",
      "Up to 100 requests per month",
      "Community support",
      "Basic integrations",
      "Code review assistance"
    ],
    popular: false,
    cta: "Get Started Free",
    variant: "outline" as const,
    href: "#signup"
  },
  {
    name: "Pro",
    price: { monthly: "$19", yearly: "$15" },
    period: "/month",
    description: "For professional developers who want advanced AI features and higher limits.",
    features: [
      "Advanced AI code suggestions",
      "Unlimited requests",
      "Priority support",
      "Advanced integrations",
      "Team collaboration",
      "Custom AI models",
      "Analytics dashboard",
      "API access"
    ],
    popular: true,
    cta: "Start Pro Trial",
    variant: "default" as const,
    href: "#pro-trial",
    savings: "Save 21% yearly"
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "For large teams and organizations requiring custom solutions and dedicated support.",
    features: [
      "Everything in Pro",
      "Custom AI model training",
      "Dedicated support team",
      "SLA guarantees",
      "On-premise deployment",
      "Custom integrations",
      "Advanced security features",
      "White-label options"
    ],
    popular: false,
    cta: "Contact Sales",
    variant: "outline" as const,
    href: "#contact-sales"
  }
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-24 bg-muted/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white font-medium max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your development needs. Start free and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-muted/50 p-1 transition-colors hover:bg-muted/70"
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary"
                animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1"
              >
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  Save up to 21%
                </Badge>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-30">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <Badge className="absolute left-1/2 -translate-x-1/2 -top-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 text-sm font-semibold flex items-center gap-2 whitespace-nowrap">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </Badge>
                </motion.div>
              )}
              
              <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.name}-${billingCycle}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-bold text-white"
                      >
                        {plan.price[billingCycle]}
                      </motion.span>
                    </AnimatePresence>
                    {plan.period && (
                      <span className="text-lg text-muted-foreground">
                        {billingCycle === 'yearly' ? '/month' : plan.period}
                      </span>
                    )}
                  </div>
                  {plan.savings && billingCycle === 'yearly' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-2"
                    >
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        {plan.savings}
                      </Badge>
                    </motion.div>
                  )}
                  <CardDescription className="text-base text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-white font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-6">
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full group relative overflow-hidden"
                    asChild
                  >
                    <a href={plan.href}>
                      <span className="flex items-center gap-2 relative z-10 text-white">
                        {plan.cta}
                        {plan.name === "Starter" ? (
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        ) : plan.name === "Enterprise" ? (
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        ) : (
                          <Zap className="w-4 h-4 transition-transform group-hover:scale-110" />
                        )}
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-400" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-400" />
              No setup fees
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-400" />
              24/7 support
            </span>
          </div>

          {/* Additional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              asChild
            >
              <a href="#demo">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="group"
              asChild
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Need Help?
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
