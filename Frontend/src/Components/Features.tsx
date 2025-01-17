import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import image from "/growth.png";
import image3 from "/reflecting.png";
import image4 from "/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Web Development",
    description:
      "Build modern, scalable, and secure websites tailored to your business needs, ensuring a seamless user experience.",
    image: image4, // Replace with an appropriate image related to Web Development
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing to enhance your operational efficiency and scalability.",
    image: image3, // Replace with an appropriate image related to Cloud Solutions
  },
  {
    title: "AI/ML Services",
    description:
      "Transform your business with intelligent AI/ML solutions designed to provide actionable insights and automation.",
    image: image, // Replace with an appropriate image related to AI/ML
  },
];

const featureList: string[] = [
  "Custom Web Development",
  "Cloud Migration Services",
  "AI-Powered Analytics",
  "24/7 Support",
  "Scalable Architecture",
  "User-Centered Design",
  "Seamless Integrations",
  "Advanced Security Features",
];


export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
