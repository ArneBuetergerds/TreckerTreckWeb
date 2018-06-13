import React from 'react';
import ReactDOM from 'react-dom';
import InfoStore from '../stores/InfoStore';
import InfoAction from '../actions/InfoAction';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Input } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';
import moment from "moment";
moment.locale("de");
import './logIn.css';
@connectToStores
export default class LogIn extends React.Component {
    //Retrieves the store instance that was created.
    static getStores() {
        // this will handle the listening/unlistening for you
        return [InfoStore];
    }

    static getPropsFromStores() {
        // this is the data that gets passed down as props
        // each key in the object returned by this function is added to the `this.props`
        return {
            ...InfoStore.getState()
        };
    }
    constructor(){
        super();
        this.state = {
            eMail: null,
            password: null,
            fistName: null,
            LastName: null
        };
    }


    render() {
        console.log('login render',this.props);
        return (
            <div style={{textAlign: "center", display: "block"}}>
                <h1>Registrieren</h1>
                <div className="chaynsIdLogin">
                    <div style={{textAlign: "center", display: "inline-block"}}>
                        <Input className="loginInput" placeholder="Email" />
                        <Input className="loginInput" placeholder="Password" />
                        <Input className="loginInput" placeholder="Password wiederholen" />
                        <Input className="loginInput" placeholder="Vorname" />
                        <Input className="loginInput" placeholder="Nachname" />

                    </div>
                </div>
                <Button
                    className="loginButton"
                    disabled={false}
                    onClick={function(event) {
                        console.log(event);
                    }}
                >
                    Neu registrieren
                </Button>
            </div>
        );
    }
}