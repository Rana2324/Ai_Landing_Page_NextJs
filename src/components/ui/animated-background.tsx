"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: 'dot' | 'line' | 'circle' | 'triangle' | 'star' | 'hexagon'
}

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

interface MorphingShape {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [particles, setParticles] = useState<Particle[]>([])
  const [morphingShapes, setMorphingShapes] = useState<MorphingShape[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 40; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 3,
          delay: Math.random() * 4,
          duration: Math.random() * 5 + 4,
          type: ['dot', 'line', 'circle', 'triangle', 'star', 'hexagon'][Math.floor(Math.random() * 6)] as any
        })
      }
      setElements(newElements)
    }

    const generateParticles = () => {
      const newParticles: Particle[] = []
      const colors = ['#00FF00', '#00C8C8', '#8A2BE2', '#FF6B6B', '#4ECDC4']
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      setParticles(newParticles)
    }

    const generateMorphingShapes = () => {
      const newShapes: MorphingShape[] = []
      for (let i = 0; i < 6; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 100,
          delay: Math.random() * 2
        })
      }
      setMorphingShapes(newShapes)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    generateElements()
    generateParticles()
    generateMorphingShapes()
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        opacity: particle.opacity + (Math.random() - 0.5) * 0.1
      })))
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  const renderShape = (element: FloatingElement) => {
    const baseClasses = "absolute opacity-20"
    
    switch (element.type) {
      case 'triangle':
        return (
          <div 
            className={`${baseClasses} w-0 h-0 border-l-[${element.size}px] border-l-transparent border-b-[${element.size * 2}px] border-b-primary border-r-[${element.size}px] border-r-transparent`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          />
        )
      case 'star':
        return (
          <div 
            className={`${baseClasses} text-primary`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
            }}
          >
            ⭐
          </div>
        )
      case 'hexagon':
        return (
          <div 
            className={`${baseClasses} bg-primary`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        )
      default:
        return (
          <div
            className={`${baseClasses} ${
              element.type === 'dot' ? 'bg-primary rounded-full' :
              element.type === 'line' ? 'bg-gradient-to-r from-primary to-secondary h-px' :
              'border border-primary/30 rounded-full'
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.type === 'line' ? `${element.size * 15}px` : `${element.size}px`,
              height: element.type === 'line' ? '1px' : `${element.size}px`,
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,transparent_1px),linear-gradient(180deg,transparent_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Morphing shapes */}
      {morphingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 morphing-shape"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}

      {/* Floating elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
            rotate: element.type === 'line' ? [0, 180, 360] : [0, 0, 0]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderShape(element)}
        </motion.div>
      ))}

      {/* Interactive particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full particle-float"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            backgroundColor: particle.color
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mouse trail effect */}
      <motion.div
        className="absolute w-6 h-6 bg-primary/20 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse neon-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 neon-glow" />
      
      {/* Floating orbs with enhanced effects */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl particle-float"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl particle-float"
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Energy waves with enhanced effects */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-primary/10 rounded-full neon-glow"
            style={{
              margin: `${(i + 1) * 120}px`
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 matrix-rain opacity-5" />

      {/* Holographic elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 holographic-effect rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
