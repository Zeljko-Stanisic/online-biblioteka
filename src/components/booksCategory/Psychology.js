import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PsychologyService from '../../service/Psychology.service';
import '../../sass/Card.scss';
import {Link} from 'react-router-dom'





const Psychology = (props) => {
    const [Psychology, setPsychology] = useState([]);


    useEffect(() => {
        PsychologyService.List().then((res) => {
            if (document.URL.substring(21) === '/'){
                setPsychology(res.slice(0, 4));
            }else {
                setPsychology(res);
            }
        })
    }, [])

    return (
        <>
            <div className="heading">
                <h2>Psihologija</h2>
            </div>
            {Psychology.map((item) => {
                return (
                    <Card style={{ width: '14rem' }} className="card">
                        <Link to={`/details/${item.id}`}><Card.Img variant="top" src={item.slika} className="card-img" /></Link>
                        <Card.Body>
                            <Card.Title className="card-text">{item.naslov}</Card.Title>
                            <Card.Text className="card-text" >
                                {item.autor}
                            </Card.Text>
                            <Card.Text className="card-text" >
                                {item.godina_izdavanja}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );

            })}

        </>
    )
};



export default Psychology
