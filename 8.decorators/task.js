//Задача #1

function cachingDecoratorNew(func) {
  const cache = [];

  return function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log(`Из кэша: ${objectInCache.result}`);
      return `Из кэша: ${objectInCache.result}`;
    }

    console.log(`Вычисляем: ${func(...args)}`);
    const result = func(...args);
    cache.push({ hash, result });

    if (cache.length > 5) {
      cache.shift();
    }

    return `Вычисляем: ${result}`;
  };
};


//Задача #2
function debounceDecoratorNew(func, delay) {
  let timeOutId = null;
  wrapper.allCount = 0;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeOutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}
  

