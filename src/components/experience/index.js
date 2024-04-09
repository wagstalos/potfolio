import { Chrono } from "react-chrono";
import "./style.css";
import imageAvatar from "../../img/avatarSF.png";

export default function Experience() {
  const items = [
    {
      title: "Jun 2023",
      cardTitle: "Frontend SFCC - Sênior",
      cardSubtitle: "(Backlgrs)",
      cardDetailedText:
        "Desenvolvimento de lojas digitais e sustentação utilizando Salesforce Commerce Cloud (SFCC), com expertise em ISML. Desenvolvimento de componentes no Page Designer, incluindo páginas de detalhes de produtos (Product Detail Page), listagem de produtos (Page List Product), ativos de conteúdo (content assets), aplicação de SASS, implementação de scripts em JavaScript e jQuery. Contribuí ativamente no tagueamento para e-commerce (GA4) atuei como Tech Lead, seguindo sempre as metodologias ágeis Kanban e Scrum.",
    },
    {
      title: "Jan 2023",
      cardTitle: "Frontend SFCC - Sênior",
      cardSubtitle: "(IBM)",
      cardDetailedText:
        "Desenvolvimento de lojas digitais com Salesforce commerce cloud SFCC, usando ISML, criando componentes Page designer (Page Design), Product Detail Page, Page List Product, content assets, SASS, javascript, jquery e ajudei no tagueamento para e-commerce (GA4) e semore utilizando metodologias Agéis Kanban e Scrum. Go Live: Oi Place.",
    },
    {
      title: "Out 2021",
      cardTitle: "Software Engineer Frontend - Pleno",
      cardSubtitle: "(Salesforce)",
      cardDetailedText:
        "Desenvolvimento E-Commerce Commerce Cloud com o Salesforce (SFCC),VueJS, SASS,Emails Marketing ISML E Javascript utilizando metodologias Agéis Kanban e Scrum. Desenvolvemos lojas para clientes como : Tramontina, Copercana, Fini e Bold.",
    },
    {
      title: "Jan 2018",
      cardTitle: "Tech Lead Games e Dev. Web",
      cardSubtitle: "(DP Content)",
      cardDetailedText:
        "Comecei auxiliar também em alguns projetos web. Desenvolvimento de Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
    },
    {
      title: "Ago 2012",
      cardTitle: "Desenvolvedor de Games ",
      cardSubtitle: "(Graduando)",
      cardDetailedText:
        "Já era responsável pela parte de desenvolvimento de games da empresa, como primeira mudança resolvi mudar o desenvolvimento de games antes em Flash para HTML5! ",
    },
  ];

  return (
    <>
      <h2 className="mt-50 sub-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#08b9bb"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-subtask"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 0" />
          <path d="M4 5l4 0" />
          <path d="M6 5v11a1 1 0 0 0 1 1h5" />
          <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
          <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
        </svg>
        Experiência
      </h2>
      <div className="flex experience">
        <div className="experience-image">
          <img src={imageAvatar} alt="Wagner Silva" title="Wagner Silva" />
        </div>

        <div className="experience-text">
          <h2>Carreira</h2>
          <p>
            Atuação em projetos web, trabalhando no desenvolvimento de Landing
            Pages, PWAs, Wordpress, SFCC (Salesforce Commerce Cloud), sites
            corporativos, e-mails de marketing e Blogs. Durante esse período,
            utilizei metodologias ágeis, como Scrum e Kanban. No ano de 2021,
            comecei a trabalhar com <strong>Commerce Cloud</strong> e, em 2022,
            conquistei o cargo de Engenheiro de Software na{" "}
            <strong>Salesforce</strong> , em 2023 atuei em umas das maiores
            empresas do mundo <strong>IBM</strong>.
          </p>
        </div>
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
