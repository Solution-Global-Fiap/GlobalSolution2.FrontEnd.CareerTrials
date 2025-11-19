import AIChat from "../components/chat/AIChat";

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
            </div>
        </div>
    );
}