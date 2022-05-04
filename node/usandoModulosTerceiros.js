// não é preciso usar o caminho relativo
// pois ele procura dentro de node_modules o lodash e dentro de lodash
// ele procura pelo arquivo index.js que de fato exporta o lodash
const _ = require("lodash");
setInterval(() => console.log(_.random(1, 1000)), 2000)