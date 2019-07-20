import React from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  Picker,
  Slider,
  StyleSheet,
  Button
} from 'react-native'
import { connect } from 'react-redux'

import Input from '../components/Input'
import FormRow from '../components/FormRow'
import { setField, saveSerie } from '../redux/action-creators'

const SerieFormPage = ({
  serieForm,
  setField,
  saveSerie,
  navigation
}) => {
  const { title, img, gender, rate, description } = serieForm

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={150}
      behavior='padding'
      enabled
    >
      <ScrollView>
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
          <View style={styles.sameRow}>
            <Text>Rate:</Text>
            <Text>{rate}</Text>
          </View>
          <Slider
            onValueChange={value => setField('rate', value)}
            value={rate}
            minimumValue={0} // default is already 0
            maximumValue={100} // default is 1
            step={5}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder='Description'
            value={description}
            onChangeText={value => setField('description', value)}
            numberOfLines={4}
            multiline
          />
        </FormRow>
        <Button
          title='Save'
          onPress={() => {
            saveSerie(serieForm)
              .then(() => {
                navigation.goBack()
              })
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
})

const mapStateToProps = state => ({
  serieForm: state.serieForm
})

const mapDispatchToProps = {
  setField,
  saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage)
