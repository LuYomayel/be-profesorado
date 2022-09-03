'use strict';

const fs = require('fs');
const mysql = require('mysql');
const sqlConfig = require('../configurations/database.configurations');

// Función encargada de darle el formato correcto a los valores de las variables.

// function formatSting(string) {
//     let response = '';
//     const aux = '\\';
//     if (string === null) {
//         return;
//     } else if (string[string.length - 1] === aux[0] && string[string.length - 2] !== aux[0]) {
//         response = (string.toString() + aux[0]).replace(/(\\)/gm, '/');
//         response = response.replace(/(\r\n|\n|\r)/gm, ' ');
//         response = response.replace(/(")/gm, "'");
//         return response;
//     } else if (string[string.length - 1] === aux[0] && string[string.length - 2] === aux[0]) {
//         response = string.toString().replace(/(\\)/gm, '/');
//         response = response.replace(/(\r\n|\n|\r)/gm, ' ');
//         response = response.replace(/(")/gm, "'");
//         return response;
//     } else {
//         response = string.toString().replace(/(\\)/gm, '/');
//         response = response.toString().replace(/(\r\n|\n|\r)/gm, ' ');
//         response = response.replace(/(")/gm, "'");
//         return response;
//     }
// }

module.exports = {

//     // Función encargada de grabar los logs, como un archivo .txt, en la carpeta logs.

//     logRegister(logg, type = 'corrects') {
//         let dateLog = new Date().toLocaleString();
//         logg = `${dateLog.split(' ')[1]} ${logg}\n`;
//         dateLog = `${dateLog.split(' ')[0].split('-')[2]}-${dateLog.split(' ')[0].split('-')[1]}-${dateLog.split(' ')[0].split('-')[0]}`;
//         if (!fs.existsSync('./api/logs/')) {
//             fs.mkdirSync('./api/logs/');
//         }
//         if (!fs.existsSync('./api/logs/corrects')) {
//             fs.mkdirSync('./api/logs/corrects');
//         }
//         if (!fs.existsSync('./api/logs/errors')) {
//             fs.mkdirSync('./api/logs/errors');
//         }
//         fs.appendFile(`./api/logs/${type}/${dateLog}.txt`, logg, (err) => {
//             if (err) {
//                 return console.error(`\x1b[31m\nError while recording file: ${err}\x1b[37m\n`);
//             } else {
//                 return;
//             }
//         });
//     },

//     // Función encargada de convertir a JSON el resultado de una búsqueda.

//     generateJSON(rows) {
//         return new Promise((resolve, reject) => {
//             try {
//                 const jsonArray = [];
//                 rows.forEach((row, indexRows) => {
//                     let rowObject = {};
//                     row.forEach((column, indexColumns) => {
//                         rowObject[column.metadata.colName] = column.value;
//                         if (indexColumns === row.length - 1) {
//                             jsonArray.push(rowObject);
//                             if (indexRows === rows.length - 1) {
//                                 resolve(jsonArray);
//                             }
//                         }
//                     });
//                 });
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     },

//     // Función encargada de convertir a texto y luego a JSON el resultado de una búsqueda.

//     generateJSONText(rows) {
//         return new Promise((resolve, reject) => {
//             try {
//                 let response = '';
//                 let odt = '';
//                 let reclamo = -1;
//                 let prefijo = '';
//                 let nivel = 0;
//                 for (const [indexRows, row] of rows.entries()) {
//                     //console.log(row[1].value);
//                     if (row[0].value === odt && row[1].value === reclamo) {
//                         // Sigo en la misma ODT.
//                         nivel = 0;
//                         prefijo = row[0].metadata.colName.split('_')[0];
//                         row.forEach((column, indexColumns) => {
//                             // console.log(column.metadata.colName);
//                             // console.log(`${column.metadata.colName.split('_')[1]} ${column.value}`);
//                             // console.log(JSON.stringify(eval(`([{${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"}])`)));
//                             if (column.metadata.colName.split('_')[0] !== prefijo) {
//                                 prefijo = column.metadata.colName.split('_')[0];
//                                 if (prefijo !== 'split') {
//                                     nivel++;
//                                     response = (column.value === null || column.value === undefined)
//                                         ? `${response} }, { ${column.metadata.colName.split('_')[1]}: null`
//                                         : `${response} }, { ${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"`;
//                                 }
//                             } else {
//                                 if (nivel !== 0) {
//                                     response = (column.value === null || column.value === undefined)
//                                         ? `${response}, ${column.metadata.colName.split('_')[1]}: null`
//                                         : `${response}, ${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"`;
//                                 }
//                             }
//                             if (indexRows === rows.length - 1 && indexColumns === row.length - 1) {
//                                 response = `[ ${response} }]}]`;
//                                 resolve(JSON.stringify(eval(`(${response})`)));
//                             }
//                         });
//                     } else {
//                         // Nueva ODT.
//                         if (indexRows === 0) {
//                             response = '{';
//                         } else {
//                             if (nivel !== 0) {
//                                 response = `${response} }]}, {`;
//                                 nivel = 0;
//                             } else {
//                                 response = `${response} }, {`;
//                             }
//                         }
//                         odt = row[0].value;
//                         reclamo = row[1].value;
//                         prefijo = row[0].metadata.colName.split('_')[0];
//                         for (const [indexColumns, column] of row.entries()) {
//                             // console.log(column.metadata.colName);
//                             if (column.metadata.colName.split('_')[0] === prefijo) {
//                                 // Si es la primer variable.
//                                 if (column.metadata.colName.split('_')[1] === 'historial') {
//                                     // console.log(`${column.metadata.colName.split('_')[1]} ${column.value}`);
//                                     // console.log(JSON.stringify(eval(`([{${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"}])`)));
//                                 }
//                                 if (indexColumns === 0) {
//                                     response = `${response} ${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"`;
//                                 } else {
//                                     response = (column.value === null || column.value === undefined)
//                                         ? `${response}, ${column.metadata.colName.split('_')[1]}: null`
//                                         : `${response}, ${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"`;
//                                 }
//                             } else {
//                                 prefijo = column.metadata.colName.split('_')[0];
//                                 if (prefijo === 'split') {
//                                     if (column.value !== null && column.value !== undefined) {
//                                         if (column.value[1] !== '{') {
//                                             response = `${response}, ${column.value.substring(1)}`;
//                                         } else {
//                                             response = `${response}, ${column.metadata.colName.split('_')[1]}: [${column.value.substring(1)}]`
//                                         }
//                                     }
//                                 } else {
//                                     if (column.value !== null && column.value !== undefined) {
//                                         nivel++;
//                                         response = `${response}, ${prefijo}: [{ ${column.metadata.colName.split('_')[1]}: "${formatSting(column.value)}"`;
//                                     } else {
//                                         break;
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 if (nivel === 0) {
//                     response = `[ ${response} }]`;
//                 } else {
//                     response = `[ ${response} }]}]`;
//                 }
//                 // console.log(response);
//                 resolve(JSON.stringify(eval(`(${response})`)));
//             } catch (err) {
//                 console.log(err);
//                 reject({ status: 533, error: 'There was an error converting the response to JSON format' });
//             }
//         });
//     },

//     validateBody(body, required) {
//         return new Promise((resolve, reject) => {
//             if (required.length === 0) {
//                 resolve();
//             } else {
//                 const stringBody = JSON.stringify(body);
//                 required.forEach((req, index) => {
//                     if (stringBody.indexOf(req) === -1) {
//                         reject(`The variable "${req}" was not found`);
//                     } else {
//                         if (index === required.length - 1) {
//                             resolve();
//                         }
//                     }
//                 });
//             }
//         });
//     },

    newConnection(name = '') {
        return new Promise((resolve, reject) => {
            try {
                const connection = mysql.createConnection(sqlConfig);
                connection.connect((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(connection);
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    },

    async query(connection, sp = '', paramsSP = '()', end = true) {
        return new Promise((resolve, reject) => {
            try {
                connection.query(`CALL ${sp} ${paramsSP}`, (err, results) => {
                    if (err) {
                        if (end) {
                            connection.end((error) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    reject(err);
                                }
                            });
                        }
                        else {
                            reject(err);
                        }
                    } else {
                        if (end) {
                            connection.end((err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(results);
                                }
                            });
                        }
                        else {
                            resolve(results);
                        }
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    },


}
