# AI Platform Landing Page

Uma landing page profissional para a **AI Platform** usando exclusivamente o design system e componentes originais da plataforma.

## 🚀 Sobre a AI Platform

A **AI Platform** é uma solução no-code/low-code para criar e gerenciar agentes de inteligência artificial personalizados.

### 🎯 **Principais Recursos**
- **🤖 Agentes Personalizados**: Criação com prompts customizados
- **🔗 Múltiplos Provedores**: OpenAI, Google AI, Claude e outros LLMs
- **💬 Chat em Tempo Real**: Interface conversacional com histórico
- **📱 Integração WhatsApp**: Conexão direta com WhatsApp Business
- **📊 Dashboard Analytics**: Métricas em tempo real
- **🛠️ Ferramentas Externas**: Integrações com APIs e serviços

## 🎨 **Design System**

### **Paleta de Cores (Dark Mode Only)**
- **Brand Primary**: `#3ECF8E` (Verde Supabase) - `hsl(153 60% 53%)`
- **Background**: `hsl(0 0% 3.9%)` - Fundo escuro
- **Foreground**: `hsl(210 40% 98%)` - Texto principal
- **Muted**: `hsl(215 20.2% 65.1%)` - Texto secundário
- **Border**: `hsl(0 0% 13%)` - Bordas

### **Componentes UI Utilizados**
- **Button** com variantes:
  - `brand` - Botão principal com cor da marca
  - `gradient-brand` - Gradiente verde Supabase
  - `glass-brand` - Efeito glassmorphism
- **Card** com variantes:
  - `glass` - Efeito glassmorphism padrão
  - `glass-brand` - Glass com destaque verde
  - `brand` - Card com cor da marca

### **Efeitos Especiais**
- **Glass Effect**: `backdrop-blur-sm` com transparência
- **Glow Effects**: Brilhos coloridos nos hovers
- **Gradientes**: Verde Supabase em elementos destacados

## 🛠️ **Stack Tecnológico**

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Design System**: Baseado na AI Platform original

## 📁 **Estrutura do Projeto**

```
src/
├── components/
│   └── ui/
│       ├── button.tsx       # Componente Button com variantes AI Platform
│       └── card.tsx         # Componente Card com variantes AI Platform
├── lib/
│   └── utils.ts            # Utilities para className merging
├── App.tsx                 # Componente principal da landing page
├── index.css              # CSS global com design system
└── main.tsx               # Entry point
```

## 🎯 **Seções da Landing Page**

1. **Header Fixo** - Navegação com logo AI Platform
2. **Hero Section** - Call-to-action principal
3. **Stats Section** - Métricas com cards animados
4. **Features Section** - 4 recursos principais com rotação
5. **Dashboard Preview** - Mockup do painel de controle
6. **Pricing** - 3 planos (Starter, Professional, Enterprise)
7. **CTA Final** - Seção de conversão
8. **Footer** - Links organizados

## ⚡ **Características**

### **🎨 Visual**
- **100% Dark Mode** - Exclusivamente modo escuro da AI Platform
- **Glassmorphism** - Efeitos modernos de vidro
- **Glow Effects** - Brilhos verdes nos elementos interativos
- **Animações Suaves** - Transições de 300ms
- **Responsive Design** - Mobile-first

### **🔧 Funcionalidades**
- **Rotação Automática** - Cards de recursos mudam a cada 3s
- **Hover Effects** - Interações visuais em todos os elementos
- **Scroll Suave** - Navegação fluida entre seções
- **Loading Animations** - Fade-in na entrada

## 🚀 **Como Executar**

### **Pré-requisitos**
```bash
Node.js 18+
npm ou yarn
```

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/fsemanuel/product-landing-page

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📦 **Dependências Principais**

```json
{
  "react": "^18.2.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.5",
  "lucide-react": "^0.454.0"
}
```

## 🎨 **Customização**

### **Cores**
As cores estão definidas no `index.css` usando variáveis CSS:
```css
--brand-400: 153 50% 36%;
--brand-500: 153 60% 53%; /* #3ECF8E */
--brand-600: 153 66% 65%;
```

### **Componentes**
Os componentes UI estão em `src/components/ui/` e podem ser facilmente customizados.

### **Conteúdo**
Todo o conteúdo está no `App.tsx` e pode ser modificado diretamente.

## 🌟 **Diferenciais**

- **Autêntico**: Usa exatamente o mesmo design system da AI Platform
- **Performático**: Otimizado com Vite e componentes leves
- **Moderno**: Design contemporary com glassmorphism e gradientes
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Acessível**: Contraste adequado e navegação por teclado

## 🔄 **Futuras Melhorias**

- [ ] Integração com formulários de contato
- [ ] Analytics (Google Analytics/Mixpanel)
- [ ] Testes A/B para otimização
- [ ] Blog/recursos adicionais
- [ ] Multi-idioma (i18n)
- [ ] PWA (Progressive Web App)

---

**🚀 Desenvolvido com foco na experiência do usuário e conversão máxima**