import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                    <h2>this is a new header!</h2>
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Eva Archer was here! Hello World
                </p>

                <img src="dog.JPG" alt="A picture of my dog Tango!" />
                <p> My dog is : </p>
                <ul>
                    <li>amazing</li>
                    <li>lazy</li>
                    <li>cute</li>
                    <li>lowkey evil</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            {" "}
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "100px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            {" "}
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "100px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
