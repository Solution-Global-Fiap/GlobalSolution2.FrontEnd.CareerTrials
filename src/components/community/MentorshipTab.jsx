import MentorCard from "./MentorCard";

const mentorOffers = [
    {
        id: "1",
        name: "Alex Thompson",
        level: 15,
        career: "Desenvolvedor Full Stack",
        skills: ["React", "Node.js", "SQL"],
        mentees: 5,
    },
    {
        id: "2",
        name: "Emma Wilson",
        level: 12,
        career: "Analista de Dados",
        skills: ["Python", "SQL", "Tableau"],
        mentees: 3,
    },
    {
        id: "3",
        name: "Jordan Lee",
        level: 11,
        career: "UX Designer",
        skills: ["Figma", "User Research", "Prototyping"],
        mentees: 4,
    },
];

export default function MentorshipTab() {
    return (
        <>
            {mentorOffers.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
            ))}
        </>
    );
}