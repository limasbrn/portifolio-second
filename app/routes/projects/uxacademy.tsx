import { Link } from "react-router-dom";
import GithubIcon from "../../icons/github-icon-white.svg";

export default function AnotherThree() {
    return (
      <div className="project_nested">
      <div className="container_video">
        <Link to={`/projects`}>
          <button>Voltar</button>
        </Link>
        Espaço para vídeo
      </div>

      <div className="container_texto">
        <h3>Ux Academy</h3>
        <ul className="tools_project">
          <li className="normal_subtext centralize">Html</li>
          <li className="normal_subtext centralize">Css</li>
          <li className="normal_subtext centralize">JavaScript</li>
        </ul>
        <p>
        A landing page está estruturada se atentando as características básicas de uma página de apresentação de um serviço ou produto.
        </p>
        <div className="botao_container">
          <a href="https://github.com/limasbrn/landing-page-ux-academy">
            <button className="btn_github_nested centralize normal_subtext">
              <img src={GithubIcon} />
              <span>Ver código no repositório</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    );
  }
 