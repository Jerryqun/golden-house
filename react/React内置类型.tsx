/**
 * https://juejin.cn/post/7021674818621669389#heading-35
 */

/**
 * JSX.Element
 * JSX.Element是ReactElement的子类型，它没有增加属性，两者是等价的。也就是说两种类型的变量可以相互赋值。​
 */

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
  }
}

/**
 * 两者等价
 */
const jsx = <div>hello</div>
const ele = React.createElement("div", null, "hello");

/**
 * React.ReactNode
 * ReactNode是一个联合类型，它可以是string、number、ReactElement、null、boolean、ReactNodeArray。由此可知。ReactElement类型的变量可以直接赋值给ReactNode类型的变量，但反过来是不行的。
 * 类组件通过 render() 返回 ReactNode的值。
 */

