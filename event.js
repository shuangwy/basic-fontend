function bindEvent(ele, type, fn) {
  ele.addEventListener(type, fn);
}

const btn1 = document.getElementById("btn1");
bindEvent(btn1, "click", (event) => {
  event.preventDefault(); //阻止默认行为
  event.stopPropagation(); //阻止事件冒泡
});
