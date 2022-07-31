import styles from './Character.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../UI/Card'
function Character(props) {
    return (
      <Card>
        <Container className={styles.character}>
            <Row>
              <Col xs={5}>Name: {props.characterName}</Col>
              <Col xs={3}>Level: {props.level}</Col>
              <Col xs={2}>
                <button>Delete</button>
              </Col>
            </Row>
        </Container>
      </Card>
    );
  }
  
  export default Character;