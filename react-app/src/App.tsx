import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Components/Card";
import UserList from "./Components/UserList";
import {IUser} from "./types/types";
import Events from "./Components/Events";

function App() {

    const users: IUser[] = [
        {id: 1, name: "Egor", email: "asd123@gmail.com", address: {city: "Tokio", street: "Kirova", zipcode: "123423"}},
        {id: 2, name: "Oleg", email: "asd123123@gmail.com", address: {city: "Moscow", street: "Lenina", zipcode: "312423"}}
    ]

    return (
        <div className="App">
            <Card onClick={() => console.log("123")} height="200px" width="200px">
                <div>123</div>
            </Card>
            <UserList users={users}/>
            <Events/>
        </div>
    );
}

export default App;
