import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export function Step1() {
  const { register, handleSubmit, erros } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/step2');
  };

  return (
    <div>
      <h2>Step 2</h2>
      <form>
        <input ref={register} name="firstName" type="text" placeholder="First Name" />
        <input ref={register} name="firstName" type="text" placeholder="First Name" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
