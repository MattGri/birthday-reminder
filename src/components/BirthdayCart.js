import { useState } from 'react';
import styled from 'styled-components';
import { birthdayPersons } from './birthdayPersons';

const Container = styled.div`
  background-color: #fff;
  width: 450px;
  padding: 30px 0px 25px 0px;
  margin: 10px auto;

  @media (max-width: 490px) {
    width: 90%;
  
  }
`;

const Wrapper = styled.div`
  margin-left: 35px;

  @media (max-width: 460px) {
    margin-left: 0px;
  }
`;

const Title = styled.h1`
  margin-bottom: 35px;

  @media (max-width: 460px) {
    font-size: 20px;
    text-align: center;
  }
`;

const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 460px) {
    justify-content: center;
  }
`;

const ProfilePhoto = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

const NameAgeBox = styled.div`
  margin-left: 15px;
`;

const Clear = styled.button`
  background-color: #f28ab2;
  cursor: pointer;
  color: #fff;
  border: none;
  display: block;
  margin: 0 auto;
  font-size: 24px;
  padding: 15px 150px;
  border-radius: 20px;

  @media (max-width: 460px) {
    width: 50%;
    padding: 15px 50px;
  }
`;

const BirthdayCart = () => {
  const [persons, setPersons] = useState(birthdayPersons);

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{persons.length} birthdays today</Title>
          {persons.map(({ id, img, name, age }) => {
            return (
              <>
                <WrapperBox key={id}>
                  <ProfilePhoto src={img} alt="whatever" />
                  <NameAgeBox>
                    <h3>{name}</h3>
                    <p>{age}</p>
                  </NameAgeBox>
                </WrapperBox>
              </>
            );
          })}
        </Wrapper>
        <Clear onClick={() => setPersons([])}>Clear All</Clear>
      </Container>
    </>
  );
};

export default BirthdayCart;
