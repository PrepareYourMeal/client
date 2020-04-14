import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { logoutUser } from '@frontend/redux/actions';

export default function UserWidget() {
    const dispatch = useDispatch();
    const { googleUser, localUser } = useSelector(state => state.user);
    const user = googleUser || localUser;
    console.log(user);

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret>LogedIn User</DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    <Link to="/dashboard">Dashboard</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => dispatch(logoutUser())}>Loged Out</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
