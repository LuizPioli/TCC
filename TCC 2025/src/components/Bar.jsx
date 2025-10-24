import { Link, NavLink } from 'react-router-dom'

function Bar() {
    return (
        <>
            <a href=""></a>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/250px-Santos_Logo.png" width="30" height="30" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/historia'>História</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to='/home' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Elenco
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to='/timeprofissional'>Time Profissional</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/base'>Base</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/sereiasdavila'>Sereias da Vila</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to='/home' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Títulos
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to='/mundiais'>Mundiais</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/libertadores'>Libertadores</NavLink></li>                                   
                                    <li><NavLink className="dropdown-item" to='/copadobrasil'>Copa do Brasil</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/recopasulamericana'>Recopa Sul-Americana</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/campeonatosbrasileiros'>Campeonato Brasileiro</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/campeonatospaulistas'>Campeonato Paulista</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/copaintercontinentais'>Copa Intercontinentai</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneioriosaopaulo'>Torneio Rio-São Paulo</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/recopamundialinterclubes'>Recopa Mundial Interclubes</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/recopasulamericanainterclubes'>Recopa Sul-Americana Interclubes</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/trofeuterezaherrera'>Troféu Tereza Herrera</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodeparis'>Torneio de Paris</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/trofeutriangulardevalencia'>Troféu Triangular de Valência</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiopentagonaldomexico'>Torneio Pentagonal do México</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/tacadrmarioechandi'>Taça Dr. Mário Echandi</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/trofeugialloroso'>Troféu Gialloroso</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodacostarica'>Torneio da Costa Rica</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiopentagonaldeguadalajara'>Torneio Pentagonal de Guadalajara</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodaitalia'>Torneio da Itália</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiohexagonaldochile'>Torneio Hexagonal do Chile</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodecaracas'>Torneio de Caracas</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneioquadrangulardebuenosaires'>Torneio Quadrangular de Buenos Aires</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodenovayork'>Torneio de Nova York</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/triangularroma/florenca'>Triangular Roma/Florença</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiooctognaldochile'>Torneio Octogonal do Chile</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiopentagonaldebuenosaires'>Torneio Pentagonal de Buenos Aires</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/triangulardaguatemala'>TRiangular da Guatemala</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodekingston'>Torneio de Kingston</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiotriangularleon'>Torneio Triangular Léon</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiovencedoresdaamerica'>Torneio Vencedores da América</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiocidadedepamplona'>Torneio Cidade de Pamplona</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/copakirin'>Copa Kirin</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/torneiodeparis'>Torneio Cidade de Marseille</NavLink></li>
                                </ul>
                            </li>
                        <li className="nav-item">
                                <NavLink className="nav-link" to='/faleconosco'>Fale Conosco</NavLink>
                            </li>
                          </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Bar