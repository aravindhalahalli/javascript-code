let counter = 0;

const somefunc = () => {
  console.log("Fetching data from server", counter++);
};

const debounce = function (cb, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};

const optimizedFunction = debounce(somefunc, 1000);