'use strict';
/*global module,require,process*/


// const barcode = new Barcode();
// const postcode = new Postcode();

class Router {
    constructor(actions) {
        this.currentState = 'init';
        this.actions = actions;
    }

    handle(cmd,outputAndExit) {
        let action = this.actions.find(v => v.name === this.currentState);
        let nextState = action.doAction(cmd,outputAndExit);
        let newAction = this.actions.find(v => v.name === nextState);
        this.currentState = newAction.name;
    }

    start() {
        console.log(this.actions.find(v => v.name === this.currentState).help);
    }
}
module.exports = Router;
