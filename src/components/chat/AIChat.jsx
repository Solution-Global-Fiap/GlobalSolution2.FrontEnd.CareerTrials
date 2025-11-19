import { Activity, useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Bot, Send, User } from "lucide-react";

const AIChat = ({ initialMessage, onSendMessage }) => {
    const [messages, setMessages] = useState([
        {
            id: "1",
            content: initialMessage || "Olá! Como posso ajudar você hoje?",
            sender: "ai",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (messageText) => {
        const text = messageText || input.trim();
        if (!text || isTyping) return;

        const userMessage = {
            id: Date.now().toString(),
            content: text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            // Call custom handler if provided
            const response = await onSendMessage?.(text);

            // Simulate delay for more natural feel
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const aiMessage = {
                id: (Date.now() + 1).toString(),
                content: response || "Entendi! Deixe-me analisar isso para você.",
                sender: "ai",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
        } 
        catch (error) {
            console.error("Error sending message:", error);
        } 
        finally {
            setIsTyping(false);
            inputRef.current?.focus();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-background rounded-xl overflow-hidden">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message, i) => {
                    const isUser = message.sender === "user";
                    return (
                        <div
                            key={message.id}
                            className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""} animate-in fade-in duration-300`}
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <Avatar className="h-12 w-12 shrink-0">
                                <AvatarFallback
                                    className={isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}
                                >
                                    {isUser ? <User className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 max-w-[80%]">
                                <Card
                                    className={`px-4 py-3 shadow-sm rounded-xl border-0 ${isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-accent text-accent-foreground"}`}
                                >
                                    <p className="text-md font-semibold whitespace-pre-wrap leading-relaxed">{message.content}</p>
                                </Card>
                                <p className="text-xs text-muted-foreground mt-1 px-2">
                                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </p>
                            </div>
                        </div>
                    );
                })}

                {/* Typing Indicator with Activity */}
                <Activity mode={isTyping ? "visible" : "hidden"}>
                    <div className="flex gap-3 animate-in fade-in duration-300">
                        <Avatar className="h-12 w-12 shrink-0">
                            <AvatarFallback className="bg-muted text-foreground">
                                <Bot className="h-6 w-6" />
                            </AvatarFallback>
                        </Avatar>
                        <Card className="px-4 py-4 bg-accent rounded-2xl flex justify-center">
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                                        style={{ animationDelay: `${i * 0.2}s` }}
                                    />
                                ))}
                            </div>
                        </Card>
                    </div>
                </Activity>

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 bg-card">
                <div className="flex gap-2">
                    <Input
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        disabled={isTyping}
                        className="flex-1"
                    />
                    <Button
                        onClick={() => handleSend()}
                        disabled={!input.trim() || isTyping}
                        size="icon"
                        className="bg-primary hover:bg-primary/90"
                    >
                        <Send className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIChat;