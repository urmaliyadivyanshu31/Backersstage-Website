"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
        el.addEventListener("mouseover", () => {
          setLinkHovered(true)
          if (el.getAttribute("data-cursor-text")) {
            setText(el.getAttribute("data-cursor-text") || "")
          }
        })
        el.addEventListener("mouseout", () => {
          setLinkHovered(false)
          setText("")
        })
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  const cursorVariants = {
    default: {
      x: position.x,
      y: position.y,
      opacity: hidden ? 0 : 1,
      height: 32,
      width: 32,
      backgroundColor: "#82FFA5",
      mixBlendMode: "difference" as const,
    },
    clicked: {
      height: 24,
      width: 24,
      backgroundColor: "#82FFA5",
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      height: 64,
      width: 64,
      x: position.x,
      y: position.y,
      backgroundColor: "#82FFA5",
      opacity: hidden ? 0 : 0.5,
      mixBlendMode: "difference" as const,
    },
  }

  const textVariants = {
    default: {
      x: position.x,
      y: position.y,
      opacity: 0,
      height: 0,
      width: 0,
    },
    active: {
      opacity: 1,
      height: 80,
      width: 80,
      x: position.x,
      y: position.y,
    },
  }

  return (
    <>
      <motion.div
        className="cursor"
        variants={cursorVariants}
        animate={linkHovered ? "hovered" : clicked ? "clicked" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {text && (
        <motion.div
          className="cursor-text"
          variants={textVariants}
          animate={text ? "active" : "default"}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        >
          <span className="text-center w-full">{text}</span>
        </motion.div>
      )}
    </>
  )
}
