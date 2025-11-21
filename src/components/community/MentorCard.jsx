import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function MentorCard({ mentor }) {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {mentor.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{mentor.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                                Level {mentor.level}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{mentor.career}</p>
                    </div>
                </div>
                <Button size="sm" variant="outline">
                    Solicitar Mentor
                </Button>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-medium">Especialidade:</p>
                <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                        </Badge>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                    Atualmente mentorando {mentor.mentees} aprendizes
                </p>
            </div>
        </Card>
    );
}