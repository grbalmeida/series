import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../components/Input'
import FormRow from '../components/FormRow'
import { setField } from '../redux/action-creators'

const SerieFormPage = ({ serieForm, setField }) => {
  const { title } = serieForm

  return (
    <View>
      <FormRow first>
        <Input
          placeholder='Title'
          value={title}
          onChangeText={value => setField('title', value)}
        />
      </FormRow>
    </View>
  )
}

SerieFormPage.propTypes = {
  serieForm: PropTypes.object.isRequired,
  setField: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  serieForm: state.serieForm
})

const mapDispatchToProps = {
  setField
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage)
