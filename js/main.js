'use strict';

// const score = 60;
// const name = 'taguchi';

// // if (score >= 50) {
// //     if (name === 'taguchi') {
// //         console.log('Good job!');
// //     }
// // }

// if (score >= 50 && name === 'taguchi') {
//     console.log('Good job!');
// }

const signal = 'pink';

switch(signal) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Caution!');
        break;
    case 'blue':
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Wrong signal')
        break;
}