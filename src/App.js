import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Col, Container, Form, Image, Row} from "react-bootstrap";
import BendById from "./BendById";
import {Link, Route, Switch, useHistory, useParams} from "react-router-dom";
import Popular from "./Popular";
import About from "./About";

function App() {

    const [search, setSearch] = useState('');
    const [word, setWords]= useState();

    let image = "url('https://www.wertgarantie.de/sites/default/files/styles/content_half_l/public/media-images/was-koennen-die-neuen-samsung-galaxy-a50s-und-galaxy-a30s-2.jpg?itok=tDJeKb2h')"

    function btHandler(){
        setWords(search)

    }

    function handler(e){
        let value=e.target.value;
        setSearch(value)
    }

    return (
        <div style={{"text-align": "center",   "background-color": "black"}}>
            <Container style={{"text-align": "center",   "background-color": "black", color:"white"}}>
                <Row style={{backgroundImage: image}}>
                    <Col>
                        <header>
                            <h2 style={{color: "white"}}>BBW  x BAND</h2>
                        </header>
                        <Row>

                            <ButtonGroup>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                            <Link to={'/band'}>
                                <Button style={{border: "#0D7979", background: "#121212"}}>Band Search</Button>
                            </Link>
                            <Link to={'/pop'}>
                                <Button style={{border: "#0D7979", background: "#121212"}}>Popular</Button>
                            </Link>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                            </ButtonGroup>
                            {/*<Col style={{"background-color":"black"}}> <Link color={"white"} to={"/band"}>Band Search</Link></Col>
                            <Col style={{"background-color":"black"}}><Link color={"white"} to={"/pop"}>Popular</Link></Col>*/}


                        </Row>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
            <Switch>
                <Route path="/pop" component={Popular}/>
                <Route path="/band" component={BendById}/>
                <Route path="/" component={About}/>
            </Switch>
        </div>
    );
}
export default App;
