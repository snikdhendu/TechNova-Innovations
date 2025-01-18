import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatedGradientTextDemo } from "./demo/AnimatedGradientTextDemo";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
// import { ShinyButton } from "./ui/shiny-button";

export const Hero = () => {
  return (
    <>
      <section className="container grid place-items-center justify-center py-10 md:py-32 gap-10 text-center w-screen font-space">
        <div className="space-y-6 md:w-[1000px] w-[330px]">
        <AnimatedGradientTextDemo />
          <main className="text-2xl md:text-6xl font-bold md:w-full w-[330px]">
            <h1 className="inline">
              Welcome to{" "}
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                TechNova Innovations
              </span>
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Empowering Tomorrow's Technology
              </span>
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
            At TechNova Innovations, we design innovative solutions for your
            business, specializing in Web Development, Cloud Solutions, and
            AI/ML Services. Let’s build a brighter future together.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Learn More</Button>

            <a
              rel="noreferrer noopener"
              href="#services"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Explore Services
              <GitHubLogoIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
        <InteractiveGridPattern
          className={cn(
            "h-full w-full absolute [mask-image:radial-gradient(400px_circle_at_left,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        


      </section>
    </>
  );
};
