"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";

const Form = () => {
  const { conversatonId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversatonId,
    });
  };

  return (
    <div
      className="
    py-4
    px-4
    bg-white
    border-t
    flex
    items-center
    gap-2
    lg:gap-4
    w-full
  "
    >
      <HiPhoto size={30} className="text-sky-500"/>
    </div>
  );
};

export default Form;
