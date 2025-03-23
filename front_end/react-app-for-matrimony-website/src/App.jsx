import Learn from './Properties/Learn'


function App() {
  const features =[10, 20, 30]
  const featuresObj ={a:1, b:2, c:"amazon", d:"facebook"}
  return (
    <>
      <div className="propDisplay">
        <Learn title="Properties In React" desc="This is a demo on using properties in React" price="30K" features={features} featuresObj={featuresObj}></Learn>
        <Learn title="React Props demo" desc="React demo app for illustrating Props concept" price={25000} ></Learn>
      </div>
    </>
  );
}

export default App
