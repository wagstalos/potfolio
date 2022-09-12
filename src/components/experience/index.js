import { Chrono } from "react-chrono";

export default function Experience() {
  const items = [
    {
      title: "Ago 2011",
      cardTitle: "Estagiário Dev. Games",
      cardSubtitle: "(Graduando)",
      cardDetailedText:
        " Desenvolvimento de games como ActionScript, ajudava na produção de games em Flash.",
    },
    {
      title: "Ago 2012",
      cardTitle: "Desenvolvedor de Games ",
      cardSubtitle: "(Graduando)",
      cardDetailedText:
        "Já era responsável pela parte de desenvolvimento de games da empresa, como primeira mudança resolvi mudar o desenvolvimento de games antes em Flash para HTML5! ",
    },
    {
      title: "Jan 2015",
      cardTitle: "Lead de Games",
      cardSubtitle: "(DP Content)",
      cardDetailedText:
        "Liderava uma equipe para desenvolvimento de jogos educativos para clientes como: SER Educacional, Ânima, Sanofi, Globo entre outros. ",
    },
    {
      title: "Mar 2018",
      cardTitle: "Lead Games e Desenvolvedor web ",
      cardSubtitle: "(DP Content)",
      cardDetailedText:
        "Comecei auxiliar também em alguns projetos web. Desenvolvimento de Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
    },
    {
      title: "Out 2021",
      cardTitle: "Desenvolvedor Front-end ",
      cardSubtitle: "(Atonit)",
      cardDetailedText:
        "Desenvolvimento ReactJS, Landing Pages, SEO, Site corporativos, Emails Marketing, E-Commerce(SFCC).",
    },
    {
      title: "Mar 2022",
      cardTitle: "Software Engineer ",
      cardSubtitle: "(Salesforce)",
      cardDetailedText:
        "Desenvolvimento Commerce Cloud com o Salesforce (SFCC), SASS, ISML E Javascript utilizando metodologias Agéis Kanban e Scrum.",
    },
  ];

  return (
    <>
      <p>
        Em 2011 desenvolvia games utilizando ActionScript. Em 2013 já como ponto
        focal na área de dev games migramos para <b>HTML5</b> . Já como lead,
        conduzia a equipe para desenvolvimento de jogos educativos para clientes
        como ÂNIMA, SANOFI, GLOBO, entre outros. Em 2018 comecei atuação em
        projetos WEB. Atuando com desenvolvimento de,
        <b>
          Landing Pages, PWA, Wordpress, SFCC(Salesforce Commerce Cloud) , sites
          corporativos, e-mails de marketing e Blogs
        </b>{" "}
        utilizando metodologias ágeis como <strong> Scrum e Kanban.</strong>
        Em 2021 comecei trabalhar com commerce cloud e 2022 me tornei{" "}
        <strong>Software Enginner</strong> na Saleforce
      </p>
      <div style={{ width: "100%", height: "auto" }}>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: true }}
          slideShow
          slideItemDuration={4500}
          items={items}
          useReadMore={false}
          hideControls
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
