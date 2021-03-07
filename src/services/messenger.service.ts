import { Server, Socket } from 'socket.io';
import moment from 'moment-timezone';
import { remove } from 'lodash';

export class MessengerService {
    private static readonly instance: MessengerService;
    private readonly botName = 'Kampong Bot';
    private readonly users: { id: string; username: string; room: string }[] = []; // to refactor for db

    private constructor(private readonly socketIoServer: Server) {
        this.socketIoServer.on('connection', (socket: Socket) => {
            const { id } = socket;

            socket.on('joinRoom', ({ username, room }) => {
                this.userJoin(id, username, room);
                socket.join(room);

                // when client connects
                socket.emit('message', this.formatMessage(this.botName, `Welcome to room ${room}!`));

                // broadcast to others when user connects
                socket.broadcast.to(room).emit('message', this.formatMessage(this.botName, `${username} has joined the chat`));

                this.socketIoServer.to(room).emit('roomUsers', {
                    room,
                    users: this.getUsersByRoom(room),
                });
            });

            // Listen for chatMessage
            socket.on('chatMessage', (msg) => {
                const user = this.getUserById(id);
                this.socketIoServer.to(user?.room).emit('message', this.formatMessage(user?.username, msg));
            });

            // when client disconnect
            socket.on('disconnect', () => {
                const user = this.getUserById(id);
                this.userLeave(id);
                this.socketIoServer.to(user?.room).emit('message', this.formatMessage(this.botName, `${user?.username} has left the chat`));
                this.socketIoServer.to(user?.room).emit('roomUsers', {
                    room: user?.room,
                    users: this.getUsersByRoom(user?.room),
                });
            });
        });
    }

    static init(server: Server): MessengerService {
        return this.instance || new MessengerService(server);
    }

    private formatMessage(name: string, body: string) {
        return {
            name,
            body,
            time: moment.tz(process.env.DEFAULT_TIMEZONE).format('h:mm a'),
        };
    }

    private userJoin(id: string, username: string, room: string) {
        const user = { id, username, room };
        this.users.push(user);
    }

    private userLeave(id: string) {
        remove(this.users, (user) => user.id === id);
    }

    private getUsersByRoom(room: string) {
        return this.users.filter((user) => user.room === room);
    }

    private getUserById(id: string) {
        return this.users.find((user) => user.id === id);
    }
}
