import Link from "next/link";

const capabilities = [
    {
        text: "I architect modular REST APIs that scale",
        link: "/work/task-management-api",
    },
    {
        text: "I design robust authentication systems",
        link: "/work/auth-system",
    },
    {
        text: "I optimize database schemas for performance",
        link: "/work/url-shortener",
    },
];

export default function Capabilities() {
    return (
        <section className="py-24 border-t border-white/5">
            <h2 className="text-sm font-mono text-muted mb-12 uppercase tracking-widest">Capabilities</h2>
            <div className="flex flex-col gap-12">
                {capabilities.map((cap, index) => (
                    <Link
                        key={index}
                        href={cap.link}
                        className="group block text-2xl md:text-3xl lg:text-4xl font-bold hover:text-accent transition-colors w-fit"
                    >
                        {cap.text}
                        <span className="inline-block opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
