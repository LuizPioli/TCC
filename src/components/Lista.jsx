function Lista(dados) {
    return (
        <ul>
            {dados.titulos.map(
                (titulo) => <li>{titulo}</li>
            )}
        </ul>

    )
}

export default Lista