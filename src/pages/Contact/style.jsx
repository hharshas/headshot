import styled from "styled-components";

////// FORM

export const FormContainerSubmit = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  margin-top: 5rem;
  overflow: hidden;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
`;

///////////////
//SINGLE INPUT

export const LinePosition = styled.div`
  height: 1px;
  background: #D53F41;
  width: 100%;
  opacity: 0.5;
`;

export const InputStyle = styled.input`
  width: 29.1rem;
  border: none;
  background-color: #000000;
  color: #F5F0EC;
  height: 6.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  // color: #626262;
  outline: none;
  cursor: pointer;
  box-shadow: none;
`;

export const LabelStyle = styled.label`
  position: relative;
`;

export const PlaceholderPosition = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
`;

export const PlaceholderStyle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #D53F41;
`;

export const TextAreaStyle = styled.textarea`
  width: 29.1rem;
  height: 12.6rem;
  border: none;
  background-color: #000000;
  color: #000000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: black;
  outline: none;
  cursor: pointer;
  resize: none;
`;

export const ButtonSubmit = styled.button`
  height: 5.6rem;
  width: 15.2rem;
  color: #333136;
  background: #D53F41;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  border: none;
  border-radius: 15px;
  margin-top: 3.9rem;
`;

export const WrapperFormikError = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormikErrorStyle = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 2.6rem;
  // background-color: #000000;
  color: #F5F0EC;
  margin-right: 0.8rem;
`;

export const WrapperContact = styled.section`
  margin: 0 auto;
//   background: #e7816b;
  width: 100%;
  height: 76.4rem;
  overflow: hidden;
`;

export const TextContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SVGPositionContact = styled.div`
  position: absolute;
  top: 0;
  right: -90%;
  z-index: 1;
`;
////

export const TitleContact = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: black;
  margin-top: 7.2rem;
  z-index: 4;
`;

export const DescriptionContact = styled.span`
  margin-top: 2.4rem;
  font-size: 5rem;
  font-weight: 400;
  line-height: 10rem;
  text-align: center;
  width: 75%;
  z-index: 4;
`;
