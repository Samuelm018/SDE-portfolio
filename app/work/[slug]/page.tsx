import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            {/* Header */}
            <header className="mb-24">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{project.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted border-t border-white/10 pt-8">
                    <div>
                        <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Problem</span>
                        {project.problem}
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Constraint</span>
                        {project.constraint}
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Outcome</span>
                        <span className="text-accent font-bold">{project.outcome}</span>
                    </div>
                </div>
            </header>

            {/* Content Sections */}
            <div className="space-y-24">

                {/* Project Image */}
                {project.image && (
                    <section>
                        <div className="aspect-video relative bg-white/5 border border-white/10 rounded overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </section>
                )}

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">Context</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed">
                        {project.context}
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">The Mess</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed">
                        <p>{project.mess}</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">Thinking</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed">
                        <p>{project.thinking}</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">Execution</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed">
                        <p>{project.execution}</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">Results</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed">
                        <p>{project.results}</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-12">
                    <h2 className="md:col-span-3 text-sm font-mono text-muted uppercase tracking-widest sticky top-24 h-fit">Lessons</h2>
                    <div className="md:col-span-9 text-lg md:text-xl leading-relaxed font-mono text-muted italic">
                        {project.lessons}
                    </div>
                </section>
            </div>
        </main>
    );
}
