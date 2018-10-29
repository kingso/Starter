import './index.css';

/* eslint-disable no-console */

import numeral from 'numeral';
const courseValue = numeral(10000).format('£0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);

