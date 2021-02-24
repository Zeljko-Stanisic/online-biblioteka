import React, { useState, useEffect } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import ClassicsService from '../../service/Classics.service';
import '../../sass/Card.scss';
import {Link} from 'react-router-dom'




const Classics = (props) => {
    const [loader, setLoader] = useState(true);
    const [Classics, setClassics] = useState([]);
    

//         useEffect(() => {
//             if(category != props.category || !props.category){
//                 ClassicsService.List().then((res) => {
//                     if (document.URL.substring(21) === '/' || document.URL.substring(21) === '/categories' ){
//                         if(props.category == '' || !props.category){
//                             setClassics(Classics.slice(0, 4));    
//                         }
//                         else{
//                             setClassics(Classics.filter(kategorija => kategorija === props.category ));
//                         }
//                     }
//                     else{
//                         setClassics(res);
//                     }
//                     // setLoader(false);
//                 })
//                 category = props.category;
//             }
//         }, []);

    useEffect(() => {
        ClassicsService.List().then((res) => {
            if (document.URL.substring(21) === '/'){
                setClassics(res.slice(0, 4));
            }else {
                setClassics(res);
            }
            
            setLoader(false);
        })
    }, [])

    if (loader) {
        return (
            <div className="center">
                <Spinner animation="border" className="spinner" />
            </div>
        );
    }
    return (
        <>
            <div className="heading">
                <h2>Klasici</h2>
            </div>
            {Classics.map((item) => {
                console.log(item);
                return (
                    <Card style={{ width: '14rem'}} className="card" key={item.id}>
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



export default Classics
