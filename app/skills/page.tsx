export default function Skills() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold mb-16 tracking-tight">Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                    <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Backend & Systems</h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">Python</span>
                            <span className="text-muted text-sm font-mono">Expert</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">Flask / FastAPI</span>
                            <span className="text-muted text-sm font-mono">Advanced</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">Restful APIs</span>
                            <span className="text-muted text-sm font-mono">Advanced</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">System Design</span>
                            <span className="text-muted text-sm font-mono">Intermediate</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Data & Infrastructure</h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">MySQL / SQLite</span>
                            <span className="text-muted text-sm font-mono">Advanced</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">Git / GitHub</span>
                            <span className="text-muted text-sm font-mono">Advanced</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">Postman</span>
                            <span className="text-muted text-sm font-mono">Advanced</span>
                        </li>
                        <li className="flex justify-between items-baseline">
                            <span className="font-bold text-lg">VS Code</span>
                            <span className="text-muted text-sm font-mono">Daily Driver</span>
                        </li>
                    </ul>
                </section>

                <section className="md:col-span-2">
                    <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Core Competencies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-white/5 bg-white/5 rounded-lg">
                            <h3 className="text-accent font-bold mb-2">Clean Architecture</h3>
                            <p className="text-sm text-muted">MVC patterns, Modular Blueprints, and strict Separation of Concerns.</p>
                        </div>
                        <div className="p-6 border border-white/5 bg-white/5 rounded-lg">
                            <h3 className="text-accent font-bold mb-2">Security First</h3>
                            <p className="text-sm text-muted">JWT implementation, Password Hashing, and Input Validation by default.</p>
                        </div>
                        <div className="p-6 border border-white/5 bg-white/5 rounded-lg">
                            <h3 className="text-accent font-bold mb-2">Database Design</h3>
                            <p className="text-sm text-muted">Normalized schemas (3NF), efficient Indexing, and constraint-driven integrity.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
