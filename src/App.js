import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Имя</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>Это поле обязательно для заполнения</span>}
      </div>

      <div>
        <label htmlFor="lastName">Фамилия</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>Это поле обязательно для заполнения</span>}
      </div>

      <div>
        <label htmlFor="gender">Пол</label>
        <select {...register("gender", { required: true })}>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
          <option value="other">Другой</option>
        </select>
        {errors.gender && <span>Это поле обязательно для заполнения</span>}
      </div>

      <div>
        <label htmlFor="birthYear">Год рождения</label>
        <input {...register("birthYear", { required: true, pattern: /^\d{4}$/ })} />
        {errors.birthYear && <span>Введите год рождения в формате "гггг"</span>}
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;