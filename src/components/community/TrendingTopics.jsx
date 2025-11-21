import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const topics = ["#react", "#motivação", "#portfolio-dicas", "#grupo-estudo", "#javascript"];

export default function TrendingTopics() {
    const getPostQuantity = () => Math.floor(Math.random() * 50 + 10)

    return (
        <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Tópicos em Alta</h3>
            </div>
            <div className="space-y-2">
                {topics.map((tag) => (
                    <Button
                        key={tag}
                        className="w-full text-left px-3 py-2 rounded-lg border border-border hover:bg-accent hover:border-primary/50 transition-all"
                    >
                        <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-medium">{tag}</span>
                            <span className="text-xs text-muted-foreground">
                                {getPostQuantity()} posts
                            </span>
                        </div>
                    </Button>
                ))}
            </div>
        </Card>
    );
}