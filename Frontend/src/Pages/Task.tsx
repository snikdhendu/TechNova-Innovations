import { ArrowRight } from "lucide-react";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components";

export default function Task() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen container p-8 font-space">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-medium text-center mb-2">Interactive Image Gallery</h2>
          <p className="text-gray-600 text-center mb-8">Hover over images to see smooth animations</p>

          <div className="flex items-end justify-center gap-20">
            {/* Side Image - Left */}
            <div className="group relative w-[300px] h-[350px] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 transition-all duration-400 ease-in-out group-hover:-rotate-2 group-hover:scale-110 shadow-lg shadow-white">
                <img src="/taskimg.png" alt="Fashion item" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <h3 className="text-white text-2xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Fashion
                </h3>
                <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white text-xl">View</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Center Image - Larger */}
            <div className="group relative w-[400px] h-[500px] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 transition-all duration-400 ease-in-out group-hover:-rotate-2 group-hover:scale-110 shadow-xl shadow-white">
                <img src="/taskimg.png" alt="Fashion item" className="w-full h-full object-cover" />
              </div>
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <h3 className="text-white text-2xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Fashion
                </h3>
                <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white text-xl">View</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Side Image - Right */}
            <div className="group relative w-[300px] h-[350px] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 transition-all duration-400 ease-in-out group-hover:-rotate-2 group-hover:scale-110 shadow-lg shadow-white">
                <img src="/taskimg.png" alt="Fashion item" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <h3 className="text-white text-2xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Fashion
                </h3>
                <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white text-xl">View</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
