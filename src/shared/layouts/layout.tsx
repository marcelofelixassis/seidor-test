import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../../components/Header';
import './styles.css';

class Layout extends Component {
    render() {
        const { children } = this.props;

        return(
            <div>
                <Header />
                <Container className="body-container" maxWidth="md">
                    <div>
                        {children}
                    </div>
                </Container> 
            </div>
        )
    }
}


export default Layout;