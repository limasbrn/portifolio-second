import { Link } from "react-router-dom";
import outcastStore from "../../images/Home_mini.jpg";
import studyBuddies from "../../images/studdy-buddies.jpg";
import uxAcademy from "../../images/ux-academy.jpg";
import githubIcon from "../../icons/github-icon.svg";

export default function Index() {
  return (
    <>
      <section className="section_projects">
        <div className="container centralize">
          <div className="projects centralize">
            <div className="container_projeto hover_item centralize">
              <Link to={`outcast`} reloadDocument={false}>
                <img src={outcastStore} />
                <div className="project_detail">
                  <span className="bolder_subtext">Outcast Store</span>
                  <ul className="tools_project">
                    <li className="normal_subtext centralize">React Js</li>
                    <li className="normal_subtext centralize">Tailwind</li>
                  </ul>
                </div>
              </Link>
            </div>
            <div className="container_projeto hover_item">
              <Link to={`./studyBuddies`}>
                <img src={studyBuddies} />
                <div className="project_detail">
                  <span className="bolder_subtext">Study Buddies</span>
                  <ul className="tools_project">
                    <li className=" normal_subtext centralize">Css</li>
                    <li className=" normal_subtext centralize">Html</li>
                    <li className=" normal_subtext centralize">Js</li>
                  </ul>
                </div>
              </Link>
            </div>
            <div className="container_projeto hover_item">
              <Link to={`./uxacademy`}>
                <img src={uxAcademy} />
                <div className="project_detail">
                  <span className="bolder_subtext">Ux Acadamy</span>
                  <ul className="tools_project">
                    <li className=" normal_subtext centralize">Css</li>
                    <li className=" normal_subtext centralize">Html</li>
                    <li className=" normal_subtext centralize">Js</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="botao_container">
        <a href="https://github.com/limasbrn">
          <button className="btn_github centralize">
            <img src={githubIcon} />
            <span className="bolder_subtext">Visite o repositório</span>
          </button>
        </a>
      </div>
    </>
  );
}
