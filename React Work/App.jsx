const container=document.getElementById('container');
// console.log(container)
const root=ReactDOM.createRoot(container);
const h2=React.createElement("h2",{style:{background:'brown',color:'white',paddingLeft:'450px'}},"Web Development Profile");
const image=React.createElement("img",{src:"https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",style:{background:'grey',height:'100px',width:'100px',borderRadius:'50%'}});
const myname=React.createElement("h3",{},"Raj Nandini Soni");
const div=React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'100px',background:'#e47aa8'}},image,myname);
const line=React.createElement("hr",{})
const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul=React.createElement("ul",{style:{background:'black',color:'white'}},li1,li2,li3);
const wrapper=React.createElement('div',{},h2,div,line,ul);

//JSX
const h21=<h2>Welcome to react Development</h2>
const li4=<li>Angular</li>;
const li5=<li>Vue JS</li>;
const ul1=<ul>{li4} {li5}</ul>
const container1=(
    <div>
        {wrapper} {h21} {ul1} 
    </div>
)
root.render(container1);