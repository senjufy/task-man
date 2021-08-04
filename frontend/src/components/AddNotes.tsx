import React, {useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import {Link} from "react-router-dom"
import {
    RouteComponentProps
} from "react-router-dom";
type TParams = { param?: string }

function AddNotes({match} : RouteComponentProps<TParams>) {
    let param = match.params.param
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const getDesc = (e : any) => {
        setDescription(e.target.value)
    }

    const getTitle = (e : any) => {
        setTitle(e.target.value)
    }

    const addTask = () => {
        param ?
            axios.put(`http://localhost:8000/api/todo/${param}?desc=${description}`)
            .then(res => console.log(res))
        :
            axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': description })
            .then(res => console.log(res))
    };

    return (
        <Main>
            <Container>
                <h1>{param ? "Edit Task" : "Add Task"}</h1>
                <Items>
                    <Title>
                        <InputTitle value={param} placeholder="Title" onChange={getTitle}/>
                    </Title>
                    <TextArea>
                        <TextAreaInput placeholder="Add Description" onChange={getDesc}/>
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

export default AddNotes

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
    background-color: #3498db;
    padding: 10px;
`

const InputTitle = styled.input`
    border: none;
    font-size: 1.5em;
    text-align: center;
    font-family: 'Assistant', sans-serif;
    width: 600px;
    background-color: #2980b9;
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
    background: #2980b9;
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