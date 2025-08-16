"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Code, Users, Star, Download } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

const stats = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Code Generated", value: "2M+", icon: Code },
  { label: "Satisfaction", value: "99%", icon: Star },
]

const floatingBadges = [
  { text: "AI-Powered", delay: 0 },
  { text: "Real-time", delay: 0.5 },
  { text: "Intelligent", delay: 1 },
  { text: "Fast", delay: 1.5 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatedBackground />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced floating badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: badge.delay, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay
                  }}
                />
                <div className="relative inline-flex items-center rounded-full border border-primary/20 bg-secondary/10 backdrop-blur-md px-4 py-2 text-sm font-medium hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <Zap className="w-3 h-3 mr-2 animate-pulse" />
                  {badge.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced main heading with text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              <span className="text-reveal">
                <span style={{ animationDelay: '0.1s' }}>Unleash</span>{" "}
                <span style={{ animationDelay: '0.2s' }}>the</span>{" "}
                <span style={{ animationDelay: '0.3s' }}>Power</span>{" "}
                <span style={{ animationDelay: '0.4s' }}>of</span>
              </span>
              <br />
              <span className="gradient-text text-reveal">
                <span style={{ animationDelay: '0.5s' }}>AI</span>{" "}
                <span style={{ animationDelay: '0.6s' }}>Agents</span>
              </span>
            </h1>
          </motion.div>

          {/* Enhanced subtitle with wave animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Accelerate your development workflow with intelligent AI agents that{" "}
            <span className="wave-animation inline-block">write</span>,{" "}
            <span className="wave-animation inline-block" style={{ animationDelay: '0.2s' }}>review</span>, and{" "}
            <span className="wave-animation inline-block" style={{ animationDelay: '0.4s' }}>optimize</span>{" "}
            your code in real-time.
          </motion.p>

          {/* Enhanced CTA buttons with liquid effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center space-x-4 mb-16"
          >
            <Button 
              size="lg" 
              className="bg-[#00DC8A] hover:bg-[#00DC8A]/90 text-black font-semibold h-12 flex items-center justify-center gap-1.5 min-w-[160px]"
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-1" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border border-[#00DC8A]/20 hover:border-[#00DC8A]/40 text-white font-semibold h-12 flex items-center justify-center gap-1.5 min-w-[160px]"
            >
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-1" />
                Watch Demo
              </span>
            </Button>
          </motion.div>

          {/* Enhanced code editor mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative max-w-6xl mx-auto mb-16"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative glass-effect rounded-2xl border border-primary/20 overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center justify-between p-4 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-4">main.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary/10 flex items-center"
                  >
                    <div className="flex items-center justify-center">
                      <Play className="w-4 h-4" strokeWidth={2} />
                      <span className="ml-2 relative top-[0.5px]">Run</span>
                    </div>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary/10"
                  >
                    <div className="flex items-center justify-center">
                      <Download className="w-4 h-4" strokeWidth={2} />
                      <span className="ml-2 relative top-[0.5px]">Download</span>
                    </div>
                  </Button>
                   
                </div>
              </div>
              
              <div className="flex">
                {/* File Explorer */}
                <div className="w-48 bg-muted/70 border-r border-primary/10 p-4">
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Explorer</div>
                    <div className="space-y-1">
                      <div className="text-sm text-foreground flex items-center">
                        <span className="mr-2">📁</span> src
                      </div>
                      <div className="ml-4 space-y-1">
                        <div className="text-sm text-foreground flex items-center">
                          <span className="mr-2">📁</span> components
                        </div>
                        <div className="text-sm text-foreground flex items-center">
                          <span className="mr-2">📁</span> pages
                        </div>
                        <div className="text-sm text-foreground flex items-center">
                          <span className="mr-2">📁</span> utils
                        </div>
                      </div>
                      <div className="text-sm text-foreground flex items-center">
                        <span className="mr-2">📄</span> index.ts
                      </div>
                      <div className="text-sm text-foreground flex items-center">
                        <span className="mr-2">📄</span> app.ts
                      </div>
                      <div className="text-sm text-foreground flex items-center">
                        <span className="mr-2">📄</span> config.ts
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Area */}
                <div className="flex-1 p-4 relative">
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex">
                      <span className="text-muted-foreground w-8">1</span>
                      <span className="text-blue-400">import</span> <span className="text-foreground">{'{'}</span> <span className="text-green-400">useState</span> <span className="text-foreground">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'react'</span><span className="text-foreground">;</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">2</span>
                      <span className="text-blue-400">import</span> <span className="text-foreground">{'{'}</span> <span className="text-green-400">motion</span> <span className="text-foreground">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'framer-motion'</span><span className="text-foreground">;</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">3</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">4</span>
                      <span className="text-blue-400">export</span> <span className="text-blue-400">default</span> <span className="text-blue-400">function</span> <span className="text-green-400">App</span><span className="text-foreground">() {'{'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">5</span>
                      <span className="text-blue-400">const</span> <span className="text-foreground">[</span><span className="text-green-400">count</span><span className="text-foreground">, </span><span className="text-green-400">setCount</span><span className="text-foreground">] = </span><span className="text-green-400">useState</span><span className="text-foreground">(</span><span className="text-orange-400">0</span><span className="text-foreground">);</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">6</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">7</span>
                      <span className="text-blue-400">return</span> <span className="text-foreground">(</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">8</span>
                      <span className="text-green-400">motion.div</span>
                      <span className="text-foreground"> className=</span><span className="text-orange-400">"app"</span><span className="text-foreground">{'>'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">9</span>
                      <span className="text-green-400">h1</span><span className="text-foreground">{'>'}</span><span className="text-orange-400">Hello AI World!</span><span className="text-foreground">{'</'}</span><span className="text-green-400">h1</span><span className="text-foreground">{'>'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">10</span>
                      <span className="text-green-400">button</span>
                      <span className="text-foreground"> onClick=</span><span className="text-orange-400">'{'}</span><span className="text-foreground">() => </span><span className="text-green-400">setCount</span><span className="text-foreground">(count + 1)</span><span className="text-orange-400">'}'</span><span className="text-foreground">{'>'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">11</span>
                      <span className="text-orange-400">Count: {'{'}</span><span className="text-foreground">count</span><span className="text-orange-400">{'}'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">12</span>
                      <span className="text-foreground">{'</'}</span><span className="text-green-400">button</span><span className="text-foreground">{'>'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">13</span>
                      <span className="text-foreground">{'</'}</span><span className="text-green-400">motion.div</span><span className="text-foreground">{'>'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">14</span>
                      <span className="text-foreground">);</span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground w-8">15</span>
                      <span className="text-foreground">{'}'}</span>
                    </div>
                  </div>

                  {/* AI Suggestion Popup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute bottom-4 right-4 bg-muted/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg max-w-xs glass-effect"
                  >
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      <span className="text-xs text-primary font-semibold">AI Suggestion</span>
                    </div>
                    <div className="text-sm text-foreground mb-3">
                      Consider using <code className="bg-muted px-1 rounded">const</code> instead of <code className="bg-muted px-1 rounded">let</code> for better performance
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="text-xs px-3 py-1 bg-green-500 hover:bg-green-600">
                        Accept
                      </Button>
                      <Button variant="secondary" size="sm" className="text-xs px-3 py-1">
                        Reject
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced stats with morphing shapes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl morphing-shape"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                <div className="relative glass-effect rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 card-hover">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
