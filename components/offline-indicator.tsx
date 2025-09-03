"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, Download } from "lucide-react"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowIndicator(true)
      // Hide the indicator after 3 seconds
      setTimeout(() => setShowIndicator(false), 3000)
    }
    
    const handleOffline = () => {
      setIsOnline(false)
      setShowIndicator(true)
    }

    // Set initial state
    setIsOnline(navigator.onLine)
    if (!navigator.onLine) {
      setShowIndicator(true)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!showIndicator) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Badge 
        variant={isOnline ? "default" : "destructive"}
        className={`
          flex items-center gap-2 px-3 py-2 text-sm font-medium
          ${isOnline 
            ? "bg-green-500 hover:bg-green-600 text-white" 
            : "bg-orange-500 hover:bg-orange-600 text-white"
          }
          transition-all duration-300 shadow-lg
        `}
      >
        {isOnline ? (
          <>
            <Wifi className="h-4 w-4" />
            Back Online
          </>
        ) : (
          <>
            <WifiOff className="h-4 w-4" />
            Offline Mode
            <Download className="h-3 w-3 ml-1" />
          </>
        )}
      </Badge>
    </div>
  )
}