import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconArrowLeft from "./icon/IconArrowLeft";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 48px;
  padding: 0 16px;
`;
const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 32px;
  margin-left: 20px;
  padding: 7px 16px;
  border: none;
  border-radius: 32px;
  background-color: #f2f2f2;
  font-size: 1.4rem;
  font-family: "LINESeedKR-Bd";

  ::placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
  }
`;
const BackBtnIcon = styled(IconArrowLeft)`
  width: 22px;
  height: 22px;
`;

export default function SearchNav() {
  return (
    <Container>
      <Back>
        <BackBtnIcon />
      </Back>
      <Input placeholder="계정 검색" />
    </Container>
  );
}
