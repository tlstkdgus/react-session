//Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  text-align: center;
  @media all and (min-width:1000px) and (max-width:1300px) { 
    background-color: lightblue;
  } 
 
  @media all and (min-width:700px) and (max-width:999px) { 
    background-color: lightgreen;
  } 

  @media all and (min-width:500px) and (max-width:699px) {
    background-color: lightcoral;
  } 
 
  @media all and (max-width:499px) {
    background-color: lightcyan;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const BlockButton = styled.button`
  background-color: lightpink;
  color: black;
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
`;


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {/* 버튼 만들자리 */}
      <BlockButton onClick={() => navigate('/')}>로그인</BlockButton>
      <BlockButton onClick={() => navigate('/register')}>회원가입</BlockButton>
    </Container>
  );
}

export default Login;
