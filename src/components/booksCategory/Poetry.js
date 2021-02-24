import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PoetryService from '../../service/Poetry.service';
import '../../sass/Card.scss';
import {Link} from 'react-router-dom'





const Poetry = (props) => {
    const [Poetry, setPoetry] = useState([]);


    useEffect(() => {
        PoetryService.List().then((res) => {
            if (document.URL.substring(21) === '/'){
                setPoetry(res.slice(0, 4));
            }else {
                setPoetry(res);
            }
        })
    }, [])

    return (
        <>
            <div className="heading">
                <h2>Poezija</h2>
            </div>
            {Poetry.map((item) => {
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



export default Poetry