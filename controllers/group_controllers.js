const db = require('../models/index');
const Group = db.Group;
const Team = db.Team;
const Fixture = db.Fixture;
const Tournament = db.Tournament;
const { Op } = require("sequelize");
const { startTeams } = require('./team_controllers');

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

const groupA = [
    {
        name: 'Qatar',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
    },
    {
        name: 'Ecuador',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
    },
    {
        name: 'Senegal',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
    },
    {
        name: 'Netherlands',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
    }
]
const groupB = [
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
    },
]
const teamsC = [
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
]
const groupD = [
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
]
const groupE = [
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
]
const groupF = [
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
]
const groupG = [
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
]
const groupH = [
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

class GroupControllers {

    async startGroups(tournamentId) {
        groups.forEach(async (group) => {
            await Group.create({
                name: group.name,
                tournamentId
            })
        })
    }

    async getGroup(req, res) {
        const group = await Group.findOne({
            where: {
                tournamentId: 54,
                name: 'Group B'
            }
        })

        res.json({
            group
        })
    }

}

module.exports = new GroupControllers();