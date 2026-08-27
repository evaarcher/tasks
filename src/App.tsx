import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <header className="new-header"> I am adding a new Header </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Eva Archer was here! Hello World
            </p>

            <img src="../src/DSC_0654.JPG" alt="A picture of my dog Tango!" />
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
    );
}

export default App;
