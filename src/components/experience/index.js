import { Chrono } from "react-chrono";

export default function Experience() {
  const items = [{
    title: "Ago 2011",
    cardTitle: "Estagiário Dev. Games",
    cardSubtitle:"(Graduando)",
    cardDetailedText: " Desenvolvimento de games como ActionScript, ajudava na produção de games em Flash.",
    
  },{
    title: "Ago 2012",
    cardTitle: "Desenvolvedor de Games ",
    cardSubtitle:"(Graduando)",
    cardDetailedText: "Já era responsável pela parte de desenvolvimento de games da empresa, como primeira mudança resolvi mudar o desenvolvimento de games antes em Flash para HTML5! ",
  
    },{
      title: "Jan 2015",
      cardTitle: "Lead de Games",
      cardSubtitle:"(DP Content)",
      cardDetailedText: "Liderava uma equipe para desenvolvimento de jogos educativos para clientes como: SER Educacional, Ânima, Sanofi, Globo entre outros.   ",
      
      },{
        title: "Mar 2018",
        cardTitle: "Lead Games e Desenvolvedor web ",
        cardSubtitle:"(DP Content)",
        cardDetailedText: "Comecei auxiliar também em alguns projetos web. Desenvolvimento de Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
      
      },
      {
        title: "Fev 2021",
        cardTitle: "Desenvolvedor Frontend ",
        cardSubtitle:"(Freelancer)",
        cardDetailedText: "Desenvolvimento ReactJS, Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
      
      }
  
  ];

  return(
    <>
      <div style={{ width: "100%", height: "auto" }}>
        <Chrono items={items} mode="VERTICAL"  theme={{ 
          primary: "#08b9bc",
          secondary: "#c9feff",
          cardBgColor: "#fff",
          cardForeColor: "#444444",
          titleColor: "#08b9bc"
        }}  />
      </div>
    </>
  )
}