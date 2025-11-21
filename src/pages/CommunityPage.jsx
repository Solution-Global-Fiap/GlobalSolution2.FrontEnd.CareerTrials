import { useState } from "react";
import { Button } from "@/components/ui/button";
import CommunityStats from "../components/community/CommunityStats";
import CommunityTabs from "../components/community/CommunityTabs";
import Leaderboard from "../components/community/Leaderboard";
import TrendingTopics from "../components/community/TrendingTopics";
import CommunityGuidelines from "../components/community/CommunityGuidelines";
import { MessageSquare } from "lucide-react";

export default function CommunityPage() {
    const [likedPosts, setLikedPosts] = useState(new Set());

    const toggleLike = (postId) => {
        setLikedPosts((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(postId)) {
                newSet.delete(postId);
            } 
            else {
                newSet.add(postId);
            }
            return newSet;
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 pt-20 space-y-8">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Comunidade</h1>
                        <p className="text-muted-foreground">
                            Conecte-se com outros aprendizes, compartilhe progresso e cresça junto
                        </p>
                    </div>
                    <Button>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Nova Publicação
                    </Button>
                </div>

                <CommunityStats />
            </div>

            <div className="grid lg:grid-cols-[1fr_340px] gap-8">
                <CommunityTabs likedPosts={likedPosts} toggleLike={toggleLike} />

                <div className="space-y-6">
                    <Leaderboard />
                    <TrendingTopics />
                    <CommunityGuidelines />
                </div>
            </div>
        </div>
    );
}