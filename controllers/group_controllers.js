const db = require('../models/index');
const Group = db.Group;
const Team = db.Team;
const TeamControllers = require('./team_controllers')

const groups = [
    { name: 'Group A' },
    { name: 'Group B' },
    { name: 'Group C' },
    { name: 'Group D' },
    { name: 'Group E' },
    { name: 'Group F' },
    { name: 'Group G' },
    { name: 'Group H' },
];

const teams = [
    {
        a: [
            {
                name: 'Portugal',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Ghana',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Uruguay',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Korea Republic',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        b: [
            {
                name: 'England',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Iran',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'USA',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Wales',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        c: [
            {
                name: 'Argentina',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Saudi Arabia',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Mexico',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Poland',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        d: [
            {
                name: 'France',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Australia',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Denmark',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Tunisia',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        e: [
            {
                name: 'Spain',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Costa Rica',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Germany',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Japan',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        f: [
            {
                name: 'Belgium',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Canada',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Morocco',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Croatia',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        g: [
            {
                name: 'Brazil',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Serbia',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Switzerland',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Cameroon',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ],
        h: [
            {
                name: 'Portugal',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Ghana',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Uruguay',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            },
            {
                name: 'Korea Republic',
                icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
                location: '',
            }
        ]
    }
]

class GroupControllers {

    async start(tournamentId) {
        groups.forEach(async (group) => {
            const newGroup = await Group.create({
                name: group.name,
                tournamentId
            })

            const key = newGroup.name.split(' ').pop().toLowerCase();
            const id = newGroup.id

            TeamControllers.seed(id, teams[0][key])
        })
    }

    async get(req, res) {
        const { id } = req.params;
        try {
            const group = await Group.findByPk(id, {
                include: [{
                    model: Team,
                    as: 'teams'
                }]
            })

            res.json({
                ok: true,
                data: group
            })
        } catch (error) {
            console.log(error);
            res.json({
                ok: false,
                msg: 'Server side error'
            })
        }
    }

}

module.exports = new GroupControllers();