"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, MessageCircle, Star, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CPMHomePage() {
  const [activeTab, setActiveTab] = useState("home")

  const handleWhatsAppRedirect = () => {
    window.open("https://chat.whatsapp.com/CPM-COMMUNITY", "_blank")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    const message = `*INSCRIÇÃO CPM 2025*\n\n*Time:* ${data.teamName}\n*Capitão:* ${data.captainName}\n*WhatsApp:* ${data.whatsapp}\n*Email:* ${data.email}\n*Categoria:* ${data.category}\n*Experiência:* ${data.experience}\n*Observações:* ${data.observations}`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image src="/cpm-logo.png" alt="CPM Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">CPM</h1>
                <p className="text-sm text-muted-foreground font-medium">Campeonato Paulista</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              <button
                onClick={() => setActiveTab("home")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "home"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Início
              </button>
              <button
                onClick={() => setActiveTab("inscricao")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "inscricao"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Inscrição
              </button>
              <button
                onClick={() => setActiveTab("comunidade")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "comunidade"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Comunidade
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-border/50 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === "home" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab("inscricao")}
              className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === "inscricao" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              Inscrição
            </button>
            <button
              onClick={() => setActiveTab("comunidade")}
              className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === "comunidade" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              Comunidade
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-12">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <Image src="/cpm-logo.png" alt="CPM Logo" fill className="object-contain" />
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                Temporada 2025 • Inscrições Abertas
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl mx-auto">
                Campeonato Paulista de <span className="text-primary">MamoBall</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                O maior campeonato de MamoBall do WhatsApp. Junte-se à comunidade e mostre suas habilidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => setActiveTab("inscricao")}
                  className="text-base px-8 py-6 rounded-full font-medium"
                >
                  Inscrever Time
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveTab("comunidade")}
                  className="text-base px-8 py-6 rounded-full font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comunidade
                </Button>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-sm bg-card/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-2">150+</h3>
                  <p className="text-muted-foreground font-medium">Times Participantes</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-sm bg-card/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-2">2000+</h3>
                  <p className="text-muted-foreground font-medium">Membros na Comunidade</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-sm bg-card/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-2">4</h3>
                  <p className="text-muted-foreground font-medium">Temporadas Realizadas</p>
                </CardContent>
              </Card>
            </section>

            {/* Features */}
            <section className="space-y-12">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-serif font-bold text-foreground">Por que participar?</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Faça parte da maior comunidade de MamoBall e viva a experiência completa do campeonato.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm bg-card/50 p-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-bold text-foreground mb-3">Competição Oficial</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Campeonato oficial com regulamento profissional, árbitros qualificados e premiação para os
                          melhores times.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm bg-card/50 p-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-bold text-foreground mb-3">Comunidade Ativa</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Faça parte de uma comunidade apaixonada por MamoBall, com mais de 2000 membros ativos no
                          WhatsApp.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {/* Inscrição Tab */}
        {activeTab === "inscricao" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Inscrição de Time</h2>
              <p className="text-xl text-muted-foreground">
                Preencha os dados do seu time e envie para análise da organização.
              </p>
            </div>

            <Card className="border-0 shadow-sm bg-card/50">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-serif">Dados do Time</CardTitle>
                <CardDescription className="text-base">
                  Todas as informações serão enviadas via WhatsApp para análise.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="text-sm font-medium">
                        Nome do Time *
                      </Label>
                      <Input id="teamName" name="teamName" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="captainName" className="text-sm font-medium">
                        Nome do Capitão *
                      </Label>
                      <Input id="captainName" name="captainName" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-medium">
                        WhatsApp *
                      </Label>
                      <Input id="whatsapp" name="whatsapp" placeholder="(11) 99999-9999" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        E-mail
                      </Label>
                      <Input id="email" name="email" type="email" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">
                      Categoria *
                    </Label>
                    <Select name="category" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iniciante">Iniciante</SelectItem>
                        <SelectItem value="intermediario">Intermediário</SelectItem>
                        <SelectItem value="avancado">Avançado</SelectItem>
                        <SelectItem value="profissional">Profissional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-sm font-medium">
                      Experiência do Time
                    </Label>
                    <Select name="experience">
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Tempo de experiência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="menos-6-meses">Menos de 6 meses</SelectItem>
                        <SelectItem value="6-meses-1-ano">6 meses a 1 ano</SelectItem>
                        <SelectItem value="1-2-anos">1 a 2 anos</SelectItem>
                        <SelectItem value="mais-2-anos">Mais de 2 anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations" className="text-sm font-medium">
                      Observações
                    </Label>
                    <Textarea
                      id="observations"
                      name="observations"
                      placeholder="Informações adicionais sobre o time..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Importante:</strong> Ao enviar este formulário, suas
                        informações serão enviadas via WhatsApp para análise. Você receberá uma resposta em até 48
                        horas.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-medium rounded-full" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Inscrição via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Comunidade Tab */}
        {activeTab === "comunidade" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Comunidade CPM</h2>
              <p className="text-xl text-muted-foreground">Faça parte da maior comunidade de MamoBall do WhatsApp!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="border-0 shadow-sm bg-card/50">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl font-serif">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    Grupo Principal
                  </CardTitle>
                  <CardDescription className="text-base">
                    Discussões gerais, anúncios oficiais e interação entre os membros
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Membros ativos</span>
                    <Badge variant="secondary" className="text-sm font-medium">
                      2.1k+
                    </Badge>
                  </div>
                  <Button onClick={handleWhatsAppRedirect} className="w-full h-12 text-base font-medium rounded-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar no Grupo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-card/50">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl font-serif">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    Funcionalidades
                  </CardTitle>
                  <CardDescription className="text-base">O que você encontra na nossa comunidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Inscrições de times",
                      "Anúncios oficiais",
                      "Resultados e classificação",
                      "Dicas e estratégias",
                      "Networking entre jogadores",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-12 pb-12">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-foreground">
                    Pronto para fazer parte da família CPM?
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Nossa comunidade no WhatsApp é o coração do Campeonato Paulista de MamoBall. Conecte-se com outros
                    jogadores e participe das discussões!
                  </p>
                  <Button
                    onClick={handleWhatsAppRedirect}
                    size="lg"
                    className="text-base px-8 py-6 rounded-full font-medium"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar na Comunidade Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-10 h-10">
                <Image src="/cpm-logo.png" alt="CPM Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-bold text-xl text-foreground">CPM 2025</span>
            </div>
            <p className="text-muted-foreground font-medium">
              Campeonato Paulista de MamoBall - O maior campeonato de MamoBall do WhatsApp
            </p>
            <p className="text-xs text-muted-foreground">© 2025 CPM. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
