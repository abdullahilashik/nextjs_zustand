import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const CatBox = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h4>Cat Basic Destructure</h4>
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
            <Button>Add Bear</Button>
            <Button>Remove Bear</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CatBox;
