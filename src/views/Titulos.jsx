import "./css/titulos.css";
import Lista from "../components/Lista";
import Lsta from "../components/Lsta";

function Titulos() {
  return (
    <main className="main-titulos">
      <section className="container-titulos">
        <h1 className="titulo-principal">TÍTULOS</h1>
        <Lista titulos={Lsta} />
      </section>
    </main>
  );
}

export default Titulos;
