import "./css/idolos.css"
import Cards from "../components/cards";
import CoutinhoImg from '../imagens/coutinho-santos.jpg';
import Elano from '../imagens/elano-santos.jpg';
import Ganso from '../imagens/ganso-santos.jpg';
import Neymar from '../imagens/neymar-santos.jpg';
import Pele from '../imagens/pele santos.jpg';
import Pepe from '../imagens/pepe-santos.jpg';
import Pita from '../imagens/pita santos.jpg'
import Robinho from '../imagens/robinho-santos.jpg';
import Serginho from '../imagens/serginho-santos.jpg';


function Idolos(){
    return(
    <main>
        <div className="idolos">
            <h1>ÍDOLOS</h1> <br />
            <Cards nome = "COUTINHO" img = {CoutinhoImg} nomeC ="Antônio Wilson Honório" posição ="Atacante" nascimento ="11/06/1943" jogos ="457" gols ="368" periodo ="1958 a 1967 e 1969 a 1970"/><br/>
            <Cards nome = "ELANO" img = {Elano} nomeC ="Elano Ralph Blumer" posição ="Meio-campista" nascimento ="14/06/1981" jogos ="322" gols ="68" periodo ="2001 a 2005; 2011 a 2012 e 2015 a 2016"/><br/>
            <Cards nome = "GANSO" img = {Ganso} nomeC ="Paulo Henrique Chagas de Lima" posição ="Meio-campista" nascimento ="12/10/1989" jogos ="162" gols ="36" periodo ="2011 e 2012"/><br/>
            <Cards nome = "NEYMAR" img = {Neymar} nomeC ="Neymar da Silva Santos Junior" posição ="Meio-campista" nascimento ="05/02/1992" jogos ="225" gols ="145" periodo ="2011 e 2012 e 2013; 2025"/><br/>
            <Cards nome = "PELÉ" img = {Pele} nomeC ="Edson Arantes do Nascimento" posição ="Atacante" nascimento ="23/10/1940" jogos ="1.116" gols ="1.091" periodo ="1956 a 1974"/><br/>
            <Cards nome = "PEPE" img = {Pepe} nomeC ="José Macia" posição ="Atacante" nascimento ="25/02/1935" jogos ="741" gols =" 403" periodo ="1954 a 1969"/><br/>
            <Cards nome = "PITA" img = {Pita} nomeC ="Edvaldo de Oliveira Chaves" posição ="Meio-Campista" nascimento ="04/08/1958" jogos ="412" gols ="55" periodo ="1976 a 1940"/><br/>
            <Cards nome = "ROBINHO" img = {Robinho} nomeC ="Robson de Souza" posição ="Atacante" nascimento =" 25/01/1984" jogos =" 253" gols ="111" periodo ="de 2002-2005, 2010, 2014-2015"/><br/>
            <Cards nome = "SERGINHO CHULAPA" img = {Serginho} nomeC ="Sérgio Bernadino" posição ="Atacante" nascimento ="23/12/1953" jogos ="201" gols ="104" periodo =" 1983 a 1984, 1986 e 1988 a 1990"/>

        </div>
    </main>
    );
}

export default Idolos