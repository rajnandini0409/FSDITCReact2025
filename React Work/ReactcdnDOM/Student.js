const m=document.getElementById('container');
console.log(m);
const root=ReactDOM.createRoot(m);
const h2=React.createElement("h2",{style:{background:'brown',color:'white'}},"Profile page");
const myName=<h3>Name: Raj Nandini soni </h3>
const roll=<h3>Roll Number: 185</h3>
const branch=<h3>Branch: IT</h3>
const section=<h3>Section: C</h3>
const college=<h3>College: ABES Engineering College</h3>
const container1=(
    <div style={{
  height: "400px",
  width: "400px",
  border: "5px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}} >
        {h2} {myName} {roll} {branch} {section} {college} 
    </div>
)
root.render(container1);