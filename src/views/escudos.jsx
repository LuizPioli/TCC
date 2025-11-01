import "./css/escudos.css";
import escudoUniaoFc from './imagenssantos/escudoUniaoFc.jpg';
import escudoFundoBranco from './imagenssantos/EscudoFundoBranco.png'; 
import escudoAtual from './imagenssantos/EscudoAtual.png'; 

const Escudos = () => {
  return (
    <main>
      <div className="Escudos">
        <section className="bloco">
          <h2>UNIÃO FC</h2>
          <div className="ImagemEscudo">
            <img src={escudoUniaoFc} alt="Escudo União FC" />
          </div>
          <p>
            Em 1915, o Santos FC adotou o pseudônimo de União FC, para poder disputar o Campeonato Santista. 
            Com a nova nomenclatura, surgiu um novo escudo, e o time santista utilizou provisoriamente um 
            escudo com as iniciais U.F.C., em um fundo preto.
          </p>
        </section>

        <section className="bloco">
          <h2>FUNDO BRANCO</h2>
          <div className="ImagemEscudo">
            <img src={escudoFundoBranco} alt="Escudo Fundo Branco" />
          </div>
          <p>
            No início da década de 40, mais precisamente em 1942, foi criado um novo escudo, 
            com as letras SFC entrelaçadas em um fundo branco. O escudo foi utilizado até 1944.
          </p>
        </section>

        <section className="bloco">
          <h2>ATUAL</h2>
          <div className="ImagemEscudo">
            <img src={escudoAtual} alt="Escudo Atual" />
          </div>
          <p>
            O escudo atual do Santos FC foi oficializado em 1944 e permanece até hoje, 
            sendo um dos mais icônicos do futebol mundial.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Escudos;
