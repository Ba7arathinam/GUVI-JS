import './App.css';

function App() {
  return (
    <div className="App">
     <DashBoard/>
    </div>
  );
}
function DashBoard() {
  return(
  <div>
      <h1>Welcome to DashBoard🤩</h1>
    <SummaryBox/>
  </div>
  )
}
function SummaryBox() {
  const data={
    text:"Number Of Sales",
    number:568,
    percent:0.7,
    performance:"up",
    time:"Last month",
    type:"money",
  }
  return(
    <div className="summary-box-container">
      <p className="summary-box-text">{data.text}</p>
      <h2 className="summary-box-number">{data.number}</h2>
      <div className="summary-box-time-container">
      <p>{data.time}</p>
      <p>{data.percent}%</p>
      </div>
    </div>
  )
}
export default App;