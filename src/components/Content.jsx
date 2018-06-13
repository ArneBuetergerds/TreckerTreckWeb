import React from 'react';
import ReactDOM from 'react-dom';
import InfoStore from '../stores/InfoStore';
import InfoAction from '../actions/InfoAction';
import connectToStores from 'alt-utils/lib/connectToStores';
import LogIn from './LogIn';
import moment from "moment";
moment.locale("de");
import './content.css';
@connectToStores
export default class Content extends React.Component {
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
            slideIndex: 10
        };
    }


    render() {
        console.log('render',this.props);
        return (
            <div>
               <LogIn/>
            </div>
        );
    }
}