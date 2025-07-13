import PersistedForm from '@/components/conny-gu/persisted-form'
import { Form, FormField } from '@/components/ui/form'
import React from 'react'

const PersistPage = () => {
    
  return (
    <>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <PersistedForm />
        </div>
    </>
  )
}

export default PersistPage