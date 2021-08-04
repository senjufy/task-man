import React, {useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import {Link} from "react-router-dom"
import {
    RouteComponentProps
} from "react-router-dom";
type TParams = { title?: string, desc?: string}

function EditNotes({match} : RouteComponentProps<TParams>) {
    let editTitle = match.params.title
    let editDesc = match.params.desc
    const [description, setDescription] = useState(editDesc)

    const getDesc = (e : any) => {
        setDescription(e.target.value)
    }

    const addTask = () => {
        axios.put(`http://localhost:8000/api/todo/${editTitle}?desc=${description}`)
        .then(res => console.log(res))
    };

    return (
        <Main>
            <Container>
                <h1>Edit Task</h1>
                <Items>
                    <Title>
                        <InputTitle value={editTitle} placeholder="Title"/>
                    </Title>
                    <TextArea>
                        <TextAreaInput value={description} placeholder="Add Description" onChange={getDesc}/>
                    </TextArea>
                </Items>
                <Link to="/">
                    <Submit onClick={addTask}>
                        Submit
                    </Submit>
                </Link>
            </Container>
        </Main>
    )
}

export default EditNotes

const Main = styled.div`
    background-color: #99989889;
    height: 100vh;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    position: relative;
    font-family: 'Assistant', sans-serif;
    width: 100%;
    height: auto;
`
const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.div`
    background-color: #ec9a4e;
    padding: 10px;
`

const InputTitle = styled.input`
    border: none;
    font-size: 1.5em;
    text-align: center;
    font-family: 'Assistant', sans-serif;
    width: 600px;
    background-color: #3498db;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
`

const TextArea = styled.div`
    background: #fff;
    margin: 40px;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 40px;
`
    
const TextAreaInput = styled.textarea`
    background: #ecf0f1;
    width: 500px;
    height: 200px;
    padding: 30px;
    border: none;
    resize: none;
    border-radius: none;
    font-family: 'Assistant', sans-serif;
    font-size: 1.2em;
    transition: all 0.2s ease-in;

    :focus {
        outline: none;
    }
`
const Submit = styled.button`
    font-family: 'Assistant', sans-serif;
    font-weight: bold;
    height: 40px;
    width: 105px;
    background: #ec9a4e;
    color: white;
    float: right;
    font-size: 1.5em;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin-top: 10px;
    border: none;

    :focus {
        outline: none;
    }

    :hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.13);
    }
`