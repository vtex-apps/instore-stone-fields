import React, { Fragment } from 'react'
import FormInput from 'vtex.instore-form-fields/FormInput'

const StoneFields = () => {
  return (
    <Fragment>
      <FormInput
        ffor="customsenha"
        nameKey="instore-stone-fields.stone-code"
        isRequired
      />
      <FormInput
        ffor="customnomemae"
        nameKey="instore-stone-fields.mothers-name"
        isRequired={false}
      />
      <FormInput
        ffor="nomefantasiapessoal"
        nameKey="instore-stone-fields.business-name"
        isRequired={false}
      />
    </Fragment>
  )
}

export default StoneFields
