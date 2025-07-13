import Chapter3 from '@/components/conny-gu/cat-controllers/chapter-3'
import Chapter4 from '@/components/conny-gu/cat-controllers/chapter-4'
import Chapter5 from '@/components/conny-gu/cat-controllers/chapter-5'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Chapter3 />
            <Chapter4 />
            <Chapter5 />
        </div>
    </>
  )
}

export default page