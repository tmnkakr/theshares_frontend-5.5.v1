import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function SavedArticles(){
    return(
        <div>

            <div style={{width:"100%",height:"22px"}}></div>

            <div style={{width:"100%",height:"40px"}}>
                <center><h1>Saved Articles</h1></center>
                <div style={{position:"absolute",right:"20px"}}>
                    <Button style={{ background: "Black" }}>HOME</Button>
                    <Button style={{ background: "Black" }}>HELP</Button>
                    <Button style={{ background: "Black" }}>LOGOUT</Button>
                </div>
            </div>

            <div style={{height:"120px"}}></div>

            <div style={{width:"70%",height:"65vh",background:"#f1d9d9"}}>
                <div style={{position:"relative",left:"70px",top:"50px"}}>

                <Button style={{background:"#3C4F7E"}}>Article1</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Article2</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Article3</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Article4</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Article5</Button><div></div>
                <Button style={{background:"#3C4F7E",marginTop:"20px"}}>Article6</Button>
                </div>

            </div>

        </div>
    )
}