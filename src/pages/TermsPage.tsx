import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Logo from '../components/icons/logo';
import { FileText, Shield, ArrowLeft } from 'lucide-react';
import { DotPattern } from '../components/magicui/dot-pattern';
import { cn } from '../lib/utils';

export default function TermsPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "opacity-20"
        )}
      />

      {/* Header */}
      <header className="fixed top-0 w-full glass border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-medium">Termos de Serviços</span>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-20 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Termos de Serviços
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estes termos regem o uso da nossa plataforma de agentes de IA. 
              Última atualização em 28 de agosto de 2025.
            </p>
          </div>

          {/* Quick Navigation */}
          <Card variant="glass-brand" className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-brand-500" />
                <span>Navegação Rápida</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#acceptance" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>1. Aceitação dos Termos</span>
                </a>
                <a href="#services" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>2. Descrição dos Serviços</span>
                </a>
                <a href="#accounts" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>3. Contas de Usuário</span>
                </a>
                <a href="#usage" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>4. Uso Aceitável</span>
                </a>
                <a href="#pricing" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>5. Preços e Pagamentos</span>
                </a>
                <a href="#liability" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>6. Limitação de Responsabilidade</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <Card variant="glass" className="p-8" id="acceptance">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>
                  Ao acessar e usar a plataforma Definna ("Serviço"), você concorda em estar vinculado a estes Termos de Serviços ("Termos"). 
                  Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
                <p>
                  Estes termos constituem um acordo legal entre você ("Usuário") e a Definna ("Empresa", "nós", "nosso"). 
                  Reservamo-nos o direito de modificar estes termos a qualquer momento, com notificação prévia aos usuários.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card variant="glass" className="p-8" id="services">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  2. Descrição dos Serviços
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>
                  A Definna oferece uma plataforma para criação, gerenciamento e implementação de agentes de inteligência artificial. 
                  Nossos serviços incluem:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criação de agentes de IA personalizados sem necessidade de código</li>
                  <li>Integração com múltiplos provedores de LLM (OpenAI, Google AI, Claude, etc.)</li>
                  <li>Interface conversacional para interação com agentes</li>
                  <li>Integração com plataformas de mensageria como WhatsApp Business</li>
                  <li>Análises e métricas de performance dos agentes</li>
                  <li>Suporte técnico e documentação</li>
                </ul>
                <p>
                  Os serviços são fornecidos "como estão" e podem ser modificados, suspensos ou descontinuados a nosso critério, 
                  com notificação prévia quando possível.
                </p>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card variant="glass" className="p-8" id="accounts">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  3. Contas de Usuário
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <h4 className="text-foreground font-semibold">3.1 Criação de Conta</h4>
                <p>
                  Para usar nossos serviços, você deve criar uma conta fornecendo informações precisas e completas. 
                  Você é responsável por manter a confidencialidade de suas credenciais de acesso.
                </p>
                
                <h4 className="text-foreground font-semibold">3.2 Responsabilidade da Conta</h4>
                <p>
                  Você é totalmente responsável por todas as atividades que ocorrem em sua conta. 
                  Deve notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
                </p>
                
                <h4 className="text-foreground font-semibold">3.3 Suspensão e Encerramento</h4>
                <p>
                  Reservamo-nos o direito de suspender ou encerrar sua conta a qualquer momento, 
                  especialmente em casos de violação destes termos ou atividades suspeitas.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card variant="glass" className="p-8" id="usage">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  4. Uso Aceitável
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>Você concorda em não usar nossos serviços para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Atividades ilegais ou fraudulentas</li>
                  <li>Criação de conteúdo prejudicial, ofensivo ou discriminatório</li>
                  <li>Violação de direitos de propriedade intelectual</li>
                  <li>Spam, phishing ou outras atividades maliciosas</li>
                  <li>Tentativas de comprometer a segurança da plataforma</li>
                  <li>Uso excessivo que possa prejudicar a performance para outros usuários</li>
                </ul>
                
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <h4 className="text-destructive font-semibold">Importante</h4>
                      <p className="text-sm">
                        Violações das políticas de uso podem resultar na suspensão imediata da conta 
                        sem aviso prévio ou reembolso.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card variant="glass" className="p-8" id="pricing">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  5. Preços e Pagamentos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <h4 className="text-foreground font-semibold">5.1 Planos de Assinatura</h4>
                <p>
                  Oferecemos diferentes planos de assinatura com recursos e limites variados. 
                  Os preços estão sujeitos a alterações com notificação prévia de 30 dias.
                </p>
                
                <h4 className="text-foreground font-semibold">5.2 Faturamento</h4>
                <p>
                  As assinaturas são cobradas mensalmente ou anualmente, conforme selecionado. 
                  O pagamento é processado automaticamente na data de renovação.
                </p>
                
                <h4 className="text-foreground font-semibold">5.3 Cancelamento e Reembolsos</h4>
                <p>
                  Você pode cancelar sua assinatura a qualquer momento. Não oferecemos reembolsos 
                  para períodos já pagos, exceto conforme exigido por lei.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card variant="glass" className="p-8" id="liability">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-brand-500">
                  6. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>
                  Na máxima extensão permitida por lei, a Definna não será responsável por danos indiretos, 
                  incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso.
                </p>
                <p>
                  Nossa responsabilidade total por qualquer reivindicação relacionada aos serviços será 
                  limitada ao valor pago por você nos 12 meses anteriores ao evento que deu origem à reivindicação.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <Card variant="glass-brand" className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Dúvidas sobre os Termos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco se tiver alguma dúvida sobre estes termos de serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient-brand">
                  Falar com Suporte
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = '/privacy'}>
                  Ver Políticas de Privacidade
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}