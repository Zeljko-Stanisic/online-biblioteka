import React from 'react';
import '../sass/Info.scss';
import { Card, ListGroup } from 'react-bootstrap';
import ZeljkoImg from '../img/ZeljkoImg.jpg';
import { BiUser } from 'react-icons/bi';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';

function Info() {
    return (
        <>
            <div className='info'>
                <Card className="card">
                    <Card.Img variant="top" src={ZeljkoImg} />
                    <Card.Body>
                        <Card.Title>
                            <BiUser className="icon" />
                            Zeljko Stanišić
                    </Card.Title>
                        <a href="">>>> Odgovori</a>
                    </Card.Body>
                </Card>
                <Card className="card-sec">
                    <Card.Header>Informacije</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="list">
                            <BiUser className="icon" />
                            Zeljko Stanišić
                        </ListGroup.Item>
                        <ListGroup.Item className="list">
                            <FaBirthdayCake  className="icon"/>
                            06.03.1998
                        </ListGroup.Item>
                        <ListGroup.Item className="list">
                            <IoBookSharp className="icon" />
                            Fakultet za informacione tehnologije "Univerzitet Mediteran"
                        </ListGroup.Item>
                        <ListGroup.Item className="list">
                            "Tamo gdje je sve tamo je ništa, tamo gdje je ništa tamo je sve."
                            "Život je kao olovka, svaki dan je sve kraći.Potrudite se da nešto lijepo nacrtate dok ga još ima..."
                            "Jadan je onaj koji mora nekoga poniziti da bi sebe uzdigao."
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>

        </>
    )
}

export default Info
