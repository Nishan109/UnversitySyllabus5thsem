"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = theme === "system" ? systemTheme : theme
  const isDark = current === "dark"

  return (
    <div
      role="toolbar"
      aria-label="Theme"
      className="pointer-events-auto isolate z-50 flex items-center gap-2 rounded-full border border-border bg-background/80 px-1.5 py-1 shadow-sm backdrop-blur"
    >
      <Button
        variant={isDark ? "ghost" : "secondary"}
        size="icon"
        aria-label="Light mode"
        title="Light"
        onClick={() => setTheme("light")}
        onKeyDown={(e) => e.key === "Enter" && setTheme("light")}
        className="h-9 w-9"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={isDark ? "secondary" : "ghost"}
        size="icon"
        aria-label="Dark mode"
        title="Dark"
        onClick={() => setTheme("dark")}
        onKeyDown={(e) => e.key === "Enter" && setTheme("dark")}
        className="h-9 w-9"
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "system" ? "secondary" : "ghost"}
        size="icon"
        aria-label="System theme"
        title="System"
        onClick={() => setTheme("system")}
        onKeyDown={(e) => e.key === "Enter" && setTheme("system")}
        className="h-9 w-9"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  )
}
