import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function PostCard({ post, isLiked, onToggleLike }) {
    return (
        <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                        {post.author.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        <Badge variant="secondary" className="text-xs">
                            Level {post.authorLevel}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.career}</p>
                </div>
                <span className="text-sm text-muted-foreground">{post.timestamp}</span>
            </div>

            <p className="leading-relaxed">{post.content}</p>

            <div className="flex gap-2">
                {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                    </Badge>
                ))}
            </div>

            <div className="flex items-center gap-6 pt-2">
                <Button
                    onClick={onToggleLike}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Heart className={`h-4 w-4 ${isLiked ? "fill-(--text-inverted) text-(--text-inverted)" : ""}`} />
                    <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </Button>
                <Button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                </Button>
            </div>
        </Card>
    );
}