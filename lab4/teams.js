let teams = [
    {
    id: 1, tname: "Rusty", tl: "Ashish", email: "ashishrajsingh75@gmail.com", members: 6
    },
    {
        id: 2, tname: "Zenith", tl: "Mohan ji", email: "mohanji@gmail.com", members: 6
    }
]


let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find(team => team.id === id);

export const addTeam = (team) => {
    if(getTeamById(team.id)) {
        return "Team with this id already exists";
    }
    team.id = nextId++;
    teams.push(team);
    return team;
}

export const updateTeamById = (id, updatedTeam) => {
   const team = getTeamById(id);
    if(!team) {
         return null;
    }

    Object.assign(team, updatedTeam);
    return team;

}

export const deleteTeamById = (id) => {
    const index = teams.findIndex(team => team.id === id);
    if(index === -1) {
        return null;
    }
    teams.splice(index, 1);
    return true;
}