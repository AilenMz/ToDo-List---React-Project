import React from 'react'
import styled from 'styled-components'
import allColors from '../styles/colors'
import ColorBox from './ColorBox'
import {generate as id} from 'shortid'

const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${allColors.mainColor};
    background: none;
    outline: none; //para que no se haga un borde cuando se hace click
    color: ${allColors.mainColor};
    width: 300px;
    font-size: 20px;
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${allColors.mainColor};
    color:${allColors.mainColor};
    border-radius: 2px;
    padding: 0.3rem 0.4rem;
    cursor: pointer;
    font-size: 15px;
    margin: 10px;
    outline: none;

     &:hover{
        opacity: 80%;
     }
`
const ColorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin: 0 auto .5rem;
`

const FormTask = ({handleChangeColor, handleSubmit, colorSelected})=> (
    <form onSubmit={handleSubmit}>
        <Input name='title' type='text'/>
        <ColorContainer>
            {
            allColors.colors.map(color => (
                <ColorBox 
                    color={color} 
                    handleChangeColor={handleChangeColor}
                    key={id()}
                    isChecked={colorSelected === color}
                />
            ))
            }
        </ColorContainer>
        <Button>Add Task</Button>
    </form>
)

export default FormTask

