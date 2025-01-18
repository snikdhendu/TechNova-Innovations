// import { Button } from "@/Components/ui/button";
import { InteractiveGridPattern } from "@/Components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="relative grid place-items-center min-h-screen w-screen text-center px-4 font-space">
        {/* Interactive Grid Pattern */}
        <InteractiveGridPattern
          className={cn(
            "absolute h-full w-full opacity-20 inset-x-0 inset-y-[-30%] skew-y-12",
            "dark:[mask-image:radial-gradient(circle,rgba(255,255,255,1),transparent)]",
            "[mask-image:radial-gradient(circle,rgba(0,0,0,1),transparent)]"
          )}
        />
        {/* Content */}
        <div className="z-10 space-y-8 text-muted-foreground">
          <h1 className="text-6xl md:text-8xl font-bold">
            404{" "}
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Oops!
            </span>
          </h1>
          <p className="text-xl md:text-2xl">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to='/'
              className="w-full md:w-1/3"
            >
              Back to Home
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};
