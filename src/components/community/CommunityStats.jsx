import { Card } from "@/components/ui/card";
import { Users, MessageSquare, BookOpen, Trophy } from "lucide-react";

const stats = [
    { icon: Users, value: "1,247", label: "Membros"},
    { icon: MessageSquare, value: "3,492", label: "Publicações"},
    { icon: BookOpen, value: "156", label: "Mentores"},
    { icon: Trophy, value: "847", label: "Ativos Hoje"},
];

export default function CommunityStats() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <Card key={stat.label} className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}