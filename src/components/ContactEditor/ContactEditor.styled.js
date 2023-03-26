import styled from "styled-components";

export const Form = styled.form`
border: 1px solid;
padding: 30px`

export const NameLabel = styled.label`
display: flex;
gap: 27px;
margin-bottom: 15px;
font-weight: bold`;

export const NameInput = styled.input`
border-radius: 12px;
padding-left: 10px;
border: 1px`;

export const NumberLabel = styled.label`
display: flex;
gap: 10px;
font-weight: bold;
margin-bottom: 15px;`;

export const NumberInput = styled.input`
border-radius: 12px;
padding-left: 10px;
border: 1px`;

export const Button = styled.button`
margin: 0 auto;
display: block;
height: 30px;
padding: 10px;
background-color: antiquewhite;
border: none;
border-radius: 12px;
:hover {
    background-color: rgba(58, 166, 167, 0.8);
    cursor: pointer;
}`