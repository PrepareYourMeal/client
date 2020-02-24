import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse, Navbar, Nav, NavbarToggler } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { DashBoard, Recipes, Planner, Ingredients } from '@frontend/components/Icons';
import BrandLink from '../BrandLink';
import LogInForm from '../LogInForm/LogInForm';
import './NavBar.scss';

const NavTab = ({ to, icon: Icon, text }) => {
    const { pathname } = useLocation();
    const isActive = pathname.startsWith(to);

    return (
        <Link
            to={to}
            className={`mx-md-3 d-flex flex-row flex-md-column justify-content-md-center align-items-center navtab ${isActive && 'active'}`}
        >
            <Icon />
            <p className="ml-2 ml-md-0 my-0 my-md-1 text-center">{text}</p>
        </Link>
    );
};
NavTab.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType]).isRequired,
    text: PropTypes.string.isRequired,
};

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [logInFormOpen, setLogInFormOpen] = useState(false);

    return (
        <>
            <Navbar className="justify-content-md-between" expand="md" tag="header" color="primary" dark>
                <BrandLink />
                <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
                <Button size="lg" onClick={() => setLogInFormOpen(!logInFormOpen)}>
                    Sign In
                </Button>
            </Navbar>
            <Navbar className="pt-0 pt-md-2" expand="md" color="light">
                <Collapse className="my-md-2 justify-content-md-center" isOpen={navOpen} navbar>
                    <Nav tag="nav" navbar>
                        <NavTab to="/dashboard" icon={DashBoard} text="Dashboard" />
                        <NavTab to="/recipes" icon={Recipes} text="Recipes" />
                        <NavTab to="/planner" icon={Planner} text="Planner" />
                        <NavTab to="/ingredients" icon={Ingredients} text="Ingredients" />
                    </Nav>
                </Collapse>
            </Navbar>
            <LogInForm modalOpen={logInFormOpen} toggleModal={() => setLogInFormOpen(!logInFormOpen)} />
        </>
    );
}