import './Learn.css'
export default function Learn({title, desc, price, features=[1,2,3], featuresObj={a:10,b:"amazon"}}){
    const amma = features.map((feature) => <li>{feature}</li>);
    return (<div className="learnDiv">
        <h4 className="head1">{title}</h4>
        <h6 className="desc">{desc}</h6>
        <h6 className="desc">{price}</h6>
        <p>{amma}</p>
    </div>);
}