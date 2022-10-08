Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写



const proxy = new Proxy(target, handler);
target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。