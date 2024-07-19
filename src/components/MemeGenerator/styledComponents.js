// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;

`
export const FormContainer = styled.form`
display:flex;
flex-direction:column;
padding:40px;
width:60%;

`
export const InputBoxContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:12px;
`

export const LabelElement = styled.label`
color:#1e293b;
font-family:"Roboto";
font-size:24px;
`

export const InputElement = styled.input`
width:35%;
color:#000000;
font-size:15px;
padding:8px;
margin-top:10px;
outline:none;
`

export const Heading = styled.h1`
color: #35469c;
font-family:"Roboto";
`
export const SelectElement = styled.select`
width:35%;
padding:8px;
margin-top:10px;
`

export const OptionElement = styled.option``
export const GenerateButton = styled.button`
background-color: #0b69ff;
color:#ffffff;
font-weight:600;
padding:10px 15px 10px;
font-size:15px;
border:2px solid #0b69ff;
border-radius:5px;
width:20%;
margin-top:15px;
`
export const MemeContainer = styled.div`

background-image: url(${props => props.backgroundImage});
min-height:50vh;
background-size:cover;
padding:12px 18px 12px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
export const ParaGraphElement = styled.p`
color:#ffffff;
font-size:24px;
font-family:"Roboto";
font-size:${props => props.fontSize}px;
`
