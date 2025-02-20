const data = require("./data");

// 1. Ecrire une fonction qui affiche la table de multiplication de "number" en entrée (compris entre 1 et 10)
//    Exemple :
//    showMultiplicationTable(5)
//    5 x 1 = 5
//    5 x 2 = 10
//    5 x 3 = 15
//    5 x 4 = 20
//    5 x 5 = 25
//    5 x 6 = 30
//    5 x 7 = 35
//    5 x 8 = 40
//    5 x 9 = 45
//    5 x 10 = 50
const showMultiplicationTable = (number: number) => {
  let result = ``;
  for (let i = 1; i <= 10; i++) {
    result = `${result}${number} x ${i} = ${number * i}\n`;
    //console.log(`${number} x  ${i} = ${number * i} `);
  }
  return result;
};

// 2. Ecrire une fonction q
// ui prend en entrée une chaîne de caractère et qui la retourne en snake_case.
//    Exemple :
//    toSnakeCase("Hello World")
//    "hello_world"
const toSnakeCase = (str: string) => {
  return str.toLowerCase().replace(/ /g, "_");
};

// 3. Ecrire une fonction qui prend en entrée un tableau de nombres et qui retourne un tableau avec la somme des entrées pairs
//    et la somme des entrées impairs en deuxième.
//    Exemple :
//    sumPairsAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//    [16, 15]
const sumPairsAndOdds = (numbers: number[]) => {
  let result = [0, 0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result[0] = result[0] + numbers[i];
    } else {
      result[1] = result[1] + numbers[i];
    }
  }
  return result;
};

// 4. Ecrire une fonction qui combine deux objets.
//    Exemple :
//    combine({a: 1, b: 8, d: 12}, {b: 10 c: 6, d: 7})
//    {a: 1, b: 18, c: 6, d: 19}
const combine = (
  objA: { [key: string]: number },
  objB: { [key: string]: number }
) => {
  let result = objA;
  for (let key in objB) {
    if (result[key]) {
      result[key] = result[key] + objB[key];
    } else {
      result[key] = objB[key];
    }
  }
  return result;
};

// 5. Ecrire une fonction qui vérifie si un mot de passe est valide.
//     Entre 8 - 20 caractères
//     Contient uniquement les caractères suivants (et au moins un caractère de chaque catégorie) :
//     majuscules,
//     minuscules,
//      chiffres,
//      caractères spéciaux : !@#$%^&*?
//    Retourne "Valide" si le mot de passe est valide, "Invalide" sinon.
//    Exemple :
//    isStrongPassword("Password123!")
//    "Valide"
const isStrongPassword = (password: string) => {
  let conditionsRemplis = [false, false, false, false, false, false];
  console.log(password.length);
  if (password.length >= 8 && password.length <= 20) {
    conditionsRemplis[0] = true;
  }

  console.log(conditionsRemplis);

  let regex = /[a-z]/;
  conditionsRemplis[1] = regex.test(password);
  console.log(conditionsRemplis);

  regex = /[A-Z]/;
  conditionsRemplis[2] = regex.test(password);
  console.log(conditionsRemplis);

  regex = /[0-9]/;
  conditionsRemplis[3] = regex.test(password);
  console.log(conditionsRemplis);

  regex = /[!@#$%^&*?]/;
  conditionsRemplis[4] = regex.test(password);
  console.log(conditionsRemplis);

  let result = regex.test(password);
  if (result === true) {
    return "Valide";
  } else {
    return "Invalide";
  }
};

module.exports = {
  showMultiplicationTable: {
    fn: showMultiplicationTable,
    inputs: data.showMultiplicationTableInputs,
    outputs: data.showMultiplicationTableOutputs,
    options: {
      trim: true,
    },
  },
  toSnakeCase: {
    fn: toSnakeCase,
    inputs: data.toSnakeCaseInputs,
    outputs: data.toSnakeCaseOutputs,
  },
  sumPairsAndOdds: {
    fn: sumPairsAndOdds,
    inputs: data.sumPairsAndOddsInputs,
    outputs: data.sumPairsAndOddsOutputs,
  },
  combine: {
    fn: combine,
    inputs: data.combineInputs,
    outputs: data.combineOutputs,
    options: {
      shouldSpread: true,
    },
  },
  isStrongPassword: {
    fn: isStrongPassword,
    inputs: data.isStrongPasswordInputs,
    outputs: data.isStrongPasswordOutputs,
  },
};
