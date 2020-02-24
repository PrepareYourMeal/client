import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

export default function LogInForm({ modalOpen, toggleModal }) {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const handleSubmit = e => {
        e.preventDefault();
        // a dummy function that reflect the input user gives to the form
        console.log(formData);
        setFormData({ username: '', password: '' });
        toggleModal();
    };

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Sign In</ModalHeader>
            <ModalBody>
                <Form onSubmit={e => handleSubmit(e)}>
                    <FormGroup>
                        <Label for="username">User Name</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        />
                    </FormGroup>
                    <Button type="submit">Sign In</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}
LogInForm.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
};
