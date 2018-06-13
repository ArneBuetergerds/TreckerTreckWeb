import alt from '../alt';
import {createStore} from 'alt-utils/lib/decorators';

import InfoAction from '../actions/InfoAction';

import Fetch from '../constants/fetch';

@createStore(alt)
export default class UserStore {
    //This is a reference to the store’s internal name. This is either the identifier you provided to createStore or StoreModel’s class name.
    static displayName = 'InfoStore';

    constructor(){
        //This method takes in an action’s symbol and a store’s method defined in your StoreModel class. The store’s method is then bound to that action so whenever the action dispatches a payload, the specified handler will receive it.
        this.bindActions({
            fetchPosts: InfoAction.fetchPosts
        });
        //This defines the state, that can be updated by actions and then get to the Components props, when it changes.
        this.state = {
            user: null,
            driver: []
        };

        this.fetch = new Fetch();
    }

    fetchPosts(){

    }
}