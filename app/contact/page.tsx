export default function Contact() {
    return (
        <main className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Let&apos;s Build Something Scalable.
                </h1>
                <div className="text-lg md:text-xl text-muted space-y-6">
                    <div>
                        <span className="block text-sm font-mono uppercase tracking-wider text-muted opacity-50 mb-2">Email</span>
                        <a href="mailto:samuelm99729.work@gmail.com" className="text-accent hover:text-white transition-colors border-b border-accent/20 pb-1">
                            samuelm99729.work@gmail.com
                        </a>
                    </div>

                    <div>
                        <span className="block text-sm font-mono uppercase tracking-wider text-muted opacity-50 mb-2">Phone</span>
                        <a href="tel:+916382636384" className="hover:text-foreground transition-colors">
                            (+91) 6382636384
                        </a>
                    </div>

                    <div>
                        <span className="block text-sm font-mono uppercase tracking-wider text-muted opacity-50 mb-2">GitHub</span>
                        <a href="https://www.github.com/samuelm018" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            https://www.github.com/samuelm018
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
