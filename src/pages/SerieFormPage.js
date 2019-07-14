import React from 'react'
import { View, Picker, Slider } from 'react-native'
import { connect } from 'react-redux'

import Input from '../components/Input'
import FormRow from '../components/FormRow'
import { setField } from '../redux/action-creators'

const SerieFormPage = ({ serieForm, setField }) => {
  const { title, img, gender, rate } = serieForm

  return (
    <View>
      <FormRow first>
        <Input
          placeholder='Title'
          value={title}
          onChangeText={value => setField('title', value)}
        />
      </FormRow>
      <FormRow>
        <Input
          placeholder='Image URL'
          value={img}
          onChangeText={value => setField('img', value)}
        />
      </FormRow>
      <FormRow>
        <Picker
          selectedValue={gender}
          onValueChange={itemValue => setField('gender', itemValue)}
        >
          <Picker.Item
            label='Police'
            value='police'
          />
          <Picker.Item
            label='Comedy'
            value='comedy'
          />
          <Picker.Item
            label='Horror'
            value='horror'
          />
        </Picker>
      </FormRow>
      <FormRow>
        <Slider
          onValueChange={value => setField('rate', value)}
          value={rate}
          minimumValue={0} // default is already 0
          maximumValue={100} // default is 1
        />
      </FormRow>
    </View>
  )
}

const mapStateToProps = state => ({
  serieForm: state.serieForm
})

const mapDispatchToProps = {
  setField
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage)
