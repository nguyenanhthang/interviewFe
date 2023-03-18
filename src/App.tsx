import React from 'react';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublishRouter } from './routes/router';
import { Navigate } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route index element={<Navigate to={'/listuser'} />} />
                    {PublishRouter.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
