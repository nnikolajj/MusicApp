import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import './index.css';
import {logDOM} from "@testing-library/react";

export default function Popular() {

    const [band, setBand] = useState([])
    let nothing = ""
    let loading = false

    let image = "url('https://www.wertgarantie.de/sites/default/files/styles/content_half_l/public/media-images/was-koennen-die-neuen-samsung-galaxy-a50s-und-galaxy-a30s-2.jpg?itok=tDJeKb2h')"


    useEffect(() => {
        fetch("https://api.srgssr.ch/mx3/v2/bands/popular",
            {
                "headers": {
                    "Authorization": "Bearer Hlsv0wzxdvZWgLusviU6SNW4PwZD",
                    "Accept": "application/json"
                }
            })
            .then(response => {
                response.json().then(json => {
                    console.log(json.response);
                    nothing = ""
                    setBand(json.response)

                })
            })

    }, [])

    if (band === undefined || band.length === 0) {
        return (
            <div class="mx-auto" style={{"text-align": "center"}}>
                <br/>
                <br/>
                <h1 style={{color:"white"}}>WIP</h1>
                <br/>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else if (band !== undefined) {
        return (

            <div style={{"text-align": "center", color:"white"}}>
                <br/>
                <br/>
                <h1>WIP</h1>
                <Container style={{"text-align": "center"}}>
                    <Row>

                        <div className="alert alert-warning" role="alert">
                            Here should be the Popularest Bands
                            <br/>
                            in a few Updates
                        </div>
                        {/*band.map((name,idx)=>
                            <Row key={idx}><img src={name.image} width="100px" length="auto">halo</img></Row>)*/}
                    </Row>
                    {band.image}
                </Container>
            </div>
        );
        return (
            <div>
                <h1>ERROR 401</h1>
            </div>
        )
    }
}