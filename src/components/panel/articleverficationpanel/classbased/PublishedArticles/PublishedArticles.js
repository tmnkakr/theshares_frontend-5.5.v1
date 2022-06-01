import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function PublishedArticles(){
    return(
        <div>

            <div style={{width:"100%",height:"22px"}}></div>

            <div style={{width:"100%",height:"40px"}}>
                <center><h1>Published Articles</h1></center>
                <div style={{position:"absolute",right:"20px"}}>
                    <Button style={{ background: "Black" }}>HOME</Button>
                    <Button style={{ background: "Black" }}>HELP</Button>
                    <Button style={{ background: "Black" }}>LOGOUT</Button>
                </div>
            </div>

            <div style={{height:"120px"}}></div>

            <div style={{width:"70%",height:"65vh",background:"#f1d9d9"}}>
                <div style={{position:"relative",left:"70px",top:"50px"}}>

                <Button style={{background:"#3C4F7E"}}>Title 1</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Title2</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Title 3</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Title 4</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Title 5</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Title 6</Button>
                </div>

            </div>

        </div>
    )
}