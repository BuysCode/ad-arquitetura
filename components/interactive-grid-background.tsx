"use client"

import { useState, useCallback } from "react"

interface GridCell {
  id: string
  isActive: boolean
}

export function InteractiveGridBackground() {
  const [activeCells, setActiveCells] = useState<Set<string>>(new Set())

  const handleMouseEnter = useCallback((id: string) => {
    setActiveCells((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const handleMouseLeave = useCallback((id: string) => {
    setTimeout(() => {
      setActiveCells((prev) => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })
    }, 300)
  }, [])

  const cols = 40
  const rows = 30

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "1px",
          opacity: 0.15,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, index) => {
          const id = `cell-${index}`
          const isActive = activeCells.has(id)

          return (
            <div
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}
              className="transition-colors duration-300 ease-out"
              style={{
                backgroundColor: isActive
                  ? "var(--primary)"
                  : "transparent",
                border: "1px solid var(--border)",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
