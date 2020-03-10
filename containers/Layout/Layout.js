import React, {Fragment} from "react";
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import Header from '/components/Navbar';
import Footer from '/components/Footer';
import BottomBar from '/components/BottomBar';

const Layout = ({children}) => {
    return (
    <Fragment>
        <Header/> 
        {children}
        <Footer/>
        <BottomBar/>
    </Fragment>
    );
};

export default Layout;