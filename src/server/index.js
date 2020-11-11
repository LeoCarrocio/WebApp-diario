import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import path from 'path';
import axios from 'axios'; 

import Main from '../client/container/Main';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/',async (rec,res)=>{
    const response = await axios('https://api-test-ln.herokuapp.com/articles');
    const articulos = response.data
    
    
    const root = (  
        <html lang="en">
            <head>
                <title>APP</title>
            </head>
            <body>
                <div id="root">
                    <Main articulos={articulos}/>
                </div>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__data__ = ${JSON.stringify(articulos)};`
                    }}
                /> 
                <script src="/static/bundle.js"></script> 
            </body>
        </html>
    )
    const html = ReactDom.renderToString(root);
    
    res.send(html);
});

app.listen(3000,()=> console.log('server started http://localhost:3000'));