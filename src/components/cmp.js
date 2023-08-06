import React from 'react'
import { View, Text } from 'react-native'
import {
  SelectList,
  MultipleSelectList
} from 'react-native-dropdown-select-list'

const Cmp = () => {
  const [selected, setSelected] = React.useState('')
  const [categories, setCategories] = React.useState([])

  const data = [
    { key: 'Canada', value: 'Canada' },
    { key: 'England', value: 'England' },
    { key: 'Pakistan', value: 'Pakistan' },
    { key: 'India', value: 'India' },
    { key: 'NewZealand', value: 'NewZealand' }
  ]

  return (
    <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
      <SelectList setSelected={setSelected} data={data} />

      <View style={{ marginTop: 50 }}>
        <Text>Selected Value : </Text>
        <Text style={{ marginTop: 10, color: 'gray' }}>{selected}</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <Text>Selected Categories : </Text>
        {categories.map((item) => {
          return (
            <Text key={item} style={{ marginTop: 10, color: 'gray' }}>
              {item}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default Cmp
