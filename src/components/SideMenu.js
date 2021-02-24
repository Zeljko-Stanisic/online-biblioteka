import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss'

function SideMenu() {
    return (
        <>
            <div className='side-menu'>
                <ul className="nav-bar-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>

                            </li>
                        )
                    })}
                    < Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" className="drop">

                        </Dropdown.Toggle>

                        <Dropdown.Menu className="drop-menu">
                            <Dropdown.Item as={Link} to='/history' className="drop-item">Istorija</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/philosophy' className="drop-item">Filozofija</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/classics' className="drop-item">Klasici</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/poetry' className="drop-item">Poezija</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/psychology' className="drop-item">Psihologija</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
        </>
    )
}

export default SideMenu