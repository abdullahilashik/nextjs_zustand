"use client"
import { useBearStore } from "@/stores/use-bear-store";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const BearBoxDestructure = () => {
  const {
    bears,
    increaseBear,
    decreaseBear
  } = useBearStore();

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h4>Bear Basic Destructure</h4>
        </CardHeader>
        <CardContent>
          <h1>Bear Count: {bears}</h1>
        </CardContent>
        <CardFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>{Math.random().toFixed(6)}</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "4px",
            }}
          >
            <Button onClick={increaseBear}>Add Bear</Button>
            <Button onClick={decreaseBear}>Remove Bear</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default BearBoxDestructure;
