import React from 'react'
import './page.module.css';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import BearBox from '@/components/conny-gu/bear-box';

const BearStorePage = () => {
  return (
    <>
        <div className="w-full grid grid-cols-4 gap-4">
            <BearBox />
            
        </div>
    </>
  )
}

export default BearStorePage