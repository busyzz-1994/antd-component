// import 'es6-promise'
// import axios from 'axios';
const noop = _ => _;

const config = {
  $urlGetter: noop,
  $tokenGetter: noop,
  $beforeHook: noop,
  $afterHook: noop,
  $dataHook: noop,
  $errorHook: noop,
  url(func) {
    this.$urlGetter = func;
    return this;
  },
  token(func) {
    this.$tokenGetter = func;
    return this;
  },
  before(func) {
    this.$beforeHook = func;
    return this;
  },
  after(func) {
    this.$afterHook = func;
    return this;
  },
  data(func) {
    this.$dataHook = func;
    return this;
  },
  error(func) {
    this.$errorHook = func;
    return this;
  }
};
// function request_axios(url, params, options = {}) {
//   let { withCredentials = true, timeout = 30000 } = options;

//   config.$beforeHook(url, params, options);

//   let o = {
//     method: options.method || 'post',
//     withCredentials,
//     url: config.$urlGetter(url),
//     timeout,
//     data: params || {}
//   };
//   // 服务端返回的数据有的属性带有空格 回传时在这里统一去除 避免引发异常
//   for (let k in o.data) {
//     let v = o.data[k];
//     if (typeof v == 'string') {
//       o.data[k] = v.trim();
//     }
//   }

//   if (withCredentials) {
//     const token = config.$tokenGetter();
//     if (!token) {
//       console.error('缺少必要的参数 token', url, params, options);
//     }
//     o.withCredentials = true;
//     o.headers = {
//       'Content-Type': 'application/json',
//       token
//     };
//     o.data.token = token;
//   }
//   if (process.env.NODE_ENV !== 'production') {
//     console.log(o);
//   }

//   return axios(o).then(({ data }) => {
//     config.$afterHook(url, params, options);
//     return config.$dataHook(data, url, params, options) || data;
//   });
// }
interface Option {
  withCredentials?: boolean;
  method?: string;
}

function request_fetch(url, params, options: Option = {}) {
  let { withCredentials = false, method = 'post' } = options;

  // @ts-ignore
  config.$beforeHook(url, params, options);

  let targetUrl = config.$urlGetter(url);
  let o = {
    credentials: undefined,
    method,
    body: JSON.stringify(params || {}),
    headers: undefined
  };
  if (withCredentials) {
    // @ts-ignore
    const token = config.$tokenGetter();
    if (!token) {
      console.error('缺少必要的参数 token', url, params, options);
    }
    o.credentials = 'include';
    o.headers = {
      'Content-Type': 'application/json',
      token
    };
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log(targetUrl, o);
  }

  return fetch(targetUrl, o)
    .then(response => response.json())
    .then(
      data => {
        // @ts-ignore
        config.$afterHook(url, params, options);
        // @ts-ignore
        return config.$dataHook(data, url, params, options) || data;
      },
      error => {
        // @ts-ignore
        config.$afterHook(url, params, options);
      }
    );
}
let request = request_fetch;

export { config };
export default request;
