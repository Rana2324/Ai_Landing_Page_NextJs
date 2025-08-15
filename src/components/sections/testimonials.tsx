"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, MessageCircle, Share2 } from "lucide-react"

const testimonials = [
  {
    quote: "Pointer's real-time previews cut our debugging time in half and made coding collaboratively actually enjoyable.",
    author: "Jonathan Smith",
    title: "Lead Developer at TechCorp",
    avatar: "👨‍💻"
  },
  {
    quote: "The seamless integration with our existing tools made the transition effortless. Our team productivity increased by 40%.",
    author: "Sarah Johnson",
    title: "CTO at StartupXYZ",
    avatar: "👩‍💼"
  },
  {
    quote: "AI-powered code suggestions are incredibly accurate. It's like having a senior developer pair programming with you.",
    author: "Mike Chen",
    title: "Senior Engineer at DevCorp",
    avatar: "👨‍🔬"
  }
]

const socialTestimonials = [
  {
    username: "@dev_sarah",
    avatar: "👩‍💻",
    quote: "Just tried Pointer for the first time. The real-time collaboration is mind-blowing! My team can see changes instantly. #coding #productivity",
    likes: 42,
    comments: 8,
    shares: 12
  },
  {
    username: "@tech_mike",
    avatar: "👨‍💼",
    quote: "The AI code suggestions are spot-on. Saved me hours of debugging today. This is the future of development! 🚀",
    likes: 67,
    comments: 15,
    shares: 23
  },
  {
    username: "@code_jessica",
    avatar: "👩‍🔬",
    quote: "Finally, a tool that understands my workflow. The integrations are seamless and the performance is incredible.",
    likes: 89,
    comments: 22,
    shares: 34
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-effect rounded-3xl p-12 border border-primary/20">
              <motion.div
                className="text-6xl mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
              <motion.p
                className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Pointer's real-time previews cut our debugging time in half and made coding collaboratively actually enjoyable.
              </motion.p>
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl">{testimonials[0].avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonials[0].author}</div>
                  <div className="text-muted-foreground">{testimonials[0].title}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Proof Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            What Developers Are Saying
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.username}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{testimonial.username}</div>
                        <div className="text-sm text-muted-foreground">Verified User</div>
                      </div>
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{testimonial.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{testimonial.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          <span>{testimonial.shares}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
