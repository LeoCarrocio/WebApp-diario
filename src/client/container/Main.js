import React from 'react';
import styled from 'styled-components';

import {Header, Articles, Footer} from './index';


const Container = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template: 
        "header   header   header"  150px
        "main     main     main"    1fr
        "footer   footer   footer"  130px /
        200px     auto      200px;

    .header{
        grid-area: header;
        background-color:white;
        position: fixed;
        width: 100%;
        left: 0;
        top: 50;
    }
   .articles{
        grid-area: main;
        /* background-color: royalblue; */
        /* position: static; */
        /* position: fixed; */
        padding-top: 4rem;
        width: 100%;
    }
    .footer{
        grid-area: footer;
        background-color:rosybrown;
        margin-top: 2rem;
        /* position:relative; */
    }

`

const Main = (props) =>{

    console.log(props)
    
    return(
        <Container>
            <div className="header">
                <Header />
            </div>
            <div className="articles">
                <Articles />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}

export default Main;