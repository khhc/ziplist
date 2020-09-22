const t1 = ['a', 'b', 'c'];
const t2 = [1, 2, 3];

function zipList(a, b) {
  const ret = [];
  for (let i = 0; i < a.length; i++) {
    ret.push(a[i], b[i]);
  }
  return ret;
}

console.log(zipList(t1, t2));

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}

console.log(zipListTheSimpleWay(t1, t2));

/*
Attempt #2
16 minutes and 38 seconds
 */