import PostCard from "./PostCard";

const samplePosts = [
    {
        id: "1",
        author: "Sarah Chen",
        authorLevel: 8,
        career: "UX Designer",
        content:
            "Acabei de completar meu primeiro redesign completo de site! A árvore de habilidades realmente me ajudou a estruturar meu aprendizado. Obrigada a todos nesta comunidade pelo suporte!",
        likes: 24,
        comments: 8,
        timestamp: "2 horas atrás",
        tags: ["conquista", "ux-design"],
    },
    {
        id: "2",
        author: "Miguel Rodriguez",
        authorLevel: 5,
        career: "Desenvolvedor Full Stack",
        content:
            "Alguém mais trabalhando com React? Acabei de desbloquear React Fundamentals e procuro parceiros de estudo para construir projetos juntos.",
        likes: 15,
        comments: 12,
        timestamp: "4 horas atrás",
        tags: ["react", "grupo-estudo"],
    },
    {
        id: "3",
        author: "Emma Wilson",
        authorLevel: 12,
        career: "Analista de Dados",
        content:
            "Dica profissional: Os desafios diários são realmente úteis para retenção. Faço os meus toda manhã com café. Pequenos hábitos, grandes resultados!",
        likes: 42,
        comments: 6,
        timestamp: "1 dia atrás",
        tags: ["dicas", "motivação"],
    },
];

export default function PostFeed({ likedPosts, toggleLike }) {
    return (
        <>
            {samplePosts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    isLiked={likedPosts.has(post.id)}
                    onToggleLike={() => toggleLike(post.id)}
                />
            ))}
        </>
    );
}