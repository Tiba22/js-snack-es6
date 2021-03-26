

function getRandomValue(min, max) {
  const localMin = min;
  const localMax = max - min + 1;
  return Math.floor(Math.random() * localMax) + localMin;
}



function esBici() {
  // Creare un array di oggetti: ogni oggetto descriverà
  // una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore.
  const bikes = [
    {
      'nome': 'bici1',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici2',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici3',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici4',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici5',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici6',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici7',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici8',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici9',
      'peso': getRandomValue(1,20),
    },
    {
      'nome': 'bici10',
      'peso': getRandomValue(1,20),
    },
  ];

  let smallBike = {
    nome: '',
    peso: Number.MAX_SAFE_INTEGER
  };
  for (let i=0; i < bikes.length; i++) {
    const bike = bikes[i];
    let {nome, peso} = bike;
    if (peso < smallBike.peso) {
      smallBike = bike;
    }
  }
  console.log(smallBike);
}


function esCalcio() {
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà:
  // nome, punti fatti, falli subiti.
  // Nome sarà l'unica proprietà da compilare,
  // le altre saranno tutte settate a 0.
  let teams = [
    {
      'nome': 'Juve',
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': 'Milan',
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': 'Inter',
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': 'Vicenza',
      'punti': 0,
      'falliSubiti': 0
    }
  ];


  // Generare numeri random al posto degli 0 nelle proprietà:
  // punti fatti e falli subiti
  for (let i=0; i < teams.length; i++) {
    const team = teams[i];
    team.punti = getRandomValue(0, 50);
    team.falliSubiti = getRandomValue(0, 20);
  }


  // Usando la destrutturazione creiamo un nuovo array
  // i cui elementi contengono solo nomi e falli subiti
  // e stampiamo tutto in console.
  const desArr = [];
  for (let i=0; i < teams.length; i++) {
    const team = teams[i];
    let { punti, falliSubiti } = team;
    let desObj = { punti, falliSubiti };
    desArr.push(desObj);
  }
  console.log(teams, desArr);
}

function init() {
  // esBici();
  esCalcio();
}
// JQUERY
$(document).ready(init);
