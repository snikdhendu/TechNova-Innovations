import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "./google.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./amazon.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "./microsoft.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./youtube.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./amazon.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./youtube.png",
  },

];

const firstRow = reviews.slice(0, reviews.length);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,

}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-44 cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-transparent",
        // dark styles
        "dark:border-gray-50/[.1] bg-transparent",
      )}
    >
      <div className="flex flex-row items-center gap-2 h-20 justify-center ">
        <img  width="43" height="43" alt="" src={img}  className=" filter grayscale hover:grayscale-0"/>
        {/* <div className="flex flex-col"> */}
          {/* <figcaption className="text-sm font-medium dark:text-white"> */}
            {/* {name} */}
          {/* </figcaption> */}
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        {/* </div> */}
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl mt-28">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
   
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
