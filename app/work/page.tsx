import Link from "next/link";
import { projects } from "@/lib/data";

export default function WorkIndex() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Work</h1>

            <div className="flex flex-col">
                {projects.map((project) => (
                    <Link key={project.slug} href={`/work/${project.slug}`} className="group border-t border-white/10 py-12 transition-all hover:bg-white/5 px-4 -mx-4">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                            </div>
                            <div className="md:col-span-3 text-sm text-muted">
                                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Problem</span>
                                {project.problem}
                            </div>
                            <div className="md:col-span-3 text-sm text-muted">
                                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Constraint</span>
                                {project.constraint}
                            </div>
                            <div className="md:col-span-2 text-sm text-foreground text-right md:text-left">
                                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Outcome</span>
                                {project.outcome}
                            </div>
                        </div>
                    </Link>
                ))}
                <div className="border-t border-white/10"></div>
            </div>
        </main>
    );
}
