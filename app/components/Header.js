
import { Navigation } from "./Navigation"


const navigation =[
    {label:"Home", href:"/"},
    {label:"Contacts", href:"/contacts"},
    {label:"About", href:"/about"},
]


const Header = () =>{
    return(
        <header >
            <Navigation navLinks={navigation}/>
        </header>
    )
}
export{Header}