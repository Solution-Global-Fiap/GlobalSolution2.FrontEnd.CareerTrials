import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { loginUser, getAuthenticated } from "../hooks/useAuth"
import { Routes } from "../routes/routes";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function navigateHome(){
    navigate(Routes.Chat, {repalce: true})
  }

  useEffect(() => {
    if (getAuthenticated()) navigateHome();
  }, []);


  const handleSubmit = async(e) => {
    
    e.preventDefault()

    const res = await loginUser(email, password);
    if (res.success) {
      toast.success(`Bem-vindo(a), ${res.user.nome}!`);
      navigateHome();
    } else {
      toast.error(res.message || "E-mail ou senha incorretos!");
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Login</CardTitle>
          <CardDescription className="text-center text-gray-300">
            Entre na plataforma para continuar aprendendo
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-white">Email</Label>
              <Input
                type="email"
                placeholder="seuemail@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 border-white/10 text-white placeholder-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Senha</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/20 border-white/10 text-white placeholder-gray-300"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}