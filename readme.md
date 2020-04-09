该组件基于IntersectionObserver实现了滚动加载的功能，且已经做了兼容处理，可放心使用.

```jsx harmony
import React from 'react';
import LoadingList from 'loading-list';
import './App.css';

const data = [
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
  { name: 'andy', age: 12 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
    }
  }
  
  render () {
    const { list } = this.state;

    return (
        <div className="app-container">
          <LoadingList
              list={list}
              fetchData={this.getData}
          >
            {
              list && list.length > 0 && list.map((item, index) => (
                  <div key={index} className="app-container-li">{ `${item.name}-${item.age}-${index}` }</div>
              ))
            }
          </LoadingList>
        </div>
    )
  }

  getData = () => {
    const localList = this.state.list.concat(data);
    this.setState({ list: localList });
  }
}

export default App;
```

参数传入

参数 | 含义 | 类型 | 默认值
--|--|--|--
fetchData | 滚动到底部时需要进行数据处理的方法 | func | () => {}
list | 列表数据，需要传入，只在内部做一些判断，并不渲染 | array | []
children | 子元素渲染，需要传入，样式也需要自己定义 | any | null
loadingNode | 自定义的node样式，样式内容都可以自定义 | any | loading
