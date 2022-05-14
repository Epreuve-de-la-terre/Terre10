#! node

const arg = process.argv[2];
let start = arg;
let int = [];
let car;
let min;
let max;
let mil;
let stop = 0;
let val = [];
let y = 0;

if (arg % 1 !== 0) {
  console.log("Veuillez indiquer un chiffre entier en argument");
  return;
}

//Boucle qui détermine un interval assez proche de la racine carrée
while (int.length < 2) {
  start = Math.round(start / 2);
  if (start * start > arg) {
    //Détermine la valeur haute de l'interval
    int.shift();
    int.push(start);
  } else if (start * start < arg) {
    //Détermine la valeur basse de l'interval
    int.unshift(start);
  } else {
    console.log("La racine carré de " + arg + " est " + start);
    return;
  }
}

min = int[0];
max = int[1];
mil = Math.round((max - min) / 2);
car = min + mil;

// Boucle qui détermine le carré du nombre en mettant au carré le millieu de l'intervale
if (car * car == arg) {
  console.log("La racine carré de " + arg + " est " + car);
  return;
}

while (stop < 100) {
  if (car * car > arg) {
    //Ajoute au millieu la moitié de la différence
    mil /= 2; //entre le max et le min de l'interval
    car -= Math.round(mil);
    y++;
    val[y] = car;
  } else if (car * car < arg) {
    //Soustrait au miilieu la moitié de la différence
    mil /= 2; //entre le max et min de l'interval
    car += Math.round(mil);
    y++;
    val[y] = car;
  } else if (car * car == arg) {
    console.log("La racine carré de " + arg + " est " + car);
    return;
  }
  stop++;
}

console.log(arg + " n'a pas de racine carrée");
