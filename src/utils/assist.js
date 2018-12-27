// 由一个组件，向上找到最近的指定组件
/**
 * findComponentUpward 接收两个参数，第一个是当前上下文，比如你要基于哪个组件来向上寻找，
 * 一般都是基于当前的组件，也就是传入 this；第二个参数是要找的组件的 name 。
  findComponentUpward 方法会在 while 语句里不断向上覆盖当前的 parent 对象，
  通过判断组件（即 parent）的 name 与传入的 componentName 是否一致，直到直到最近的一个组件为止。
 与 dispatch 不同的是，findComponentUpward 是直接拿到组件的实例，而非通过事件通知组件。
 比如下面的示例，有组件 A 和组件 B，A 是 B 的父组件，在 B 中获取和调用 A 中的数据和方法：
 **/
function findComponentUpward (context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) <0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent
}

// 由一个组件，向上找到所有的指定组件
/**
 * findComponentsUpward 的使用场景较少，一般只用在递归组件里面（后面小节会介绍），
 * 因为这个函数是一直向上寻找父级（parent）的，只有递归组件的父级才是自身。
 * 事实上，iView 在使用这个方法也都是用在递归组件的场景，比如菜单组件 Menu。
 * 由于递归组件在 Vue.js 组件里面并不常用，那自然 findComponentsUpward 也不常用了。
 * */
function findComponentsUpward (context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}

// 由一个组件，向下找到最近的指定组件
/**
 * context.$children 得到的是当前组件的全部子组件，所以需要遍历一遍，
 * 找到有没有匹配到的组件 name，
 * 如果没找到，继续递归找每个 $children 的 $children，直到找到最近的一个为止。
 * */
function findComponentDownward (context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;

      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// 由一个组件，向下找到所有指定的组件
/**
 * 这个函数实现的方式有很多，这里巧妙使用 reduce 做累加器，
 * 并用递归将找到的组件合并为一个数组并返回，代码量较少，但理解起来稍困难。
 * */
function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// 由一个组件，找到指定组件的兄弟组件
/**
 * 相比其它 4 个函数，findBrothersComponents 多了一个参数 exceptMe，
 * 是否把本身除外，默认是 true。
 *
 * 寻找兄弟组件的方法，是先获取 context.$parent.$children，
 * 也就是父组件的全部子组件，这里面当前包含了本身，所有也会有第三个参数 exceptMe。
 * Vue.js 在渲染组件时，都会给每个组件加一个内置的属性 _uid，这个 _uid 是不会重复的，
 * 借此我们可以从一系列兄弟组件中把自己排除掉。
 * */
function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents
};
