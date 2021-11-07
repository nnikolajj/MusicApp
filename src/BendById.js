import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import './index.css';
import {logDOM} from "@testing-library/react";

export default function BendById() {

    const [band, setBand] = useState({})
    let nothing=""
    let loading=true
    const [search, setSearch] = useState('1');
    const [words, setWords]= useState();
    let bandId=words
    let bandUndefined = false
    let noBand = true

    let image = "url('https://www.wertgarantie.de/sites/default/files/styles/content_half_l/public/media-images/was-koennen-die-neuen-samsung-galaxy-a50s-und-galaxy-a30s-2.jpg?itok=tDJeKb2h')"

   if (bandId===undefined){
        bandId=1
        nothing="Start Search"
    }

    useEffect(() => {
        fetch("https://api.srgssr.ch/mx3/v2/bands/" + bandId,
            {
                "headers": {
                    "Authorization": "Bearer pMpLKQuLOf24YejSXU2LMm1hzHGA",
                    "Accept": "application/json"
                }
            })
            .then(response => {
                response.json().then(json => {
                    console.log(json.response.band);
                    nothing=""
                    setBand(json.response.band)
                })
            })
    }, [bandId])


    function btHandler(){
        noBand=false
        setWords(search)

    }
    function handler(e){
        let value=e.target.value;
        if (value===""|| value===undefined){
            setSearch(1)
        }
        else {
            setSearch(value)
        }
        {console.log(value)}
    }
    if(bandUndefined){
        return (
            <div>
                {nothing}
            </div>
        )
    }
   else if (band !== 0&& !bandUndefined) {
        return (
            <div style={{"text-align": "center"}}>
                {console.log(band)}

                <Container style={{"text-align": "center"}}>
                    <Row>
                    <Form>
                        <Form.Control type="text" value={search} style={{"text-align": "center","background-color": "black", "border-color":"#4f4f4f", color: "white"}} placeholder="Enter Id" onChange={e => handler(e)}/>
                        <Button onClick={btHandler} style={{"border-color": "#340f59", backgroundImage: "url('https://www.wertgarantie.de/sites/default/files/styles/content_half_l/public/media-images/was-koennen-die-neuen-samsung-galaxy-a50s-und-galaxy-a30s-2.jpg?itok=tDJeKb2h')"}}> <text style={{"border-color":"black"}}>Search</text></Button>
                        <br/>
                        <br/>
                    </Form>
                </Row>
                    <Row>

                        <Col></Col>
                        <Card style={{"text-align": "center", width: '25rem', "background-color": "#1c1c1c"}}>
                            <Card.Img variant="roundedCircle" src={band.image} alt={(band.name+" image")} style={{"color":"white"}}/>
                            <Card.Body>
                                <Card.Title style={{backgroundImage: image, color: "white"}}>{(band.name)}</Card.Title>
                                <Card.Text style={{color:"white"}}>
                                    <br/>
                                    {(band.biographies !== undefined) && band.biographies.biography !== undefined && band.biographies.biography[band.biographies.biography.length - 1] !== undefined ? (band.biographies.biography[band.biographies.biography.length - 1].description) : ("No biography available")}
                                </Card.Text>
                                {
                                    (bandId!== " ")? (<Button variant="primary" style={{backgroundImage: image, "border-color": "#340f59", "text-weight": "900"}} href={band.permalink}>Go To Band</Button>) : ("")

                                } </Card.Body>
                        </Card>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    } else if (loading) {
        return (
            <div class="mx-auto" style={{"text-align": "center"}}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}