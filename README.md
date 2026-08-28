<div align="center">

# 🌱 ReUse: Menos desperdício. Mais possibilidades.

### Conheça a nova plataforma de troca de itens, colaborativa e ambientalmente responsável.

[![Status](https://shields.io)](https://github.com)
[![React Native](https://shields.io)](https://reactnative.dev)
[![License](https://shields.io)](https://opensource.org)

</div>

---

## 🚀 Sprints de Desenvolvimento

O desenvolvimento do projeto foi organizado em sprints, permitindo evoluir a aplicação de forma incremental e validar as principais funcionalidades continuamente.

### 📍 Sprint 01 — Fundação
**Objetivo:** Estruturar a base do projeto e demonstrar sua proposta.

- [x] **Apresentação do Produto:** Definição e validação das principais funcionalidades.
- [x] **Componentização:** Criação de componentes reutilizáveis para aprimorar escalablidade e manutenção.
- [x] **UI/UX:** Definição da arquitetura de informação e consolidação da identidade visual.
- [x] **MVP da Home:** Estruturação completa e estilização da tela inicial.

---

## 🎨 Interface e Decisões de UI

A interface do aplicativo foi projetada nos seguintes pilares fundamentais:

* **Personalidade Emocional:** Identidade visual planejada para transmitir uma atmosfera moderna, amigável, acolhedora e com foco total em sustentabilidade.
* **Hierarquia Visual:** Elementos estruturados de forma coesa, garantindo que as informações de maior relevância (como estado do produto e distância) ganhem destaque.
* **Arquitetura da Home:** Tela inicial equipada com sistema de filtragem dinâmica, seções que segmentam o conteúdo por comportamento do usuário e menu inferior otimizado para o alcance dos dedos.

---

## 🛠️ Estrutura do Projeto

Abaixo está a arquitetura enxuta do diretório `/src`, omitindo arquivos de configuração padrão do Expo para destacar o código proprietário da aplicação:

```text
├── assets/
│   ├── fonts/
│   └── images/              # Ícones, splash screen e assets visuais
├── src/
│   ├── common-components/   # Componentes globais genéricos (Botões, inputs)
│   ├── components/          # Componentes específicos de regras de negócio
│   ├── screens/
│   │   └── Home/            # Fluxos de telas da aplicação (Home, Chat, Perfil)
│   └── styles/              # Temas, paleta de cores e estilização global
└── App.tsx                  # Ponto de entrada da aplicação React Native
```
