import React from 'react'

import FormBuilder from './Form/Mcqform'
import Comprehension from './Form/Comprehension'
import ClozeFormBuilder from './Form/Clozeformbuilder'



const WorkContainer = () => {
  return (
    <div className='border p-2'>
      <FormBuilder/>
      <ClozeFormBuilder/>
      <Comprehension/>
    </div>
  )
}

export default WorkContainer
