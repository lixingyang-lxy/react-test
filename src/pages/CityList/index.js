import React from 'react'
import axios from 'axios'
import { List, AutoSizer } from 'react-virtualized'
import './index.css'

const formatCityData = (list) => {
  const cityList = {}
  list.forEach(element => {
    const first = element.short ? element.short.substr(0, 1) : 'a'
    if (cityList[first]) {
      cityList[first].push(element)
    } else {
      cityList[first] = [element]
    }
  });
  const cityIndex = Object.keys(cityList).sort()
  return {
    cityList,
    cityIndex
  }
}

export default class CityList extends React.Component {
  state = {
    cityList: {},
    cityIndex: []
  }
  async getCityList() {
    const { data: { body } } = await axios.get('http://localhost:8080/area/city?level=1')
    const { cityList, cityIndex } = formatCityData(body)
    this.setState({
      cityList,
      cityIndex
    })
  }
  async componentDidMount() {
    await this.getCityList()
  }
  cityChange(item) {
    console.log(item)
  }
  rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    const { cityIndex, cityList } = this.state
    const letter = cityIndex[index]
    return (
      <div key={index} style={style} className="city">
        <div className="title">{letter}</div>
        {/* <div className="item-name">{item.label}</div> */}
        {cityList[letter].map(item => (
          <div className="name"
            key={item.value}
            onClick={() => this.cityChange(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
    )
  }
  render() {
    return (
      <div style={{ border: '1px solid red', height: '500px' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              rowCount={this.state.cityIndex.length}
              rowHeight={100}   //高度是item-name的css高度
              rowRenderer={this.rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    )
  }
}