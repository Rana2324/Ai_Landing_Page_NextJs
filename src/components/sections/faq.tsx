"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Pointer and how does it work?",
    answer: "Pointer is an AI-powered development platform that uses intelligent agents to help you write, review, and optimize code in real-time. It integrates directly into your development workflow, providing suggestions, catching bugs, and automating repetitive tasks."
  },
  {
    question: "How does the AI code review feature work?",
    answer: "Our AI analyzes your code as you write it, providing real-time suggestions for improvements, bug detection, and best practices. It learns from your coding patterns and project context to offer relevant, actionable advice."
  },
  {
    question: "Can I use Pointer with my existing development tools?",
    answer: "Yes! Pointer integrates seamlessly with popular development tools including VS Code, GitHub, GitLab, Slack, and many others. You can continue using your favorite tools while getting the benefits of AI assistance."
  },
  {
    question: "Is my code secure when using Pointer?",
    answer: "Absolutely. We take security seriously. Your code is encrypted in transit and at rest. We never store your source code permanently, and all AI processing happens in secure, isolated environments."
  },
  {
    question: "What programming languages does Pointer support?",
    answer: "Pointer supports all major programming languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. Our AI models are trained on diverse codebases to provide accurate suggestions across languages."
  },
  {
    question: "How much does Pointer cost?",
    answer: "Pointer offers a free tier for individual developers with basic features. For teams and advanced features, we offer flexible pricing plans starting at $10/month per developer. Contact us for enterprise pricing."
  },
  {
    question: "Can I use Pointer for team collaboration?",
    answer: "Yes! Pointer includes powerful collaboration features like real-time code sharing, team analytics, and shared AI insights. Multiple developers can work together seamlessly with AI assistance."
  },
  {
    question: "How do I get started with Pointer?",
    answer: "Getting started is easy! Simply sign up for a free account, install our extension for your preferred editor, and start coding. Our AI will begin learning your patterns and providing helpful suggestions immediately."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white font-medium">
            Everything you need to know about Pointer and how it can transform your development workflow.
          </p>
        </motion.div>

        <div className="space-y-4 relative z-30">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted/50 border border-border rounded-lg overflow-hidden relative z-40">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/80 transition-colors duration-200 relative z-50"
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden relative z-50"
                    >
                      <div className="px-6 pb-4 text-white leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
