import { useLoaderData, Link } from "react-router";
import AppLayout from "../layouts/AppLayout";
import { loader as postsLoader } from "./api/posts";
import { metaInfo } from "../hooks/useMeta";

const posts = postsLoader();

export const meta = () => metaInfo("Pokedex: " + posts[0].slug, "Bem-vindo ao Pokedex!");

export function loader({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw new Response("Pokémon não encontrado", { status: 404 });
    return post;
}

export default function PokedexPost() {
    const post = useLoaderData() as ReturnType<typeof postsLoader>[number];


    return (
        <AppLayout>
            <div className="column-3xl flex-1 max-w-2xl mx-auto p-6 w-full">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-1">
                            <Link to={`/pokedex/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            {post.content.slice(0, 100)}...
                        </p>

                        <Link
                            to="/pokedex"
                            className="text-blue-600 dark:text-blue-300 hover:underline"
                        >
                            ← Voltar ao Pokedex
                        </Link>
                    </article>


                ))}
            </div>
        </AppLayout>
    );
}
