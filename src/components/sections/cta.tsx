"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Coding made effortless
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands of developers already building with effortless AI agents. Sign up for free today!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="liquid-button text-lg px-8 py-4 font-semibold ripple-effect magnetic-hover"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-lg p-6"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>AI-powered code review</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Automated testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Intelligent debugging</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-lg p-6"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Smart code completion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Security scanning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Documentation generation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-lg p-6"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Git integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>CI/CD automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Team analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Custom workflows</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Additional social proof */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                quote: "The seamless integration made our transition effortless. Team productivity increased by 40%.",
                author: "@startup_dev",
                avatar: "👨‍💻"
              },
              {
                quote: "AI suggestions are incredibly accurate. It's like having a senior developer pair programming with you.",
                author: "@tech_lead",
                avatar: "👩‍💼"
              },
              {
                quote: "Real-time collaboration is mind-blowing! My team can see changes instantly.",
                author: "@code_master",
                avatar: "👨‍🔬"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="glass-effect rounded-lg p-6 border border-primary/20"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
