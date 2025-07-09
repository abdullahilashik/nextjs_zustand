"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useCatStore } from '@/stores/use-cat-store'


const CatBoxBasic = () => {

    // values
    const bigCat = useCatStore(state => state.cats.bigCat);
    const smallCat = useCatStore(state => state.cats.smallCat);
    // actions / functions to update the states
    const addSmallcat = useCatStore(state => state.addSmallCat);
    const addBigcat = useCatStore(state => state.addBigCat);

  return (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <h4>Cat box simple</h4>
                {/* <span>{Math.random()}</span> */}
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-y-2">
                    <h4 className='text-3xl'>{smallCat}</h4>
                    <span>Small Cats</span>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <h4 className='text-3xl'>{bigCat}</h4>
                    <span>Big Cats</span>
                </div>
            </div>
        </CardContent>
        <CardFooter className='flex items-center justify-between'>
            <span>Total cats: {0}</span>
            <div className="flex items-center gap-2">
                <Button onClick={addSmallcat}>Small Cat</Button>
                <Button onClick={addBigcat}>Big Cat</Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default CatBoxBasic