import "./css/idolos.css"
import Cards from "../components/cards";
import CoutinhoImg from '../imagens/coutinho-santos.jpg';
import Elano from '../imagens/elano santos.jpg'
import Ganso from '../imagens/ganso santos.jpg'


function Idolos(){
    return(
    <main>
        <div className="idolos">
            <h1>ÍDOLOS</h1> <br />
            <Cards nome = "COUTINHO" img = {CoutinhoImg} nomeC ="Antônio Wilson Honório" posição ="Atacante" nascimento ="11/06/1943" jogos ="457" gols ="368" periodo ="1958 a 1967 e 1969 a 1970"/>
            <Cards nome = "ELANO" img = {Elano} nomeC ="Elano Ralph Blumer" posição ="Meio-campista" nascimento ="14/06/1981" jogos ="322" gols ="68" periodo ="2001 a 2005; 2011 a 2012 e 2015 a 2016"/>
            <Cards nome = "GANSO" img = {Ganso} nomeC ="Paulo Henrique Chagas de Lima" posição ="Meio-campista" nascimento ="12/10/1989" jogos ="162" gols ="36" periodo ="2011 e 2012"/>
        </div>
    </main>
    );
}

export default Idolos