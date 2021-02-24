import React, { useState, useEffect } from 'react';
import { Card} from 'react-bootstrap';
import PhilosophyService from '../../service/Philosophy.service';
import '../../sass/Card.scss';
import {Link} from 'react-router-dom'




const Philosophy = (props) => {
    const [Philosophy, setPhilosophy] = useState([]);


    useEffect(() => {
        PhilosophyService.List().then((res) => {
            if (document.URL.substring(21) === '/'){
                setPhilosophy(res.slice(0, 4));
            }else {
                setPhilosophy(res);
            }
        })
    }, [])

    return (
        <>
            <div className="heading">
                <h2>Filozofija</h2>
            </div>
            {Philosophy.map((item) => {
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



export default Philosophy
