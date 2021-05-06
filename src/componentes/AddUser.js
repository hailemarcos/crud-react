import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup >
        <Label>Adcionar Filme</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Nome do Filme" required></Input>
      </FormGroup>
      <Button className="btn btn-dark mr-1" type="submit">Adcionar</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancelar</Link>
    </Form>
  )
}