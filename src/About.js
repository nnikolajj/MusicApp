import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";


export default function About() {

    let image = "url('https://www.wertgarantie.de/sites/default/files/styles/content_half_l/public/media-images/was-koennen-die-neuen-samsung-galaxy-a50s-und-galaxy-a30s-2.jpg?itok=tDJeKb2h')"

    return (
        <div style={{"text-align": "center",   "background-color": "black"}}>
            <Container style={{"text-align": "center",   "background-color": "black", color:"white"}}>
                <br/>
                <br/>
                Hello
                <br/>
                My Name is Nikolaj
                <br/>
                The App is called BBW x BAND. Its a application where you can find nice bands
                <br/>
                I made this app with the API of <a href={"https://developer.srgssr.ch/"} style={{color:"white"}}>SrgSsr</a>
            </Container>
        </div>
    );
}

