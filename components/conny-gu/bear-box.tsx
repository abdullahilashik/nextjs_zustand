"use client"

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useBearStore } from "@/stores/use-bear-store";
import { Button } from "../ui/button";

const BearBox = () => {
    const bears = useBearStore(state => state.bears);
    const increaseBear = useBearStore(state => state.increaseBear);
    const decreaseBear = useBearStore(state => state.decreaseBear);
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h4>Bear Basic Store</h4>
        </CardHeader>
        <CardContent>
          <h1>Bear Count: {bears}</h1>
        </CardContent>
        <CardFooter style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>{Math.random().toFixed(6)}</span>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '4px'
            }}>
                <Button onClick={increaseBear}>Add Bear</Button>
                <Button onClick={decreaseBear}>Remove Bear</Button>
            </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default BearBox;
