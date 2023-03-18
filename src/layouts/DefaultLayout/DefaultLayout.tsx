import React from 'react';
import { children } from '../../types/ChildrenProp.type';
import { ContainerLayout, WrapperLayout } from './DefaultLayout.styled';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import Header from '../header/Header';

const DefaultLayout: React.FC<children> = ({ children }) => {
    return (
        <WrapperLayout>
            <Header />
            <ContainerLayout>
                <SideBar />
                {children}
            </ContainerLayout>
            <Footer />
        </WrapperLayout>
    );
};

export default DefaultLayout;
