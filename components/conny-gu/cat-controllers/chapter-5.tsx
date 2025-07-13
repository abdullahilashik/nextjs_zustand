"use client";
import { Button } from "@/components/ui/button";
// React Zustand Tutorial - 5 using the redux devtools middleware (typescript)
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useCatController } from "@/stores/cat-controoller";
import React from "react";

const Chapter5 = () => {
  const bigCat = useCatController((state) => state.cats.big);
  const smallCat = useCatController((state) => state.cats.small);
  const { addBigCat, addSmallCat, suummary } = useCatController();

  //   const { addBigCat, addSmallCat, suummary } = useCatController((state) => ({
  //     addBigCat: state.addBigCat,
  //     addSmallCat: state.addSmallCat,
  //     suummary: state.suummary,
  //   }));
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col items-start">
            <h1>Chapter 5</h1>
            <span className="text-xs">
              using the redux devtools middleware (typescript)
            </span>
            <span>{Math.random()}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-5xl font-bold uppercase">{smallCat}</h4>
              <span>Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-5xl font-bold uppercase">{bigCat}</h4>
              <span>Big</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start">
              <span>Total Cats {suummary()}</span>
              <span className="text-[13px] inline-flex items-center">
                Cat Summary{" "}
                <div className="ml-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>{" "}
                Live
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={addBigCat}
              size={"sm"}
              variant={"secondary"}
              className="cursor-pointer"
            >
              + Big Cat
            </Button>
            <Button
              onClick={addSmallCat}
              size={"sm"}
              variant={"secondary"}
              className="cursor-pointer"
            >
              + Small Cat
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Chapter5;
