import { Chrono } from "react-chrono";
import "./style.css";
import imageAvatar from "../../img/avatarSF.png";

export default function Experience() {
  const items = [
    {
      title: "Ago 2012",
      cardTitle: "Desenvolvedor de Games ",
      cardSubtitle: "(Graduando)",
      cardDetailedText:
        "Já era responsável pela parte de desenvolvimento de games da empresa, como primeira mudança resolvi mudar o desenvolvimento de games antes em Flash para HTML5! ",
    },
    {
      title: "Jan 2018",
      cardTitle: "Lead Games e Desenvolvedor web ",
      cardSubtitle: "(DP Content)",
      cardDetailedText:
        "Comecei auxiliar também em alguns projetos web. Desenvolvimento de Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
    },
    {
      title: "Out 2021",
      cardTitle: "Software Engineer - Frontend",
      cardSubtitle: "(Salesforce)",
      cardDetailedText:
        "Desenvolvimento E-Commerce Commerce Cloud com o Salesforce (SFCC),VueJS, SASS,Emails Marketing ISML E Javascript utilizando metodologias Agéis Kanban e Scrum. Desenvolvemos lojas para clientes como : Tramontina, Copercana, Fini e Bold.",
    },
    {
      title: "Jan 2023",
      cardTitle: "Frontend SFCC",
      cardSubtitle: "(IBM)",
      cardDetailedText:
        "Desenvolvimento de lojas digitais com Salesforce commerce cloud SFCC, usando ISML, criando componentes Page designer (Page Design), Product Detail Page, Page List Product, content assets, SASS, javascript, jquery e ajudei no tagueamento para e-commerce (GA4) e semore utilizando metodologias Agéis Kanban e Scrum. Desenvolvemos a loja: Oi Place.",
    },
  ];

  return (
    <>
      <div className="flex experience">
        <div className="experience-image">
          <img src={imageAvatar} alt="Wagner Silva" />
        </div>

        <p className="experience-text">
          Em 2011, eu comecei a desenvolver jogos utilizando ActionScript. Dois
          anos depois, em 2013, nossa equipe migrou para HTML5, focando
          principalmente no desenvolvimento de jogos. Como líder, eu conduzia a
          equipe na criação de jogos educativos para clientes renomados, como
          ÂNIMA, SANOFI, GLOBO, entre outros. A partir de 2018, expandi minha
          atuação para projetos web, trabalhando no desenvolvimento de Landing
          Pages, PWAs, Wordpress, SFCC (Salesforce Commerce Cloud), sites
          corporativos, e-mails de marketing e Blogs. Durante esse período,
          utilizei metodologias ágeis, como Scrum e Kanban. No ano de 2021,
          comecei a trabalhar com <strong>Commerce Cloud</strong> e, em 2022,
          conquistei o cargo de Engenheiro de Software na Salesforce.
        </p>
      </div>

      <div style={{ width: "100%", height: "auto" }}>
        <Chrono
          mode="VERTICAL"
          scrollable={{ scrollbar: true }}
          items={items}
          useReadMore={false}
          theme={{
            primary: "#08b9bc",
            secondary: "#c9feff",
            cardBgColor: "#fff",
            cardForeColor: "#444444",
            titleColor: "#08b9bc",
          }}
        />
      </div>
    </>
  );
}
