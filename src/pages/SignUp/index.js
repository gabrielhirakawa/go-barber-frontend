import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

import { signUpRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve conter no minimo 6 caracteres")
    .required("A senha é obrigatória"),
  name: Yup.string().required("O nome é obrigatório")
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo *"></Input>
        <Input name="email" type="email" placeholder="Seu e-mail *"></Input>
        <Input
          name="password"
          type="password"
          placeholder="Sua senha *"
        ></Input>
        <button type="submit">Registrar</button>
        <Link to="/">Já tem conta? acesse</Link>
      </Form>
    </>
  );
}
