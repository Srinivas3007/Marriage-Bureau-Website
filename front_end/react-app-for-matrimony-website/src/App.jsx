import Learn from './Properties/Learn'


function App() {
  return (
    <>
      <div className="propDisplay">
        <Learn title="Properties In React" desc="This is a demo on using properties in React" price="30K"></Learn>
        <Learn title="React Props demo" desc="React demo app for illustrating Props concept" price={25000}></Learn>
      </div>
    </>
  );
}

export default App
