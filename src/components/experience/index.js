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
      title: "Ago 2021",
      cardTitle: "Desenvolvedor Front-end ",
      cardSubtitle: "(Freelancer)",
      cardDetailedText:
        "Desenvolvimento ReactJS, Landing Pages, SEO, Site corporativos, Emails Marketing, PWA e Wordpress",
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
        projetos WEB. Atuando com desenvolvimento de
        <b>
          Lannding Pages, PWA, Wordpress, sites corporativos, e-mails de
          marketing e Blogs utilizando metodologias ágeis como Scrum e Kanban.
        </b>{" "}
      </p>
      <div style={{ width: "100%", height: "auto" }}>
        <Chrono
          mode="VERTICAL"
          scrollable={{ scrollbar: true }}
          slideShow
          slideItemDuration={4500}
          items={items}
          cardPositionHorizontal="TOP"
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
