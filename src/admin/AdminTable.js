// import React, { useState, useEffect } from 'react'
// import { Table, Button, Modal, Form } from 'react-bootstrap';
// import AdminService from '../service/Admin.service'
// import { AiFillDelete } from 'react-icons/ai';
// import { CgDetailsMore } from 'react-icons/cg'
// import { IoIosCreate } from 'react-icons/io'
// import '../sass/Info.scss';
// import axios from 'axios';
// import swal from 'sweetalert';
// import "../sass/FilterAdmin.scss"
// function AdminTable() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [admin, setAdmin] = useState([]);


//     useEffect(() => {
//         AdminService.List().then((res) => {
//             setAdmin(res);
//         }, []);
//     });
    


//     const removeData = (id) => {
//         axios.delete('http://localhost:3001/books/' + id).then(res => {
//             swal({
//                 title: "Brisanje",
//                 text: "Da li zelite da izbrisete knigu",
//                 icon: "warning",
//                 buttons: ["Ne", "Da"]
//             }).then(req => {
//                 if (req) {
//                     swal({
//                         text: "Uspjesno ste izbrisali knjigu",
//                         icon: "success"
//                     })
//                 }
//             })
//             const del = admin.filter(books => id !== books.id)
//             setAdmin(del)
//         }).catch(() => { console.log('Brisanje neuspjesno') })
//     }

//     // const createBook = () => {
//     //     axios.post ('http://localhost:3001/books/', data).then( res => {

//     //     });
//     // }




//     return (
//         <>
//             <div className="create">
//                 <Button variant="primary" type="submit" onClick={handleShow} className="btn">Dodaj knjigu <IoIosCreate /></Button>
//                 <div className="search">
//                     <div class="col-5 form-group ml-5 .input-mar d-flex ">
//                         <input type="search" placeholder="Pretraga" className=" form-control input"></input>
//                     </div>
//                 </div>
//                 <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
//                     <Modal.Header closeButton>
//                         <Modal.Title>Dodaj knjigu</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form>
//                             <Form.Group>
//                                 <Form.Label>Naslov</Form.Label>
//                                 <Form.Control type="text" placeholder="Naslov" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Autor</Form.Label>
//                                 <Form.Control type="text" placeholder="Autor" />
//                             </Form.Group><Form.Group>
//                                 <Form.Label>Godina izdavanja</Form.Label>
//                                 <Form.Control type="number" placeholder="Godina izdavanja" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Broj strana</Form.Label>
//                                 <Form.Control type="number" placeholder="Broj strana" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Sifra knjige</Form.Label>
//                                 <Form.Control type="number" placeholder="Sifra knjige" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Opis knjige</Form.Label>
//                                 <Form.Control type="text" placeholder="Opis knjige" />
//                             </Form.Group>
//                             <Button variant="primary" type="submit">
//                                 Dodaj citat
//                             </Button>
//                             <Form.Group>
//                                 <Form.File id="exampleFormControlFile1" label="Example file input" />
//                             </Form.Group>
//                         </Form>

//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Zatvori

//                         </Button>
//                         <Button variant="primary" >
//                             Dodaj
//                 </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>


//             <Table responsive="sm">
//                 <thead>
//                     <tr>
//                         <th>Sifra knjige</th>
//                         <th>Naslov</th>
//                         <th>Autor</th>
//                         <th>Izdavac</th>
//                         <th>Godina izdavanja</th>
//                         <th>Datum zadnje izmjene</th>
//                         <th>Brisanje</th>
//                         <th>Detalji</th>


//                     </tr>
//                 </thead>
//                 <tbody>
//                     {admin.map((item) => {
//                         return (
//                             <tr>
//                                 <td>{item.sifra_knjige}</td>
//                                 <td>{item.naslov}</td>
//                                 <td>{item.autor}</td>
//                                 <td>{item.izdavac}</td>
//                                 <td>{item.godina_izdavanja}</td>
//                                 <td></td>
//                                 <td><Button variant="outline-danger" onClick={() => removeData(item.id)}><AiFillDelete /></Button></td>
//                                 <td><Button variant="outline-primary"><CgDetailsMore /></Button></td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </Table>

//         </>
//     )
// };
// export default AdminTable 
