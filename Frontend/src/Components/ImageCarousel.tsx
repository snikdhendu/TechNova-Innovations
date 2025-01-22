"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ImageItem {
  id: number
  src: string
  alt: string
  title: string
}

const images: ImageItem[] = [
  { id: 1, src: "/taskimg.png", alt: "Fashion item 1", title: "Fashion 1" },
  { id: 2, src: "/taskimg.png", alt: "Fashion item 2", title: "Fashion 2" },
  { id: 3, src: "/taskimg.png", alt: "Fashion item 3", title: "Fashion 3" },
  { id: 4, src: "/taskimg.png", alt: "Fashion item 4", title: "Fashion 4" },
  { id: 5, src: "/taskimg.png", alt: "Fashion item 5", title: "Fashion 5" },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleCardClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleMouseEnter = (index: number) => {
    const timer = setTimeout(() => {
      const card = carouselRef.current?.children[index] as HTMLElement
      if (card) {
        card.dataset.glarePosition = "100%"
      }
    }, 5000)
    setHoverTimer(timer)
  }

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
    }
    const cards = carouselRef.current?.children
    if (cards) {
      Array.from(cards).forEach((card: Element) => {
        ;(card as HTMLElement).dataset.glarePosition = "-100%"
      })
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer)
      }
    }
  }, [hoverTimer])

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      <div className="flex items-center justify-center gap-8">
        <AnimatePresence initial={false}>
          {images.map((image, index) => {
            const position = (index - currentIndex + images.length) % images.length
            const isCenter = position === 0
            return (
              <motion.div
                key={image.id}
                className={`group relative ${
                  isCenter ? "w-[400px] h-[500px]" : "w-[300px] h-[350px]"
                } rounded-2xl overflow-hidden cursor-pointer`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isCenter ? 1 : 0.8,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                data-glare-position="-100%"
              >
                <div className="absolute inset-0 transition-all duration-400 ease-in-out group-hover:-rotate-2 group-hover:scale-110 shadow-lg shadow-white">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "var(--glare-position) 0",
                    transition: "background-position 1s ease-out",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white text-xl">View</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 p-4 text-black font-bold rounded-full"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 p-2 text-black font-bold rounded-full"
        onClick={nextSlide}
      >
        →
      </button>
    </div>
  )
}

