import { HeaderProps } from "../model/models";

export function Header(props: HeaderProps) {
    
    return (
    <header>
    <h1>{props.title}</h1>  
    </header>);
    }