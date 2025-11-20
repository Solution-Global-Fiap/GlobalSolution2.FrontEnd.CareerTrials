import AnalysisCard from "@/components/AnalysisCard";
import AIChat from "@/components/chat/AIChat";
import { useState } from "react";
import { challengesData } from "@/data/challengesData";
import ChallengeCard from "../components/ChallengeCard.jsx";
import TimelineNode from "../components/TimelineMode.jsx";
import { Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import QuizModal from "@/components/QuizModal.jsx";
import UploadModal from "@/components/UploadModal.jsx";

const STEPS = {
  CHAT: "chat",
  ANALYSIS: "analysis",
  CHALLENGES: "challenges",
};

const analysisSteps = [
  { id: 1, label: "Understanding your career goal", duration: 1500 },
  { id: 2, label: "Identifying required skills", duration: 2000 },
  { id: 3, label: "Mapping skill dependencies", duration: 2000 },
  { id: 4, label: "Creating personalized roadmap", duration: 1500 },
  { id: 5, label: "Generating learning resources", duration: 1000 },
];

export default function ChallengesPage() {
  const [currentStep, setCurrentStep] = useState(STEPS.CHALLENGES);
  const [careerData, setCareerData] = useState(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState(0);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const levels = [...new Set(challengesData.map((c) => c.level))];

  const handleChatComplete = async (careerGoal) => {
    // Store the career goal
    setCareerData({ careerGoal });

    // Move to analysis
    setCurrentStep(STEPS.ANALYSIS);

    // Simulate analysis progress
    await runAnalysis();

    // Move to challenges
    setCurrentStep(STEPS.CHALLENGES);
  };

  const runAnalysis = async () => {
    let totalDuration = 0;
    const totalTime = analysisSteps.reduce(
      (sum, step) => sum + step.duration,
      0
    );

    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentAnalysisStep(i);

      await new Promise((resolve) =>
        setTimeout(resolve, analysisSteps[i].duration)
      );

      totalDuration += analysisSteps[i].duration;
      setAnalysisProgress((totalDuration / totalTime) * 100);
    }
  };

  const handleMessage = async (message) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
    const data = await response.json();

    if (data.isComplete) {
      await handleChatComplete(data.careerGoal);
    }

    return data.reply;
  };

  if (currentStep === STEPS.CHAT) {
    return (
      <div className="h-full w-full">
        <AIChat
          initialMessage="Olá! Sou sua mentora de carreira. Como posso ajudar?"
          onSendMessage={handleMessage}
        />
      </div>
    );
  }

  if (currentStep === STEPS.ANALYSIS) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="w-full max-w-3xl"
          style={{
            transform: "scale(0.85)",
            transformOrigin: "center center",
          }}
        >
          <AnalysisCard
            careerGoal={careerData?.careerGoal}
            currentStep={currentAnalysisStep}
            progress={analysisProgress}
            steps={analysisSteps}
          />
        </div>
      </div>
    );
  }

  if (currentStep == STEPS.CHALLENGES) {
    return (
      <div
        className="min-h-screen my-20"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold">Sua jornada de aprendizado</h1>
            <p style={{ color: "var(--subtle-text)" }}>
              Eu quero me tornar desenvolvedor full-stack
            </p>
          </div>

          <div
            className="relative mx-auto p-10 rounded-3xl"
            style={{
              background: "var(--bg-section)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[3px] z-0"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col items-center mb-20 z-10">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="mt-2 font-semibold">Start Here</p>
              <span className="text-sm" style={{ color: "var(--subtle-text)" }}>
                Level 1
              </span>
            </div>

            {levels.map((level) => (
              <div key={level}>
                <div className="flex justify-center my-10">
                  <Badge
                    style={{
                      background: "var(--primary)",
                      color: "var(--on-primary)",
                      padding: "6px 14px",
                      borderRadius: "8px",
                    }}
                  >
                    Level {level}
                  </Badge>
                </div>

                {challengesData
                  .filter((c) => c.level === level)
                  .map((challenge, index) => (
                    <div key={challenge.id} className="relative z-10">
                      <TimelineNode />

                      {selectedChallenge?.type === "Quiz" && (
                        <QuizModal
                          challenge={selectedChallenge}
                          onClose={() => setSelectedChallenge(null)}
                        />
                      )}

                      {(selectedChallenge?.type === "Código" ||
                        selectedChallenge?.type === "Projeto") && (
                        <UploadModal
                          challenge={selectedChallenge}
                          onClose={() => setSelectedChallenge(null)}
                        />
                      )}

                      <ChallengeCard
                        challenge={challenge}
                        align={index % 2 === 0 ? "right" : "left"}
                        onClick={() => setSelectedChallenge(challenge)}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
