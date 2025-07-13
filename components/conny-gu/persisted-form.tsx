"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormField, FormItem } from "../ui/form";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { usePersistedStore } from "@/stores/persisted-store";

const FormSchema = z.object({
    name: z.string({required_error: 'Name is required'}),
    occupation: z.string({required_error: 'Occupation is required'})
})

const PersistedForm = () => {

  const name = usePersistedStore(state => state.name);
  const occupation = usePersistedStore(state => state.occupation);
  const updateName = usePersistedStore(state => state.updateName);
  const updateOccupation = usePersistedStore(state => state.updateOccupation);
  const update = usePersistedStore(state => state.update);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: name,
      occupation: ''
    }
  });

  const onFormSubmitHandle = (formdata : {name: string, occupation: string}) => {
    console.log("Form data: ", formdata);
    update(formdata.name, formdata.occupation);
  };
  return (
    <>
      <Card>
        <CardHeader>
            <h4>Persisted Form</h4>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onFormSubmitHandle)} className="space-y-4">
            <FormField
              name="name"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <input
                    type="text"
                    {...field}
                    placeholder="What is your name?"
                     className="p-4 rounded shadow"
                  />
                </FormItem>
              )}
            />
            <FormField
              name="occupation"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <input
                    type="text"
                    {...field}
                    placeholder="What is your occupation?"
                    className="p-4 rounded shadow"
                  />
                </FormItem>
              )}
            />
            <Button type="submit" className="cursor-pointer" variant={'default'}>Persist</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default PersistedForm;
