import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./APLInfo.css"
const APLInfo = props => {

    return <Container className="APLInfo">
        <Row>
            <Col>APL: {props.apl}<br/>
                Total Levels: {props.totalCharacterLevels}
            </Col>
            <Col>Max Experience: {props.xpmax} </Col>
            <Col>Min Experience: {props.xpmin} </Col>
            <Col>Max Gold Reward: {props.gold}</Col>
        </Row>
        <Row>
            <Col>Treasure Levels: {props.treasureLevels}</Col>
        </Row>
    </Container>
    
}

export default APLInfo;