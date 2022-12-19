import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function IndexPageProject() {
  return (
    <>
      <section className="section_projects centralize">
        <div className="container">
          <Link to={`/`}>Home</Link>
          <h2>Projetos</h2>
          <p>Confira meus projetos!</p>
          <Outlet />
        </div>
      </section>
    </>
  );
}
