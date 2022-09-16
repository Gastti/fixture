const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.paths = {
            auth: '/auth',
            index: '/',
            users: '/users',
            tournaments: '/tournaments',
            fixture: '/fixture',
            teams: '/teams',
            group: '/group'
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.auth, require('./routes/auth')),
            this.app.use(this.paths.index, require('./routes/index')),
            this.app.use(this.paths.users, require('./routes/users')),
            this.app.use(this.paths.tournaments, require('./routes/tournaments')),
            this.app.use(this.paths.fixture, require('./routes/fixture')),
            this.app.use(this.paths.teams, require('./routes/teams')),
            this.app.use(this.paths.group, require('./routes/groups'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

module.exports = Server;