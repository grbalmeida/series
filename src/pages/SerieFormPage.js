import React from 'react'
import { View } from 'react-native'

import Input from '../components/Input'
import FormRow from '../components/FormRow'

const SerieFormPage = (
  <View>
    <FormRow first>
      <Input
        placeholder='Title'
        value=''
        onChangeText={value => console.log(value)}
      />
    </FormRow>
  </View>
)

export default SerieFormPage
