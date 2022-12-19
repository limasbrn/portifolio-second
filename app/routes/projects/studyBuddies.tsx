import { Link } from "react-router-dom";
import GithubIcon from "../../icons/github-icon-white.svg";

export default function AnotherTwo() {
    return (
      <div className="project_nested">
      <div className="container_video">
        <Link to={`/projects`}>
          <button>Voltar</button>
        </Link>
        Espaço para vídeo
      </div>

      <div className="container_texto">
        <h3>Study Buddies</h3>
        <ul className="tools_project">
          <li className="normal_subtext centralize">Html</li>
          <li className="normal_subtext centralize">Css</li>
          <li className="normal_subtext centralize">JavaScript</li>
        </ul>
        <p>
        Landing page de app fictício de organização acadêmica, seguindo estrutura básica para apresentação do produto.
        </p>
        <div className="botao_container">
          <a href="https://github.com/limasbrn/study-buddies-app">
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
 