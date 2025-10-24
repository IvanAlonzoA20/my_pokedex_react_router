import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("pokedex", "routes/pokedex.tsx"),
    route("pokedex/:slug", "routes/pokedex.$slug.tsx"),
    route("api/posts", "routes/api/posts.ts"),
    route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
