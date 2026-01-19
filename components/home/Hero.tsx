import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight font-sans">
                    I design systems that solve real problems.
                </h1>

                <div className="text-lg md:text-xl text-muted leading-relaxed max-w-xl space-y-4">
                    <p>
                        Detail-oriented Computer Science undergraduate with hands-on experience designing and developing scalable RESTful APIs using Python and Flask.
                    </p>
                    <p>
                        Strong foundation in backend system design, relational databases, and JWT-based security. Proven ability to build clean, modular, and production-ready services with a focus on data integrity, access control, and reliability. Actively involved across the full software development lifecycle (SDLC), from schema design to API testing and version control.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/work"
                        className="inline-flex items-center text-accent hover:text-white transition-colors text-lg font-medium group"
                    >
                        View the work
                        <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                    </Link>
                </div>
            </div>

            {/* Profile Picture Area */}
            <div className="flex justify-center items-center h-full w-full relative order-1 lg:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-white/10 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <Image
                        src="/profile-pic.jpg"
                        alt="Samuel M"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
