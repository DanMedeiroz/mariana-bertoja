# ⚖️ Landing Page - Dra. Mariana Bertoja

> **"Soluções jurídicas que potencializam seu negócio."**

Projeto de Landing Page profissional desenvolvido para a advogada especialista em Direito Empresarial, **Mariana Bertoja**.

Este projeto marca uma evolução no desenvolvimento Front-end, partindo de uma base inicial (Lovable AI) para uma aplicação **React + Vite** totalmente refatorada e personalizada, com foco extremo em design responsivo, performance e identidade visual.

---

## 🚀 Tecnologias Utilizadas

* **Core:** React (v18), TypeScript, Vite
* **Estilização:** Tailwind CSS (v3.4)
* **Ícones:** Lucide React
* **Fontes:** Google Fonts (Plus Jakarta Sans & Montserrat)
* **Gerenciamento de Pacotes:** NPM

---

## ✨ Destaques e Customizações (Change Log)

O projeto sofreu diversas intervenções manuais para atingir o nível de acabamento atual. Abaixo estão as principais implementações:

### 1. Arquitetura de Hero Section Híbrida 📱/💻
Implementação de uma lógica avançada para garantir a legibilidade e estética em qualquer dispositivo:
* **Dual Assets:** O código carrega imagens diferentes para Mobile (`hero-bg-mobile.jpg`) e Desktop (`hero-bg-desktop.jpg`) para otimizar o enquadramento.
* **Safe-Zones Dinâmicas:**
    * *Desktop:* Texto alinhado à esquerda (cor escura) sobre fundo claro, com gradiente lateral.
    * *Mobile:* Texto reposicionado para o topo (cor branca) sobre área escura da foto, garantindo que o conteúdo não cubra o sujeito da foto.

### 2. Header Responsivo & Interativo
* **Efeito Glassmorphism:** O cabeçalho inicia transparente e aplica um fundo `backdrop-blur` suave ao detectar rolagem (Scroll Event Listener).
* **Layout Adaptativo:**
    * *Desktop:* Logo à esquerda, navegação completa.
    * *Mobile:* Logo centralizada (absolute positioning), Menu Hambúrguer à direita com lógica de cores dinâmica (Dourado/Creme) dependendo do fundo.

### 3. Design System & Tipografia
* Integração das fontes **Plus Jakarta Sans** (para títulos modernos e corporativos) e **Montserrat** (para leitura fluida).
* Definição de variáveis globais no Tailwind para a paleta de cores da marca (Tons de Dourado, Marrom e Creme).

### 4. SEO e Performance
* Correção de caminhos de assets (migração de `public` para importação via JS em `src/assets`).
* Configuração completa de Meta Tags (Open Graph) para compartilhamento rico no WhatsApp e LinkedIn.
* Favicon personalizado.

---

## 📦 Como rodar o projeto localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DanMedeiroz/mariana-bertoja.git](https://github.com/DanMedeiroz/mariana-bertoja.git)
    ```

2.  **Entre na pasta:**
    ```bash
    cd mariana-bertoja
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(Nota: Se houver erro de permissão no Windows, use `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` no PowerShell)*

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

Desenvolvido por **Daniel Medeiros** 💻