import { Link } from "react-router-dom";
import GithubIcon from "../../icons/github-icon-white.svg";

export default function Another() {
  return (
    <div className="project_nested">
      <div className="container_video">
        <Link to={`/projects`}>
          <button>Voltar</button>
        </Link>
        Espaço para vídeo
      </div>

      <div className="container_texto">
        <h3>Outcast</h3>
        <ul className="tools_project">
          <li className="normal_subtext centralize">React Js</li>
          <li className="normal_subtext centralize">Tailwind</li>
        </ul>
        <p>
          E-commerce desenvolvido em React Js e estilizado em Tailwind. A
          aplicação contempla múltiplos devices observando os requisitos de
          responsividade. Possui múltiplas páginas contendo modais e animações
          que agregam a user experience. A aplicação foi desenvolvida visando
          realizar a prática da construção de uma SPA que seja constituída por
          componentes reutilizáveis.
        </p>
        <div className="botao_container">
          <a href="https://github.com/limasbrn/outcast-ecommerce">
            <button className="btn_github_nested centralize">
              <img src={GithubIcon} />
              <span>Ver código no repositório</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
