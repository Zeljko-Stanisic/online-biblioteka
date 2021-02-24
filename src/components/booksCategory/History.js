import React, { useState, useEffect } from 'react';
import { Card} from 'react-bootstrap';
import HistoryService from '../../service/History.service';
import '../../sass/Card.scss';
import {Link} from 'react-router-dom'




const History = (props) => {
    const [History, setHistory] = useState([]);


    useEffect(() => {
        HistoryService.List().then((res) => {
            if (document.URL.substring(21) === '/'){
                if(props.category != ''){
                    setHistory(res.slice(0, 4).filter(kategorija => kategorija === props.category ));
                }
                setHistory(res.slice(0, 4));
            }else {
                setHistory(res);
            }
        })
    }, [])

    return (
        <>
            <div className="heading">
                <h2>Istorija</h2>
            </div>
            {History.map((item) => {
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



export default History
