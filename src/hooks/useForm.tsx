import { ChangeEvent, useState } from "react";

export const useRccForm = <T extends Object>(data?: T) => {
  const [form, setForm] = useState<T>((data as T) || {});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return { form, handleChange, setForm };
};
