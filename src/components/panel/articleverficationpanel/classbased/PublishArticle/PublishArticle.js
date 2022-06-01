import React from 'react';
import { Button } from 'react-bootstrap';

export default function PublishArticle(){
    return(
        <>
        <center>
            Are You Sure You want to save Article?
            <br />
            <Button>Publish</Button>
            <Button className='danger'>Discard</Button>
        </center>
        </>
    )
}