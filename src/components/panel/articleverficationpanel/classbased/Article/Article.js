import React from 'react'

export default function Article() {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId: 1 })
    };
    fetch('http://13.126.147.73:4000/app/getArticle/getVerifiedOne', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

    return(
        <div>

        <div style={{width:"100%",height:"22px"}}></div>

        <div style={{width:"100%",height:"40px"}}>
            <center><h1>Published Articles</h1></center>
            <div style={{position:"absolute",right:"20px"}}>
               
            </div>
        </div>

        <div style={{height:"120px"}}></div>

        <div style={{width:"70%",height:"65vh",background:"#f1d9d9"}}>
            <div style={{position:"relative",left:"70px",top:"50px"}}>

            a



            </div>

        </div>

    </div>
    )
}