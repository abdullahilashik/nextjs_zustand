"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { useCatStoreChapter2 } from '@/stores/cat-store-chapter-2'
import { Button } from './ui/button'

const Chapter2 = () => {
    const bigCat = useCatStoreChapter2(state => state.cats.bigCat);
    const smallCat = useCatStoreChapter2(state => state.cats.smallCat);
    const increaseBigCat = useCatStoreChapter2(state => state.increaseBigCat);
    const increaseSmallCat = useCatStoreChapter2(state => state.increaseSmallCat);
    const summary = useCatStoreChapter2(state => state.summary);
  return (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between px-4 py-1">
                <h4>Chapter 2</h4>
                <span className="rounded shadow bg-teal-600 text-white px-3 py-1 font-bold uppercase">{summary()}</span>
            </div>
        </CardHeader>
        <CardContent>
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                    <h4 className="text-3xl font-bold">{bigCat}</h4>
                    <span>Big Cats</span>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-3xl font-bold">{smallCat}</h4>
                    <span>Small Cats</span>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <div className="w-fulll flex flex-end gap-x-4">
                <Button onClick={increaseBigCat}>+ Big Cats</Button>
                <Button onClick={increaseSmallCat}>+ Small Cats</Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default Chapter2