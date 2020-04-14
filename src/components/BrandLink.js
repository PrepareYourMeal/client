import React from 'react';
import { NavbarBrand } from 'reactstrap';
import logo from '@frontend/assets/img/logo.png';

export default function BrandLink() {
    return (
        <NavbarBrand href="/">
            <img src={logo} alt={'Stove & Oven'} height={32} />
        </NavbarBrand>
    );
}
