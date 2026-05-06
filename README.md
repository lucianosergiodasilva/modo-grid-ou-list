# 📱 Alternador de Layout Dinâmico: Modo Grid ou Lista

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
</p>

---

## 📝 Sobre o Projeto (Caso de Estudo)

Este projeto consiste em um **Caso de Estudo (Study Case)** focado no desenvolvimento de interfaces reativas e na otimização da Experiência do Usuário (UX). O projeto foi totalmente inspirado e projetado a partir de um módulo real de uma plataforma de Ensino a Distância (EAD) universitária, replicando com alta fidelidade suas mecânicas e comportamentos funcionais de exibição.

O objetivo principal do estudo foi explorar a flexibilidade estrutural do CSS moderno aliada à manipulação do Document Object Model (DOM) com JavaScript puro.

---

## 🎯 O Problema que o Projeto Resolve

Interfaces que exibem catálogos de mídias, videoaulas ou módulos de aprendizado frequentemente sofrem com a rigidez visual. Usuários diferentes possuem necessidades cognitivas e contextos de visualização distintos:

* 🗂️ **Modo Grid:** Favorece o reconhecimento visual imediato. É ideal para quando o usuário busca identificar o conteúdo através de elementos gráficos, capas ou blocos definidos de informações focadas.
* 📋 **Modo Lista:** Prioriza a varredura textual sequencial e a leitura analítica. É ideal para telas menores ou para quando o usuário precisa validar metadados rápidos (como títulos longos e datas de publicação de forma cronológica) sem ruídos visuais.

**A solução:** O projeto elimina essa fricção permitindo que o usuário alterne instantaneamente entre os dois modos através de uma única ação intuitiva na barra de título principal.

---

## ⚙️ Como o Projeto Funciona

A arquitetura do projeto foi desenhada para manter o código limpo, performático e altamente escalável através do princípio de separação de responsabilidades:

1. **Gatilho de Evento (Event Listener):** O JavaScript escuta de forma contínua as interações de clique na barra de título **"AULAS / PALESTRAS"**.
2. **Alternância Baseada em Estado (Toggle):** Ao detectar o clique, a função injeta ou remove dinamicamente as classes modificadoras `.grid` ou `.list` no contêiner pai.
3. **Reestruturação Semântica por CSS:** Com apenas a alteração dessas classes no elemento raiz, as propriedades de posicionamento se adaptam. No modo Lista, os componentes distribuem-se horizontalmente usando alinhamento linear; no modo Grade, os elementos são reorganizados em colunas simétricas tridimensionais, mudando inclusive a hierarquia entre o ícone de vídeo e os títulos de cada card de aula.

---

## 🎬 Demonstração Prática

Veja abaixo o comportamento simulado da interface realizando a transição em tempo real de forma fluida ao interagir com o cabeçalho clicável:

<img width="900" height="500" alt="Code_Generated_Image (1)" src="https://github.com/user-attachments/assets/2b80c383-949d-413d-a100-06f97f6e5b1f" />


---

## 🛠️ Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
</p>
---

## 📂 Comparativo de Telas (Interface da Faculdade vs. Minha Versão)

O projeto alcançou alta fidelidade na reprodução visual e comportamental do sistema original. Veja as referências mapeadas abaixo utilizando os arquivos de imagem contidos no repositório:

### 🏛️ Interface de Referência (Faculdade)

<img width="1454" height="800" alt="como-era" src="https://github.com/user-attachments/assets/29348e5b-c7f4-4386-a43f-a5db3f6016d4" />


### 💻 Interface Desenvolvida (Minha Versão)

<img width="1454" height="800" alt="como-ficou" src="https://github.com/user-attachments/assets/8666770b-2109-4bed-8d88-c10c02ce6d62" />


---
<p align="center">Desenvolvido com 💙 por Luciano Sergio da Silva</p>
