import Card from 'react-bootstrap/Card';

function CardUser({el}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{el.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
          <Card.Text>
             {el.address.street}
          </Card.Text>          
        </Card.Body>
      </Card>
    )
}

export default CardUser