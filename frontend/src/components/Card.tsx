import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios"
import {Link} from "react-router-dom"

interface Props {
    title: any | string;
    desc: any | string;
}

function Card({title, desc} : Props) {
    const deleteTask = (title : any) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data))
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Detail>{desc}</Detail>
            <Delete>
                <DeleteIcon onClick={() => deleteTask(title)}/>
            </Delete>
            <Link to={"/edit/" + title}>
                <Edit>
                    <EditIcon/>
                </Edit>
            </Link>
        </Container>
    )
}

export default Card

const Container = styled.div`
    display: -webkit-flex;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    height: 200px;
    width: 200px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 40px;
    text-align: left;
    overflow-x: hidden;
    overflow-y: hidden;
    font-family: 'Assistant', sans-serif;
    border-radius: 4px;

    :hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.13);
        margin-top: 30px;
        margin-bottom: 50px;
    }
`

const Title = styled.div`
    width: 270px;
    color: white;
    font-size: 1.25em;
    font-weight: bold;
    background: #3498db;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    text-align: center;
    overflow-y: hidden;
`
const Detail = styled.div`
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-flex-direction: row;
    flex-direction: row;
    padding-top: 30px;
    width: 200px;
    height: 200px;
    font-size: 1em;
    white-space: pre-wrap;
    overflow: hidden;
`

const Delete = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    background: #c0392b;
    color: white;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    text-align: center;
    font-size: 1.5em;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-family: sans-serif;
    cursor: pointer;

    :hover {
        background: #e74c3c;
        color: white;
        transform: rotate(180deg);
    }
`

const Edit = styled.div`
    float: right;
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #2980b9;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    text-align: center;
    font-size: 1.5em;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-family: sans-serif;
    cursor: pointer;

    :hover {
        color: #3498db;
        transform: rotate(90deg);
    }
`
