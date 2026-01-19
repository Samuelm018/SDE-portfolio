export interface Project {
    slug: string;
    title: string;
    problem: string;
    constraint: string;
    outcome: string;
    // Detail content
    context: string;
    mess: string;
    thinking: string;
    execution: string;
    results: string;
    lessons: string;
    image?: string; // Optional image path
}

export const projects: Project[] = [
    {
        slug: "task-management-api",
        title: "Task Management REST API",
        problem: "Monolithic backends create hidden coupling and deployment risks.",
        constraint: "Must support modular versioning and role-based access.",
        outcome: "Built modular Flask Blueprint architecture with JWT auth.",
        context: "Designed a backend service for user-specific task management requiring strict data isolation and security.",
        mess: "Typical Flask apps often become 'god-objects' with mixed routing and logic, making testing impossible.",
        thinking: "Adopted MVC principles and Flask Blueprints to separate concerns. Security first: JWT for stateless auth.",
        execution: "Implemented distinct Blueprints for Auth and Tasks. Enforced normalized SQLite schema. Added centralized error handling middleware.",
        results: "Achieved full CRUD separation. 100% test coverage on API endpoints via Postman. Zero coupling between auth and business logic.",
        lessons: "Structure saves speed. Blueprints are essential for scalable Flask apps.",
        image: "/Task Management System.png"
    },
    {
        slug: "auth-system",
        title: "User Auth & Profile System",
        problem: "Basic auth (cookies/sessions) fails in distributed stateless environments.",
        constraint: "Low-latency validation with strict security.",
        outcome: "Secure JWT system with hashed credentials and role checks.",
        context: "A dedicated authentication microservice handling registration, login, and profile updates.",
        mess: "Handling duplicate registrations, SQL injection, and session management manually is error-prone.",
        thinking: "No rolling your own crypto. Use standard libraries for hashing (likely bcrypt/Argon2 variant implied) and JWT for tokens.",
        execution: "Designed relational MySQL schema with unique constraints. Implemented password hashing before storage. secure route decorators for authorization.",
        results: "Robust protection against unauthorized access. Handles edge cases like duplicate emails gracefully.",
        lessons: "Security is not a feature; it's a constraint. Validate inputs at the gate.",
        image: "/User Authentication & Profile Management.png"
    },
    {
        slug: "url-shortener",
        title: "High-Perf URL Shortener",
        problem: "Redirect latency increases linearly with dataset size.",
        constraint: "Must handle collisions and analytics efficiently.",
        outcome: "Constraint-driven schema with O(1) lookups.",
        context: "A utility to generate short, unique URLs and track access metrics.",
        mess: "Naive implementations suffer from collision retries and slow reads.",
        thinking: "The database schema represents the bottleneck. Constraints should enforce uniqueness at the db level.",
        execution: "Implemented analytics tracking (timestamps, counts). Proper HTTP status codes (301 vs 302).",
        results: "Instant redirection. automated analytic tracking. Clean handling of invalid slugs.",
        lessons: "HTTP status codes matter for browser caching and SEO.",
        image: "/URL Shortener.png"
    }
];
