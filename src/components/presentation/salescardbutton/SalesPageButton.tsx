import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";
import { PageTheme } from "../themeconfig/ThemeConfig";
const SalesButton = styled.button`
    background-color: transparent;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    border: 0px;
    cursor: pointer;

    a{
        color: ${PageTheme.primaryTextColor};
        position: relative;
        padding: 0 2px;
        display: inline-flex;
        align-items: center;
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-decoration: none;
    }
    a:after{
        background-color: ${PageTheme.primaryTextColor};
        position: absolute;
        left: 0;
        bottom: 0px;
        height: 1.5px;
        width: 0;
        content: "";
        transition: 0.3s;
    }
    a:hover{
        color: ${PageTheme.primaryTextColor};

        span{
            font-size: 22px;
        }
    }
    a:hover:after{
        width: 100%;
    }

    span{
        display: flex;
    }
    
`;

export function SalesPageButton(props: { children: string,url:string }) {
    return (
        // <a href={props.url} target="_blanck">
        <SalesButton >
            <a target="_blanck" href={props.url}>
                {props.children}
                <span><GrFormNextLink /></span>
            </a>
        </SalesButton>
    )
}