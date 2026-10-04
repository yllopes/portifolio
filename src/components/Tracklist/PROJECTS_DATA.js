
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
      title: "Projeto Buguela", 
      type: "Front-End", 
      duration: "03:45", 
      repo: "https://rudeboyone.github.io/projeto-integrador/", 
      desc: "Projeto do PI do primeiro semestre, com o objetivo de ser uma vitrine virtual que apresenta a proposta da marca, voltada à venda de produtos culturais relacionados às raízes afrodescendentes.", 
      tech: ["HTML", "CSS", "JavaScript", "Bulma CSS"],
      artwork: buguelaMain,
      prints: [buguelaMain, buguelaIcon, buguela1, buguela2, buguela3],
      landingContent: {
        desafio: "Criar um projeto para uma marca ou organização que tenha preocupações e responsabilidades sociais. Esse projeto teve que ser desenvolvido utilizando boas práticas de programação.",
        arquitetura: "Desenvolvido utilizando HTML5, o framework Bulma CSS, JavaScript puro e Git para versionamento, separando os elementos visuais em componentes para a reutilização do código."
      }
    },
    { 
      id: "p2_s1", 
      title: "Blog musical", 
      type: "Logic", 
      duration: "02:15", 
      repo: "https://yllopes.github.io/Meu-Primeiro-Site/", 
      desc: "Criacão do primeiro site com o tema livre", 
      tech: ["HTML", "CSS"],
      artwork: mysoundInit,
      prints: [mysoundInit, cartazImg],
      landingContent: {
        desafio: "Criar um site utilizando apenas HTML e CSS puro e hospedá-lo no GitHub Pages.",
        arquitetura: "Arquitetura simples separadas em poucas pastas, contendo imagens, videos, ou codigo HTML e CSS"
      }
    }
  ],

  2: [
    {
      id: "p1_s2",
      title: "Visgo Plataforma de Gestão",
      type: "Front-End + BackEnd",
      duration: "04:20",
      repo: "https://github.com/DSM2SEM2024/100esperanca",
      desc: "Sistema web focado para o gerenciamento e controle dos produtos em forma de vitrine virtual,",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
      artwork: visgoIni,
      prints: [visgoIni, visgoLogin, visgoGerenciamento],
      landingContent: {
        desafio: "Implementar um sistema com back-end, front-end e banco de dados utilizando PHP puro, com serviço de autenticação e CRUD básico. A criação do site foi realizada em conjunto com o cliente, por meio de reuniões e coleta de requisitos.",
        arquitetura: "Padrão de arquitetura MVC em PHP estruturado, integrado aos bancos de dados MySQL e SQLite. Para versionamento, foram utilizados Git e GitHub, e a ferramenta utilizada para desenvolvimento foi o VS Code."
      }
    }
  ],

  3: [
    {
      id: "p1_s3",
      title: "Pilates Studio",
      type: "Full Stack App",
      duration: "05:10",
      repo: "https://github.com/lucasfnCode/App-for-Studio-the-pilates-PI---FATECS",
      desc: "Aplicação completa com fluxo de autenticação e controle de assinaturas recorrentes para estúdios de pilates.",
      tech: ["Java", "Spring Boot", "React", "MongoDB", "Git", "Bootstrap", "SCRUM"],
      artwork: pilatesIni,
      prints: [pilatesIni, pilatesLogin, pilatesAssinatura],
      landingContent: {
        desafio: "Modelar tabelas não-relacionais dinâmicas e gerenciar regras de negócios para planos e vencimentos de alunos e criacão do dockerfile.",
        arquitetura: "Back-end robusto construído com Spring Boot, expondo endpoints REST e utilizando o Spring Data MongoDB para persistência de dados. O fluxo de inicialização do back-end foi automatizado via Docker, incluindo variáveis de ambiente, banco de dados e Java. Todo o projeto foi versionado utilizando Git e GitHub."
      }
    }
  ],

  4: [
    {
      id: "p1_s4",
      title: "Rofe Enterprise (Gestor Imobiliario)",
      type: "Full Stack App",
      duration: "06:15",
      repo: "https://github.com/100esperanca",
      desc: "Ecossistema corporativo robusto conteinerizado com Docker e hospedado na infraestrutura cloud da AWS.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React",  "AntDesign", "Docker", "AWS", "JWT"],
      artwork: rofeIni,
      prints: [rofeIni, rofeLogin, rofeMain],
      landingContent: {
        desafio: "Implementação de um barramento de segurança com tokens JWT e arquitetura de um deploy automatizado e escalável na nuvem. Atualização do produto em conjunto com o cliente para a apresentação final, resultando em um projeto multisserviço.",
        arquitetura: "Microsserviços integrados e conteinerizados. Deploy realizado por meio de instâncias EC2 e buckets S3 na AWS. Webhook desenvolvido em Python para o recebimento de dados e o acionamento de notificações."
      }
    }
  ],

  5: [
    {
      id: "p1_s5",
      title: "Mobile App",
      type: "Mobile Development (Gestor Imobiliario)",
      duration: "03:50",
      repo: ":https://github.com/100esperanca",
      desc: "Aplicativo nativo focado em captação de leads em tempo real e processamento local com Machine Learning integrado.",
      tech: ["React Native", "PostgreSQL", "Expo", "JWT", "Docker", "Machine Learning"],
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
