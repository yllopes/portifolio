
import buguelaIcon from "../../assets/img/S1/Buguela/buguela-icon.png";
import buguelaMain from "../../assets/img/S1/Buguela/buguela.png";
import buguela1 from "../../assets/img/S1/Buguela/buguela1.png";
import buguela2 from "../../assets/img/S1/Buguela/buguela2.png";
import buguela3 from "../../assets/img/S1/Buguela/buguela3.png";
import cartazImg from "../../assets/img/S1/MySoundE/cartaz.png";
import mysoundInit from "../../assets/img/S1/MySoundE/Mysound-init.png";


import visgoGerenciamento from "../../assets/img/S2/visgo-gerenciamento.png";
import visgoIni from "../../assets/img/S2/visgo-ini.png";
import visgoLogin from "../../assets/img/S2/visgo-login.png";


import pilatesAssinatura from "../../assets/img/S3/pilates-assinatura.png";
import pilatesIni from "../../assets/img/S3/pilates-ini.png";
import pilatesLogin from "../../assets/img/S3/pilates-login.png";


import rofeLogin from "../../assets/img/S4/rofe-login.png";
import rofeMain from "../../assets/img/S4/rofe.png";
import rofeIni from "../../assets/img/S4/rofe_ini.png";


import leadMobile from "../../assets/img/S5/lead_mobile.png";
import mobileMain from "../../assets/img/S5/mobile.png";

export const PROJECTS_DATA = {
  1: [
    { 
      id: "p1_s1", 
      title: "Projeto Buguela Game / App", 
      type: "Front-End", 
      duration: "03:45", 
      repo: "://github.com", 
      desc: "Projeto de teste utilizando imagens locais para validar a transição de carrossel no player estilo Spotify.", 
      tech: ["HTML5", "CSS3", "JavaScript", "Bulma"],
      artwork: buguelaMain,
      prints: [buguelaMain, buguelaIcon, buguela1, buguela2, buguela3],
      landingContent: {
        desafio: "Criar uma mecânica de game ou aplicação web interativa aplicando seletores semânticos e regras rígidas de posicionamento.",
        arquitetura: "Desenvolvido com arquitetura cliente-servidor simples, otimizado para o carregamento ágil de imagens locais pesadas."
      }
    },
    { 
      id: "p2_s1", 
      title: "Calculadora de Algoritmos", 
      type: "Logic", 
      duration: "02:15", 
      repo: "://github.com", 
      desc: "Exercícios iniciais de lógica de programação estruturada e manipulação de arrays.", 
      tech: ["JavaScript", "Logic"],
      artwork: mysoundInit,
      prints: [mysoundInit, cartazImg],
      landingContent: {
        desafio: "Resolver problemas matemáticos e estruturar manipulações de matrizes em console de forma otimizada.",
        arquitetura: "Código puramente procedural com foco em redução de complexidade de tempo (Big O Notation)."
      }
    }
  ],

  2: [
    {
      id: "p1_s2",
      title: "Visgo Plataforma de Gestão",
      type: "Front-End + BackEnd",
      duration: "04:20",
      repo: "://github.com",
      desc: "Sistema web focado no gerenciamento e controle de fluxos internos desenvolvido no segundo período.",
      tech: ["PHP", "MySQL", "JavaScript", "Tailwind"],
      artwork: visgoIni,
      prints: [visgoIni, visgoLogin, visgoGerenciamento],
      landingContent: {
        desafio: "Gerenciar sessões seguras e estruturar transações relacionais ácidas para o painel de administração.",
        arquitetura: "Padrão de arquitetura MVC em PHP estruturado nativamente, integrado com banco de dados MySQL."
      }
    }
  ],

  3: [
    {
      id: "p1_s3",
      title: "Pilates Studio Manager",
      type: "Full Stack App",
      duration: "05:10",
      repo: "://github.com",
      desc: "Aplicação completa com fluxo de autenticação e controle de assinaturas recorrentes para estúdios de pilates.",
      tech: ["Java", "Spring Boot", "React", "MongoDB", "SCRUM"],
      artwork: pilatesIni,
      prints: [pilatesIni, pilatesLogin, pilatesAssinatura],
      landingContent: {
        desafio: "Modelar tabelas não-relacionais dinâmicas e gerenciar regras de negócios para planos e vencimentos de alunos.",
        arquitetura: "Back-end robusto construído com Spring Boot, expondo endpoints REST e persistência via Spring Data MongoDB."
      }
    }
  ],

  4: [
    {
      id: "p1_s4",
      title: "Rofe Enterprise Ecosystem",
      type: "Full Stack App",
      duration: "06:15",
      repo: "://github.com",
      desc: "Ecossistema corporativo robusto conteinerizado com Docker e hospedado na infraestrutura cloud da AWS.",
      tech: ["Java", "Spring Boot", "React", "Docker", "AWS", "JWT"],
      artwork: rofeIni,
      prints: [rofeIni, rofeLogin, rofeMain],
      landingContent: {
        desafio: "Implementar barramento de segurança com tokens JWT e arquitetar o deploy automatizado escalável na nuvem.",
        arquitetura: "Microservices integrados e conteinerizados. Deploy realizado através de instâncias EC2 e buckets S3 na AWS."
      }
    }
  ],

  5: [
    {
      id: "p1_s5",
      title: "Lead Capture & Mobile App",
      type: "Mobile Development",
      duration: "03:50",
      repo: "://github.com",
      desc: "Aplicativo nativo focado em captação de leads em tempo real e processamento local com Machine Learning integrado.",
      tech: ["React Native", "Expo", "JWT", "Docker", "Machine Learning"],
      artwork: mobileMain,
      prints: [mobileMain, leadMobile],
      landingContent: {
        desafio: "Garantir alta performance de renderização em listas infinitas mobile e processamento assíncrono em background.",
        arquitetura: "Construído em React Native com Expo, consumindo serviços nativos de geolocalização e câmera com armazenamento local seguro."
      }
    }
  ],
  6: []
};
