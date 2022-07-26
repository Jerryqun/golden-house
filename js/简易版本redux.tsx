/**手写一个简易版本。包含中间件原理*/
/**
 中间件就是一个函数，对 store.dispatch 方法进行改造，
 在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
*/
/**
 * 中间件logger, 接收getState、dispatch
 */
 const logger = ({ getState }) => {
    return (next) => (action) => {
      console.log("====================================");
      console.log(action.type + "执行了!");
      const prevState = getState();
      console.log("prev state", prevState);
      const returnValue = next(action);
      const nextState = getState();
      console.log("next state", nextState);
      console.log("====================================");
      return returnValue;
    };
  }
  /**
   * thunk
   */
  const thunk = ({ dispatch, getState }) => {
    return (next) => (action) => {
      if (typeof action === "function") {
        return action(dispatch, getState);
      }
      return next(action);
    };
  }
  /**
   * applyMiddleware
   */
  const applyMiddleware = (...middlewares) => {
    return createStore => reducer => {
      const store = createStore(reducer);
      let dispatch = store.dispatch;
      const midApi = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      };
      const middlewareChain = middlewares.map(middleware => middleware(midApi));
      dispatch = compose(...middlewareChain)(store.dispatch);
      // 返回加强版的dispatch
      return {
        ...store,
        dispatch
      };
    };
  }
  /**
   * compose
   */
  const compose = (...funcs) => {
    if (funcs.length === 0) {
      return arg => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }
  const combineReducers = () => {
  
  }
  /**
   * createStore
   */
  const createStore = (reducer, applyMiddleware) => {
    if (applyMiddleware) {
      return applyMiddleware(createStore)(reducer);
    }
    let state = {}; // 数据
    let listens = []; // 执行的方法队列
    const getState = () => {
      return state
    }
    const dispatch = (action) => {
      if (typeof action === 'function') {
        state = reducer(state, action())
      } else {
        state = reducer(state, action)
      }
      listens.forEach(listen => {
        listen() // 调用注册事件
      })
      return action
    }
    const subscribe = (callback) => {
      if (typeof callback === 'function') {
        listens.push(callback)
      }
      return () => {
        // 注销自己
        listens = listens.filter(listen => listen !== callback)
      }
    }
    dispatch({ type: Math.random() }); // 内部调用一下，获取state默认值
    return {
      getState,
      dispatch,
      subscribe
    }
  }
  /**
   * reducer
   */
  const countReducer = (state = { count: 1 }, action) => {
    switch (action.type) {
      case 'ADD':
        return { count: state.count + 1 }
      case 'MINUS':
        return { count: state.count - 1 }
      default:
        return { count: 0 };
    }
  }
  const store = createStore(countReducer, applyMiddleware(thunk, logger));
  
  export default class ReduxPage extends React.Component {
    componentDidMount() {
      store.subscribe(() => {
        this.forceUpdate();
      });
    }
    add = () => {
      store.dispatch({ type: "ADD" });
    };
    minus = () => {
      store.dispatch({ type: "MINUS" });
    };
    render() {
      return (
        <div>
          <h3>ReduxPage</h3>
          <p>{JSON.stringify(store.getState())}</p>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
      );
    }
  }