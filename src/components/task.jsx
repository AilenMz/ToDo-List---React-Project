import React from 'react'
import styled from 'styled-components'

const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    background-color: ${({color})=> color};
    justify-items: start;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 300px;
    margin: 1rem auto;
    border-radius: 5px;
`
const TaskButton = styled.button`
    font-size: .9rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: .3rem .5rem;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover{
        background-color: white;
        color: black;
        opacity: 90%;
    }
`
const TaskText = styled.p`
    color: white;
    text-decoration: ${({done})=> done ? 'line-through' : 'none'};
`
const Task = ({title, color, done, handleCompleteTask, key, handleDeleteTask})=>(
    <TaskContainer color={color}>
        {/* <input type="checkbox" onChange={()=>handleCompleteTask(key)}/> */}
        <input type="checkbox" onChange={handleCompleteTask} checked={done}/>
        <TaskText done={done}>{title}</TaskText>
        <TaskButton onClick={handleDeleteTask}>Delete</TaskButton>
    </TaskContainer>
)

export default Task