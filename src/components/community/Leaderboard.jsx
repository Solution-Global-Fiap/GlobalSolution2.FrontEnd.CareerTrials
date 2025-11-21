import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const leaderboard = [
    { rank: 1, name: "Alex Thompson", xp: 2450, level: 15, career: "Full Stack Developer" },
    { rank: 2, name: "Emma Wilson", xp: 2180, level: 12, career: "Data Analyst" },
    { rank: 3, name: "Jordan Lee", xp: 1950, level: 11, career: "UX Designer" },
    { rank: 4, name: "Sam Patel", xp: 1720, level: 10, career: "Project Manager" },
    { rank: 5, name: "Casey Martinez", xp: 1580, level: 9, career: "Full Stack Developer" },
];

export default function Leaderboard() {
    return (
        <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Ranking</h3>
            </div>
            <div className="space-y-3">
                {leaderboard.map((entry) => (
                    <div key={entry.rank} className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                        <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${entry.rank === 1
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/10"
                            }`}
                        >
                            {entry.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{entry.name}</p>
                            <p className="text-xs text-muted-foreground">Level {entry.level}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold">{entry.xp}</p>
                            <p className="text-xs text-muted-foreground">XP</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}