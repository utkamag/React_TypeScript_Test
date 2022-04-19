import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Components/Card";

function App() {
    return (
        <div className="App">
            <Card onClick={() => console.log("123")} height="200px" width="200px">
                <div>123</div>
            </Card>
        </div>
    );
}

export default App;
