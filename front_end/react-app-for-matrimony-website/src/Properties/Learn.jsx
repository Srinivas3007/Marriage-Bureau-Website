import './Learn.css'
export default function Learn({title, desc, price}){
    return (<div className="learnDiv">
        <h4 className="head1">{title}</h4>
        <h6 className="desc">{desc}</h6>
        <h6 className="desc">{price}</h6>
    </div>);
}