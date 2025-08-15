"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare, 
  Share2, 
  Puzzle, 
  Cloud, 
  Code, 
  Eye, 
  Zap, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Github,
  Gitlab,
  Monitor,
  MessageCircle,
  Calendar,
  Figma,
  FileText,
  TrendingUp
} from "lucide-react"

const iconGridFeatures = [
  {
    icon: MessageSquare,
    title: "Collaborate",
    description: "Real-time collaboration with your team",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Share2,
    title: "Share",
    description: "Easy sharing and version control",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Puzzle,
    title: "Integrate",
    description: "Seamless integration with your tools",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Deploy",
    description: "One-click deployment to production",
    color: "from-orange-500 to-red-500"
  }
]

const featureCards = [
  {
    icon: Code,
    title: "AI-powered code review",
    description: "Get intelligent suggestions and automated code reviews that catch bugs before they reach production.",
    code: `// AI Suggestion
const handleSubmit = (data) => {
  // Consider using try-catch for error handling
  submitForm(data);
}`,
    actions: ["Accept", "Reject"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Real-time coding previews",
    description: "See your changes instantly with live previews that update as you code.",
    code: `// Live Preview
<div className="preview">
  <h1>Hello World</h1>
  <p>Changes appear instantly!</p>
</div>`,
    actions: ["Preview"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Over 50+ integrations",
    description: "Connect with your favorite tools and services seamlessly.",
    integrations: ["GitHub", "GitLab", "VS Code", "Slack", "Jira", "Figma", "Notion", "Linear"],
    gradient: "from-purple-500 to-pink-500"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Icon Grid Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">Built for modern teams</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Everything you need to build faster
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {iconGridFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Features Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-foreground">AI-Powered Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Empower Your Workflow with AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            Experience the future of development with AI agents that understand your code, collaborate in real-time, and streamline your entire workflow.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full card-hover glass-effect group">
                <CardHeader>
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {feature.code && (
                    <div className="bg-muted/50 rounded-lg p-4 mb-4 border border-border/50">
                      <pre className="text-sm font-mono text-foreground">
                        <code>{feature.code}</code>
                      </pre>
                      {feature.actions && (
                        <div className="flex space-x-2 mt-3">
                          {feature.actions.map((action) => (
                            <button
                              key={action}
                              className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105 ${
                                action === 'Accept' 
                                  ? 'bg-green-500 text-white hover:bg-green-600' 
                                  : action === 'Reject'
                                  ? 'bg-red-500 text-white hover:bg-red-600'
                                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                              }`}
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {feature.integrations && (
                    <div className="grid grid-cols-4 gap-2">
                      {feature.integrations.map((integration) => (
                        <motion.div
                          key={integration}
                          className="bg-muted/50 rounded-lg p-2 text-center text-xs font-medium border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          {integration}
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {/* Learn more link */}
                  <motion.div 
                    className="flex items-center text-primary text-sm font-medium mt-4 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already using Pointer to build better software faster.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
