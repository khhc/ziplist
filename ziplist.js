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