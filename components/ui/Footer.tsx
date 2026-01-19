export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                <p>© {new Date().getFullYear()} Samuel M. Proof over promises.</p>
                <div className="flex space-x-6">
                    <a href="mailto:samuelm99729.work@gmail.com" className="hover:text-foreground transition-colors">
                        Email
                    </a>
                    <a
                        href="https://www.github.com/samuelm018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
