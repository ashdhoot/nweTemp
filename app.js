const _ = require("lodash");

const items = [1, [2, 4], [6], 4, 7];

const newItems = _.flattenDeep(items);

console.log(newItems);
