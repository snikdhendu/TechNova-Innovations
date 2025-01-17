// import { Statistics } from "./Statistics";
// import pilot from "/pilot.png";
// import { BookOpen, RefreshCcw, MessageSquare, BarChart3, Database, Settings } from 'lucide-react'
import {
  Code,
  Cloud,
  Cpu,
  BarChart3,
  Shield,
  Users,
} from "lucide-react";
import { MagicCard } from "./ui/magic-card";

export const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive, and scalable websites tailored to your business needs."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Enhance your operations with secure and scalable cloud computing services."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI/ML Services",
      description: "Leverage intelligent AI/ML solutions to transform your business insights."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Integration",
      description: "Track your performance with advanced analytics and actionable insights."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Ensure your data is safe with robust and reliable security measures."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration Tools",
      description: "Streamline your team workflows with seamless collaboration features."
    }
  ];
  
  return (
    <section className="w-full bg-transparent py-12 md:py-24 lg:py-32 font-space">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-textmain">
            ⚡| Main Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter dark:text-white text-black sm:text-5xl">
              Key Features of AI Tool
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A Complete Solution for AI SaaS Startups
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          {features.map((feature, index) => (
            < MagicCard
              key={index}
              className="relative overflow-hidden rounded-lg   bg-muted/50 p-8 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-textmain">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold dark:text-white text-black">{feature.title}</h3>
              <p className="mt-2 dark:text-zinc-400 text-zinc-800">
                {feature.description}
              </p>
            </MagicCard>
          ))}
        </div>
      </div>
      <div className=" shadow-how"></div>
      <div className=" shadow-r"></div>
    </section>
  );
};
