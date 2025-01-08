import { HeaderProps } from "../model/models";
import { SearchBar } from "./find";

export function Header(props: HeaderProps) {
    
    return (
    <header>
    <h1>{props.title}</h1>
    <SearchBar />   
    </header>);
    }