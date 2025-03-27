import './User.css';
export default function User({person}){
    if(person.name ===null){
        return null;
    }
    else{
        const styles={"height":"200px", "width":"auto"}
        return (
            <div className={person.id.timestamp} id="demo1">
                <img src="./src/assets/girl2.jpg" style={styles}/>
                <h1 >{person.name}</h1>
                <h2>{person.email}</h2>
                <h3>{person.phone}</h3>
                <h4>{person.password}</h4>
            </div>
        );
    }
}