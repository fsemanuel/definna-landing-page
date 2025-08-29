# Páginas Legais - Definna Landing Page

Este branch adiciona páginas de **Termos de Serviços** e **Políticas de Privacidade** à landing page do Definna, seguindo o design e cores existentes do projeto.

## 🎯 Funcionalidades Implementadas

### 📄 Páginas Legais
- **Termos de Serviços** (`/src/pages/TermsPage.tsx`)
- **Políticas de Privacidade** (`/src/pages/PrivacyPage.tsx`)

### 🎨 Design e UX
- **Consistência visual** com a landing page principal
- **Cores da marca** (brand-500, brand-600) integradas
- **Navegação intuitiva** com botão "Voltar"
- **Navegação rápida** por seções dentro das páginas
- **Background pattern** consistente com o design principal

### 🔧 Componentes
- **Componentes reutilizáveis** em `/src/components/legal/`
- **Páginas standalone** em `/src/pages/`
- **Integração no footer** da página principal com links

## 📁 Estrutura dos Arquivos

```
src/
├── components/
│   └── legal/
│       ├── index.tsx              # Navegador principal das páginas legais
│       ├── TermsOfService.tsx     # Componente de Termos
│       └── PrivacyPolicy.tsx      # Componente de Políticas
├── pages/
│   ├── TermsPage.tsx             # Página standalone de Termos
│   └── PrivacyPage.tsx           # Página standalone de Privacidade
└── App.tsx                       # Atualizado com links no footer
```

## 🎨 Elementos de Design

### Cores Utilizadas
- **Primary**: `brand-500` (#3ECF8E)
- **Secondary**: `brand-600` (tom mais escuro)
- **Glass effects**: `glass-brand`
- **Gradients**: `gradient-brand`

### Componentes UI
- **Cards** com variantes `glass` e `glass-brand`
- **Buttons** com variantes consistentes
- **Icons** do Lucide React
- **Typography** seguindo a hierarquia existente

## 📱 Responsividade

Todas as páginas são totalmente responsivas, com:
- **Grid layouts** adaptativos
- **Mobile-first** design
- **Breakpoints** consistentes com o projeto

## 🚀 Como Usar

### Para Desenvolvimento
1. As páginas podem ser acessadas diretamente via componentes
2. Use `TermsPage` e `PrivacyPage` como páginas standalone
3. Use os componentes em `/legal/` para integração customizada

### Links no Footer
Os links foram adicionados ao footer da página principal:
- `/terms` → Termos de Serviços
- `/privacy` → Políticas de Privacidade

## 📋 Conteúdo das Páginas

### Termos de Serviços
- ✅ Aceitação dos Termos
- ✅ Descrição dos Serviços
- ✅ Contas de Usuário
- ✅ Uso Aceitável
- ✅ Preços e Pagamentos
- ✅ Limitação de Responsabilidade

### Políticas de Privacidade
- ✅ Coleta de Informações
- ✅ Uso das Informações
- ✅ Compartilhamento de Dados
- ✅ Segurança dos Dados
- ✅ Direitos do Usuário (LGPD)
- ✅ Cookies e Tecnologias

## 🛡️ Conformidade Legal

As páginas foram criadas considerando:
- **LGPD** (Lei Geral de Proteção de Dados)
- **Boas práticas** de privacidade
- **Transparência** no tratamento de dados
- **Direitos do usuário** claramente definidos

## 🔄 Próximos Passos

Para implementar em produção:
1. **Configurar roteamento** (React Router ou Next.js)
2. **Revisar conteúdo legal** com advogados
3. **Testes de usabilidade** nas páginas
4. **SEO optimization** para as páginas legais

## 🎉 Resultado

As páginas estão prontas para uso e seguem perfeitamente o design system da Definna, proporcionando uma experiência consistente para os usuários que precisam acessar informações legais da plataforma.