import alt from '../alt';
import {createActions} from 'alt-utils/lib/decorators';

@createActions(alt)
export default class InfoAction {
    constructor() {
        //generates an action for each function in the store
        this.generateActions(
            'fetchTraffic',
            'fetchPosts',
            'getMeta'
        );
    }
}