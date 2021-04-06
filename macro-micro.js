const fn = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
    }, 1000);
  });
};

!(async function () {
  for (var i = 0; i < 3; i++) {
    const res = await fn(i);
    console.log("res", res);
  }
})();

// for (let i = 0; i < 3; i++) {
//   !(async function () {
//     const res = await fn(i);
//     console.log("res", res);
//   })();
// }
