import React from 'react'
import styled from "styled-components"
import AddIcon from "@material-ui/icons/Add";
import {Link} from "react-router-dom"

function Header() {
    return (
        <Container>
            <Link to="/">
                <HeaderText>Tasks</HeaderText>
            </Link>
            <Link to="/add">
                <HeaderButton>
                    <Icon>
                        <AddIcon/>
                    </Icon>
                    Add
                </HeaderButton>
            </Link>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5555f1eb;
    height: 70px;
`

const HeaderText = styled.h1`
    color: white;
    margin-left: 40px;
    font-size: 2.5em;
    float: left;
    cursor: pointer;
    font-weight: bold;
`

const HeaderButton = styled.div`
    margin-right: 40px;
    display: flex;
    font-family: 'Assistant', sans-serif;
    height: 40px;
    width: 100px;
    background: rgb(255,255,255);
    border-radius: 4px;
    color: #3498db;
    float: right;
    font-weight: bold;
    font-size: 23px;
    border-radius: 2px;
    padding-top: 7px;
    text-align: center;
    transition: box-shadow 0.2s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    :hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.13);
    }
`

const Icon = styled.div`
    color: #3498db;
    margin-top:2px;
    margin-left: 2px;
`
