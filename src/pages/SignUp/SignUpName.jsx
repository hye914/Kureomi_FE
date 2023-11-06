import React, { useState } from "react";
import { Container, Title, SubTitle, ButtonNext, Input } from "./Style";
import { Link } from "react-router-dom";

function Start() {
  const [name, setName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적

  const handleNameChange = (event) => {
    setName(event.target.value); // 입력된 이름을 상태 변수에 업데이트
  };

  return (
    <Container>
      <Title>이름을 알려주세요</Title>
      <SubTitle>추후에 포토꾸러미 홈의 이름이 될 거에요</SubTitle>
      <Input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleNameChange}
      />
      <ButtonNext>
        <Link to="/signupemail">
          <h1>다음</h1>
        </Link>{" "}
      </ButtonNext>
    </Container>
  );
}

export default Start;