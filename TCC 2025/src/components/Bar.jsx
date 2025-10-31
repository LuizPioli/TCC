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
                        <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to='/home' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    História
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to='/fundacao'>Fundação</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/pele'>Pelé</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/idolos'>Ídolos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/escudos'>Escudos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/hinooficial'>Hino Oficial</NavLink></li>
                                </ul>
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
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/titulos'>Titulos</NavLink>
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