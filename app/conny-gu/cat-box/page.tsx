import Chapter2 from '@/components/chapter-2'
import CatBoxBasic from '@/components/conny-gu/cat-boxes/cat-box-basic'
import React from 'react'

const CatboxPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* cat box basic */}
      <CatBoxBasic />
      <Chapter2 />
    </div>
  )
}

export default CatboxPage