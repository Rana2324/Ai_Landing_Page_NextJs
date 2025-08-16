"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

      {/* Deep Space Layer */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/80 via-gray-900/60 to-transparent" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Animated Beams */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute h-[60rem] w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 blur-[3px]"
          style={{ left: "15%", top: "-20%" }}
          animate={{
            y: [0, 100, 0],
            rotate: [15, 25, 15],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[55rem] w-[2px] bg-gradient-to-b from-pink-400/0 via-pink-400/70 to-pink-400/0 blur-[3px]"
          style={{ right: "20%", top: "-15%" }}
          animate={{
            y: [0, -90, 0],
            rotate: [-15, -25, -15],
            scaleY: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[45rem] w-[2px] bg-gradient-to-b from-purple-400/0 via-purple-400/70 to-purple-400/0 blur-[3px]"
          style={{ left: "35%", top: "-10%" }}
          animate={{
            y: [0, 70, 0],
            rotate: [5, 10, 5],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-[45rem] h-[45rem] bg-gradient-radial from-cyan-500/30 via-cyan-500/20 to-transparent rounded-full blur-[120px]"
        style={{ top: "5%", left: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[40rem] h-[40rem] bg-gradient-radial from-fuchsia-500/25 via-fuchsia-500/15 to-transparent rounded-full blur-[100px]"
        style={{ bottom: "10%", right: "15%" }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-[35rem] h-[35rem] bg-gradient-radial from-violet-500/20 via-violet-500/15 to-transparent rounded-full blur-[90px]"
        style={{ top: "35%", right: "25%" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Atmospheric Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-[4px] h-[4px] rounded-full bg-white/40 blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Gradient Scan Lines */}
      <motion.div
        className="absolute h-[0.5px] w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        style={{ top: "35%" }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[0.5px] w-full bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"
        style={{ top: "65%" }}
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Interactive Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-radial from-purple-500/20 via-indigo-500/10 to-transparent rounded-full blur-[80px]"
        animate={{
          x: mouse.x,
          y: mouse.y,
          scale: [1, 1.05, 1],
        }}
        transition={{
          x: { duration: 0.3 },
          y: { duration: 0.3 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Star Particles (fixed) */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-white/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Mouse Reactive Glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          left: mouse.x - 128,
          top: mouse.y - 128,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(139,92,246,0.15) 50%, transparent 100%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  )
}
