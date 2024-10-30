import { Component, PropsWithChildren } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.css'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props.store
    if (counterStore.counter > 0) {
      counterStore.counter = 0
    } else {
      counterStore.counter = 1
    }
  }

  render() {
    const { counterStore: { counter } } = this.props.store
    return (

      <View className={counter == 1 ? "light bg-white" : "dark  dark:bg-green-600"}>
        <Button className='bg-green dark:bg-red-500' onClick={this.increment}>切换dark/light</Button>
        <Text>{counter == 0 ? "dark" : "light"}</Text>
      </View>
    )
  }
}

export default Index
