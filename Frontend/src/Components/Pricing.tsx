import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container text-center py-24 sm:py-32 font-space"
    >
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-textmain mb-5">
          ⚡| Pricing
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={cn(
              "transition-transform duration-300",
              pricing.popular === PopularPlanType.YES
                ? "bg-purple-100/20 border border-primary scale-105 shadow-xl shadow-primary/30"
                : "shadow-lg"
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span
                  className={cn(
                    pricing.popular === PopularPlanType.YES
                      ? "text-primary font-extrabold text-2xl"
                      : "text-lg"
                  )}
                >
                  {pricing.title}
                </span>
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm bg-primary text-white px-3 py-1 rounded-full"
                  >
                    Most Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span
                  className={cn(
                    "text-3xl font-bold",
                    pricing.popular === PopularPlanType.YES
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  ${pricing.price}
                </span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className={cn(
                  "w-full",
                  pricing.popular === PopularPlanType.YES
                    ? "bg-primary text-white hover:bg-primary/80"
                    : ""
                )}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
