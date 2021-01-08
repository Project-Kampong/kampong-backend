import http from 'http';
import { Server } from 'socket.io';
import { MessengerService } from './services/messenger.service';

export const initSocketIoServer = (httpServer: http.Server) => {
    const server = new Server(httpServer, {
        cors: {
            origin: process.env.CLIENT_DOMAIN,
            methods: ['GET', 'POST'],
        },
    });

    MessengerService.init(server);
};
