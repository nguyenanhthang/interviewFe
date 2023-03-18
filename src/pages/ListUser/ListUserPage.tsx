import React from 'react';
import { DrawerHeader } from '../../layouts/Sidebar/SideBar.styled';
import { Main } from './ListUserPage.styled';
import { useAppSelector } from '../../app/hooks';
import UserList from './Components/UserList';

const ListUser = () => {
    const open = useAppSelector((state) => state.user.open);
    const currentURL = window.location.pathname;
    console.log(currentURL);
    return (
        <Main open={open}>
            <DrawerHeader />
            <UserList />
        </Main>
    );
};

export default ListUser;
