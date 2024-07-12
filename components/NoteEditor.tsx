import React from 'react';
import styled from 'styled-components';

const NoteEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  height: calc(100vh - 70px); // adjust based on header height
`;

const UpperText = styled.h2`
  margin-bottom: 20px;
  color: #4267b2;
`;

const InputForm = styled.div`
  width: 80%;
  height: 70%;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ccc;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.review {
    background-color: #28a745;
  }

  &.cancel {
    background-color: #dc3545;
  }
`;

const NoteEditor: React.FC = () => (
  <NoteEditorContainer>
    <UpperText>FILL IN THE DETAILS</UpperText>
    <InputForm>INPUT FORM</InputForm>
    <ButtonContainer>
      <Button className="review">REVIEW</Button>
      <Button className="cancel">CANCEL</Button>
    </ButtonContainer>
  </NoteEditorContainer>
);

export default NoteEditor;
