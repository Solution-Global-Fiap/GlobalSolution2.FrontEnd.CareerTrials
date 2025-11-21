import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function DiscussionsTab() {
    return (
        <Card className="p-8 text-center space-y-4 flex justify-center items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Entre na Discussão</h3>
                <p className="text-muted-foreground">
                    Inicie ou participe de conversas sobre sua jornada de aprendizado
                </p>
            </div>
            <Button className="w-full">Iniciar Discussão</Button>
        </Card>
    );
}