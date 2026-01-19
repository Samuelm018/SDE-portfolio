import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg tracking-tight hover:text-white/80 transition-colors">
                    Samuel M
                </Link>
                <ul className="flex items-center space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
