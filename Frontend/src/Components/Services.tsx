import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}



const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Building dynamic, responsive, and interactive websites with the latest technologies to ensure a seamless user experience.",
    icon: <ChartIcon />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Providing scalable and secure cloud infrastructure and solutions to optimize your business operations and data management.",
    icon: <WalletIcon />,
  },
  {
    title: "AI/ML Services",
    description:
      "Implementing cutting-edge Artificial Intelligence and Machine Learning solutions to drive innovation and automation in your business.",
    icon: <MagnifierIcon />,
  },
];



export const Services = () => {
  return (
    <section className="container py-24 sm:py-32 font-space">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
         
        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
