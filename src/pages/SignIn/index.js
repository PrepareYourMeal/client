import React from 'react';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginInForm } from '@frontend/components';

export default function SignUpPage() {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container className="justify-content-center align-items-center d-flex">
            <LoginInForm />
        </Container>
    );
}
