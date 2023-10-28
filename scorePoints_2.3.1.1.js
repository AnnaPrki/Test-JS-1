const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

    const scorePointsArr = [];
    console.log(players[0].scorePoints)

    for (let i=0; i<players.length; i++) {
        console.log(players[i].scorePoints)

    }
    
    for (player in players) {
        scorePointsArr.push(players[player].scorePoints);
    }
    const maxScore = Math.max(...scorePointsArr);

    console.log("Максимальное количество очков:", maxScore);