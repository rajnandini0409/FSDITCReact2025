// const div=document.getElementsByTagName('div'); 
// div[0].innerText="hell0 world"
// div[0].style.backgroundColor="red"
// div[0].style.Color="green"
// console.log(div)

// const container=document.getElementsByClassName("container")
// console.dir(container)
// container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


// const h2=document.createElement('h2')
// h2.innerText='ABES'
// h2.style.backgroundColor="#212121"
// h2.style.color="#fff"
// container[0].appendChild(h2)

// const img=document.createElement('img')
// img.src="https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
// img.setAttribute('height','200px')
// img.setAttribute('width','200px')
// container[0].appendChild(img)

//  const button=document.getElementById('btn')
//  document.getElementById('disp').innerText="Loading image........"
//  button.addEventListener('click',function(){
//     const pic=document.createElement('img')
//     pic.src="https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=1366&height=768&xhint=1016&yhint=1024&crop=true"
//     pic.setAttribute('height',"200px")
//      pic.setAttribute('width',"200px")

//      document.getElementById('disp').appendChild(pic)
//       const button=document.getElementById('btn')


//  })
// function msg(){
//     // return "hello , i am working on DOM"
//     // alert('hi i am using dom')    
//     const name=document.createElement('h3')
//     name.innerText="ABES"
//     name.style.color="grey"
//     name.style.backgroundColor="black"
//     console.log(name)
//     container[0].appendChild(name)
// }
// button.addEventListener('click',msg)

// Blocking and Non-blocking code

//  const button=document.getElementById('btn');
//  function longData(){
//    console.log("start");
//    for(i=0;i<1000000000;i++){
//       console.log(i);
//    }
//    console.log("End");
//  }
//  button.addEventListener('click',longData);

// console.log("start")
// setTimeout(()=>{
//    console.log("Welcome to FSD")},2000)
//    console.log("end")

//Callback function
// function greetmsg(myname){
//    return "hiii,"+myname+" welcome to abes college";
// }
// function msgHandler(msg,clbk){
//    // console.log(msg);
//    const data=clbk(msg);
//    return data;
// }
// const student=["rahul","Aman","Vansh"];
// student.forEach((name)=>{console.log(
//    msgHandler(name,greetmsg))})
// const completemsg=msgHandler("Hiii",greetmsg)
// console.log(completemsg)

//PROMISES
const mypromise= new Promise((resolve,reject)=>{
   const password="28911515";
   if(password.length>7){
      resolve("Password length is ok");
   }
   else{
      reject("Password length is not as per our policy.")
   }
});
// mypromise.then((result)=>{
//    console.log(result)
// })
// .catch((err)=>{
//    console.log(err)
// })
// .finally(()=>{
//    console.log("All the resources have been closed successfully")
// })
async function handleData(){
   // const result=mypromise;
  const data= await mypromise;
  console.log(data)
}
handleData();