const React = (function React() {
  let hooks = [];
  let idx = 0;
  const useState = function (initState) {
    let state = hooks[idx] || initState;
    const setState = (newVal) => {
      hooks[idx] = newVal;
    };
    return [state, setState];
  };
  const render = (Cmp) => {
    let C = Cmp();
    C.render();
    return C;
  };
  return { useState, render };
})();

const Component = () => {
  const [value, setValue] = React.useState(1);
  const [count, setCount] = React.useState("test");
  return {
    render: () => {
      console.log("value", value, "count", count);
    },
    click: () => {
      setValue(value + 1);
      setCount("test two");
    },
  };
};

const app = React.render(Component);
app.click();
React.render(Component);
