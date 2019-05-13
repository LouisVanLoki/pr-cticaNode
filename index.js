const {obtenerPromedio, argv} = require('./datos2.js');

console.log(argv);
if(argv._[0] == 'promedio'){
    console.log('El promedio de ' + argv.n + ' es ' + obtenerPromedio(3, 4, 5));
} else {
    console.log('Promedio no calculado');
}