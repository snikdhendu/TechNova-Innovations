import { Navbar } from "@/Components/Navbar"
import { Footer } from "@/Components"
import { ImageCarousel } from "@/Components/ImageCarousel"
// import "@/app/globals.css"

export default function Task() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen container p-8 font-space">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-medium text-center mb-2">Interactive Image Gallery</h2>
          <p className="text-gray-600 text-center mb-8">
            Click on images to center them, and hover for smooth animations
          </p>

          <ImageCarousel />
        </div>
      </div>
      <Footer />
    </>
  )
}

