import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Input from '../components/Input'
import FormRow from '../components/FormRow'
import { setField } from '../redux/action-creators'

const SerieFormPage = ({ serieForm, setField }) => {
  const { title, img, gender } = serieForm

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
      <Picker
        selectedValue={gender}
        style={styles.picker}
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
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 100
  }
})

const mapStateToProps = state => ({
  serieForm: state.serieForm
})

const mapDispatchToProps = {
  setField
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage)
