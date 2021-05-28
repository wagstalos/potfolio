import React from 'react';
import './style.css';
import imageAvatar from '../../img/avatar.png';

function Bio() {
	return (
		<div className="container">
			<div className="flex-container">
				<div className="mr-50">
					<img className="img-bio" src={imageAvatar} alt='Imagem do autor' />
					<h5>Redes socias</h5>

					<a href="https://github.com/wagstalos" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="34" height="34" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
					</svg></a>

					<a href="https://www.linkedin.com/in/wagner-silva-6a163555/" >
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="34" height="34" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<rect x="4" y="4" width="16" height="16" rx="2" />
							<line x1="8" y1="11" x2="8" y2="16" />
							<line x1="8" y1="8" x2="8" y2="8.01" />
							<line x1="12" y1="16" x2="12" y2="11" />
							<path d="M16 16v-3a2 2 0 0 0 -4 0" />
						</svg>
					</a>

					<a href="https://www.instagram.com/wagner.paulo89/" >
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="34" height="34" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<rect x="4" y="4" width="16" height="16" rx="4" />
							<circle cx="12" cy="12" r="3" />
							<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
						</svg>
					</a>

				</div>

				<div>

					<svg xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<polyline points="7 8 3 12 7 16" />
						<polyline points="17 8 21 12 17 16" />
						<line x1="14" y1="4" x2="10" y2="20" />
					</svg>
					<h4 className="destaque">Quem sou</h4>

					<h1>Wagner Paulo</h1>
					<p>Olá, sou Wagner Paulo, profissional da área Desenvolvimento Web e Games,
					formado em Design Gráfico (UNIP) e Desenvolvimento Jogos Digitais(ETEC).
					Apaixonado por tecnologias, trabalho com produção de sites, aplicativos, PWA e jogos digitais com foco para o ensino EaD.

					</p>

					<h5>Skills</h5>
					<div className="flex flex-between flex-wrap">

						<div>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon-bg icon icon-tabler icon-tabler-brand-html5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
								<path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon-bg icon icon-tabler icon-tabler-brand-css3" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
								<path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" class=" icon-bg icon icon-tabler icon-tabler-brand-javascript" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#08b9bb" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
								<path d="M7.5 8h3v8l-2 -1" />
								<path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
							</svg>
						</div>
						<div>

							<a className="btn-download" href="curriculo_wagner.pdf" download="curriculo_wagner.pdf">Download CV </a>
						</div>
					</div>

				</div>

			</div>
			<div className="flex-container flex-wrap m-50 ">
				<div className="mr-10">
					<img className="img-stats" src="https://camo.githubusercontent.com/7d732602e028285e90f6e7511544777bbbbd7db5e553b764b71e3e8a90650f16/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7761677374616c6f73" alt="Anurag's GitHub stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=wagstalos" />
				</div>

				<div>

					<img className="img-stats" src="https://camo.githubusercontent.com/bd3e5aa786d946cd66a1ecfbfc4c4f4abb730d83dc8e1f09433422523115b22d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7761677374616c6f73266c61796f75743d636f6d70616374" alt="Top Langs" data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=wagstalos&amp;layout=compact" />
				</div>


			</div>
		</div>
	)
}

export default Bio;