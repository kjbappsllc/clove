const cache = {};

const importAll = (r) => {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('../src', true, /\.test\.js$/));