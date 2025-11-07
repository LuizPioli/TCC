import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../views/css/Card.css'

export default function Cards(Prop) {
  return (
    <Card className="dark-card" style={{ width: '800px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {/* Texto à esquerda */}
      <Card.Body style={{ flex: 1 }}>
        <Card.Title>{Prop.nome}</Card.Title>
        <Card.Text className = "card-text-black">
          Nome:  {Prop.nomeC}<br />
          Posição: {Prop.posição}<br />
          Nascimento: {Prop.nascimento}<br />
          Jogos: {Prop.jogos}<br />
          Gols: {Prop.gols}<br />
          Período que atuou no Santos: {Prop.periodo}
        </Card.Text >
      </Card.Body>

      {/* Imagem à direita */}
      <Card.Img 
        src={Prop.img} 
        style={{ width: '250px', height: '250px', objectFit: 'cover', marginRight: '20px' }} 
      />
    </Card>
  );
}   
