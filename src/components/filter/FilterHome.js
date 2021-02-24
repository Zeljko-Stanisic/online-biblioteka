// import React, { useState, useEffect } from 'react';
// import { Form, Row } from 'react-bootstrap';
// import FilterData from '../../service/Filter.service';
// import '../../sass/Filter.scss';

// function FilterHome(props) {
//     const [FilterCategory, setFilterCategory] = useState([]);
//     const [FilterAutor, setFilterAutor] = useState([]);
//     const [FilterTitle, setFilterTitle] = useState([]);


//     useEffect(() => {
//         FilterData.List().then((res) => {
//             let kategorije = new Array();
//             for (let i = 0; i < res.length; i++) {
//                 if (!kategorije.includes(res[i].kategorija)) {
//                     kategorije.push(res[i].kategorija);
//                 }

//             }
//             setFilterCategory(kategorije);
//             let autori = new Array();
//             for (let i = 0; i < res.length; i++) {
//                 if (!autori.includes(res[i].autor)) {
//                     autori.push(res[i].autor);
//                 }

//             }
//             setFilterAutor(autori);
//             let naslovi = new Array();
//             for (let i = 0; i < res.length; i++) {
//                 if (!naslovi.includes(res[i].naslov)) {
//                     naslovi.push(res[i].naslov);
//                 }

//             }
//             setFilterTitle(naslovi);
//         })
//     }, [])
//     const [FilterDb, setFilterDb] = useState('');

//     const handleSelect = (event) => {
//         let data = event.target.value;
        

//         props.onSelectData(data);
//         setFilterDb(event.target.value);
//     };

//     return (
//         <>
//             <Row className="row">
//                 <Form lg={4}>
//                     <Form.Group controlId="exampleForm.SelectCustom" className="form-group">
//                         <Form.Label className="title">Filtriraj po kategoriji</Form.Label>
//                         <Form.Control as="select" custom className="control" value={FilterDb} onChange={handleSelect}>
//                             <option value="">Odaberite kategoriju</option>
//                             {FilterCategory.map((item) => {
//                                 return (
//                                     <option value={item}>{item}</option>
//                                 )
//                             })}
//                         </Form.Control>
//                     </Form.Group>
//                 </Form>
//                 <Form lg={4}>
//                     <Form.Group controlId="exampleForm.SelectCustom">
//                         <Form.Label className="title">Filtriraj po autoru</Form.Label>
//                         <Form.Control as="select" custom className="control" value={FilterDb} onChange={handleSelect}>
//                             <option value="">Odaberite autora</option>
//                             {FilterAutor.map((item) => {
//                                 return (
//                                     <option value={item}>{item}</option>
//                                 )
//                             })}
//                         </Form.Control>
//                     </Form.Group>
//                 </Form>
//                 <Form lg={4}>
//                     <Form.Group controlId="exampleForm.SelectCustom">
//                         <Form.Label className="title">Filtriraj po naslovu</Form.Label>
//                         <Form.Control as="select" custom className="control" value={FilterDb} onChange={handleSelect}>
//                             <option value="">Odaberite naslov</option>
//                             {FilterTitle.map((item) => {
//                                 return (
//                                     <option value={item}>{item}</option>
//                                 )
//                             })}
//                         </Form.Control>
//                     </Form.Group>
//                 </Form>
//             </Row>

//         </>
//     )
// }

// export default FilterHome
