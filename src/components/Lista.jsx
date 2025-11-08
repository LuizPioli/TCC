function Lista({ titulos }) {
  return (
    <ul className="lista-titulos">
      {titulos.map((titulo, index) => (
        <li key={index}>{titulo}</li>
      ))}
    </ul>
  );
}

export default Lista;
