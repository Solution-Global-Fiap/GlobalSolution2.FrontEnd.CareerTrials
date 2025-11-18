import { Button } from "@/components/ui/button";
import { Code2, Users, Brain } from "lucide-react";
import { Route, useNavigate } from "react-router";
import { Routes } from "../routes/routes";
import FeatureCard from "../components/FeatureCard";

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen">

      <section className="min-h-[90vh] flex items-center bg-linear-to-r from-[#0a1f4e] via-[#083472] to-[#0a1f4e] text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">

          <span className="bg-white/10 text-blue-200 border border-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm">
            Prepare-se para sua próxima entrevista
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
            Desenvolva sua carreira  
            <br />
            com <span className="text-blue-300">IA integrada</span>
          </h1>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto text-lg">
            CareerTrials conecta você com desafios personalizados, uma comunidade ativa e 
            mentoria inteligente para acelerar sua evolução profissional.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600" onClick={() => navigate(Routes.Login)}>
              Começar agora
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-white/10">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F2F4F7]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tudo que você precisa para evoluir
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Uma plataforma criada para desenvolvedores que querem ir mais longe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            <FeatureCard
              icon={<Code2 size={32} />}
              color="blue"
              title="Desafios Personalizados"
              description="Receba desafios adaptados ao seu nível e área de atuação. Quizzes, projetos práticos e muito mais."
            />

            <FeatureCard
              icon={<Users size={32} />}
              color="green"
              title="Comunidade Ativa"
              description="Conecte-se com desenvolvedores, troque experiências e cresça com a comunidade."
            />

            <FeatureCard
              icon={<Brain size={32} />}
              color="purple"
              title="Mentoria com IA"
              description="Nossa IA analisa seu perfil e oferece orientação personalizada para você alcançar seus objetivos."
            />

          </div>
        </div>
      </section>

      <section className="py-32  bg-[#F2F4F7] text-black">
       <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-linear-to-r from-[#0a1f4e] via-[#083472] to-[#0a1f4e] rounded-3xl p-12 lg:p-16 shadow-glow">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Pronto para acelerar sua carreira?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Junte-se a centenas de desenvolvedores que já estão se preparando 
              para conquistar as melhores oportunidades do mercado.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate(Routes.Register)}
              className="text-lg hover:scale-105 transition-transform text-white"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}