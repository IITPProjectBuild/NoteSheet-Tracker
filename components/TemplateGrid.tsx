import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const TemplateBox = styled.div`
  width: 150px;
  height: 200px;
  background-color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
`;

const TemplateGrid: React.FC = () => (
  <GridContainer>
    <TemplateBox>Template 1</TemplateBox>
    <TemplateBox>Template 1</TemplateBox>
    <TemplateBox>Template 1</TemplateBox>
    <TemplateBox>Template 1</TemplateBox>
    <TemplateBox>Template 1</TemplateBox>
    <TemplateBox>Template 1</TemplateBox>
  </GridContainer>
);

export default TemplateGrid;
