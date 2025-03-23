import User from "../users/User";
import './UserRender.css';

export default function UserRender({Person}){
    if (!Person || !Array.isArray(Person) || Person.length === 0) {
        return <div>{Person === null ? "Loading..." : "No users to display."}</div>; // Handle null, undefined, not array, or empty array cases
    }

    const list = Person.map(person =>{
        return <User person={person}/> ;
    });

    return <div className="demo">{list}</div>;
}