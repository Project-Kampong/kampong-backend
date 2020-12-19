import express from 'express';

export abstract class BaseRouter {
    constructor(protected readonly route: express.Router) {}

    get getRoute(): express.Router {
        return this.route;
    }
}
