import AnalysisCard from "../components/AnalysisCard";
import AIChat from "../components/chat/AIChat";

const analysisSteps = [{ id: 1, label: "Understanding your career goal", duration: 1500 }, { id: 2, label: "Identifying required skills", duration: 2000 }, { id: 3, label: "Mapping skill dependencies", duration: 2000 }, { id: 4, label: "Creating personalized roadmap", duration: 1500 }, { id: 5, label: "Generating learning resources", duration: 1000 },]

export default function ChatPage() {
    const handleMessage = async (message) => {
        // Example request
        const response = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        return data.reply;
    };

    return (
        <div className="h-screen flex justify-center">
            <div className="h-screen w-7xl">
                <AIChat
                    initialMessage="Olá! Sou sua mentora de carreira. Como posso ajudar?"
                    onSendMessage={handleMessage}
                />
                <AnalysisCard
                    careerGoal="Teste"
                    currentStep={0}
                    progress={0}
                    steps={analysisSteps}
                />
            </div>
        </div>
    );
}