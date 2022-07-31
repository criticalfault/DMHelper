import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from '../UI/Card';
import React, { useState } from 'react';

const NewCharacterForm = (props) => {

    const [CharacterLevel,setCharacterLevel] = useState(3);
    const [CharacterName,setCharacterName] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddCharacter({'name':CharacterName,'level':CharacterLevel})
        setCharacterLevel(3);
        setCharacterName('');
    }

    const sliderChangeHandler = (event) =>{
        setCharacterLevel(event.target.value)
    }

    const CharacterNameHandler = (event) =>{
        setCharacterName(event.target.value);
    }

    return (
        <Card>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Character Name</Form.Label> 
                    <Form.Control type="text" placeholder="Character Name" value={CharacterName} onChange={CharacterNameHandler} />
                    <Form.Label>Character Level ({CharacterLevel})</Form.Label>
                    <Form.Range 
                        min='3'
                        max='16'
                        step='1'
                        value={CharacterLevel}
                        onChange={sliderChangeHandler}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Character
                </Button>
        </Form>
    </Card>
    )
};

export default NewCharacterForm;