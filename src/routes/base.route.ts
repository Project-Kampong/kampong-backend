import express from 'express';

export abstract class BaseRouter {
    constructor(protected readonly route: express.Router) {
        this.route = route;
    }

    get getRoute(): express.Router {
        return this.route;
    }
}
