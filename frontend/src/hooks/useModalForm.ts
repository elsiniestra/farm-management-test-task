import { Form } from 'antd';
import { useState } from 'react';

type useModalFormProps<T> = {
  onSubmit: (values: T) => Promise<T | void>;
};

interface Errors {
  [key: string]: string;
}

export const useModalForm = <T>(props: useModalFormProps<T>) => {
  const [form] = Form.useForm<T>();
  const [open, setOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors | null>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleChange = () => {
    setErrors(null);
  };

  const handleSubmit = (values: T) => {
    props
      .onSubmit(values)
      .then(() => {
        setOpen(false);
      })
      .catch((req) => {
        setErrors(req.response.data);
      });
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  return {
    form,
    errors,
    open,
    showModal,
    handleSubmit,
    handleChange,
    handleCancel,
  };
};
