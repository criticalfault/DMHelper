import styles from './Character.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from '../UI/Card'
function Character(props) {
  const deleteHandler = (event) =>{
    props.onDelete(props.characterName);
  }

    return (
      <Card>
        <Container className={styles.character}>
            <Row>
              <Col xs={5}>Name: {props.characterName}</Col>
              <Col xs={3}>Level: {props.level}</Col>
              <Col xs={2}>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
              </Col>
            </Row>
        </Container>
      </Card>
    );
  }
  
  export default Character;