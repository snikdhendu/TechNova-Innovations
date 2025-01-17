import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components';
import { InteractiveGridPattern } from '@/Components/ui/interactive-grid-pattern';
import { cn } from '@/lib/utils';
import { Team } from '@/Components';
import { MagicCard } from '@/Components/ui/magic-card';
import { AnimatedBeamMultipleOutputDemo } from '@/Components/demo/AnimatedBeamMultipleOutputDemo';

const AboutUs = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section className="relative flex flex-col items-center justify-center text-center w-screen min-h-screen bg-transparent dark:text-white text-black md:mt-[-50px] overflow-hidden mt-0">
                <InteractiveGridPattern
                    className={cn(
                        "h-full w-full absolute [mask-image:radial-gradient(400px_circle_at_left,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-20"
                    )}
                />
                <div className="container relative z-10 overflow-hidden flex flex-col lg:flex-row w-full shadow-lg p-4 gap-4 rounded-lg dark:bg-black bg-white font-space">
                    <div className='w-full lg:w-2/3 p-5 flex flex-col justify-center items-center'>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-left">
                            Welcome to <span className="text-teal-400 font-semibold">TechNova Innovations</span>, where innovation meets excellence. Our mission is to empower businesses through cutting-edge technology, fostering a culture of creativity and collaboration. At TechNova, we envision a future where technology drives progress, bridges gaps, and creates endless opportunities for growth.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 mt-10 w-full justify-center items-center">
                            <MagicCard className="p-6 flex-1">
                                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-base leading-relaxed">
                                    To empower businesses and individuals by providing innovative tech solutions that simplify lives, enhance productivity, and inspire creativity.
                                </p>
                            </MagicCard>
                            <MagicCard className="p-6 flex-1">
                                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                                <p className="text-base leading-relaxed">
                                    To be a global leader in technology, known for delivering impactful solutions that revolutionize industries and connect the world.
                                </p>
                            </MagicCard>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 bg-gradient-to-t from-black to-textmain rounded-md flex justify-center items-center p-4'>
                        <AnimatedBeamMultipleOutputDemo />
                    </div>
                </div>
            </section>
            <Team />
            <Footer />
        </div>
    );
};

export default AboutUs;
