import React, { useState } from "react";


function App() {

const [headingText , setHeadingText] = useState("");
const [isMousedOver , setMousedOver] = useState(false);
const [fullName , setFullName] = useState({
 fName: "",
 lName: "",
 email: ""
});


function updateName(event) {
// const newValue = event.target.value;
// const inputName = event.target.name;

const {value, name,} = event.target

// console.log(newValue);
// console.log(inputName);

// if (inputName === "fName") {
//   setFullName({fName: newValue})
// } else if (inputName === "lName") {
//   setFullName({lName: newValue})
// }
  
setFullName(prevValue => {
  return {
    ...prevValue,
    [name]: value
  }









  // if (name === "fName") {
  // return {
  //   fName: value,
  //   lName: prevValue.lName,
  //   email: prevValue.email
  // }
  // } else if (name === "lName") {
  //   return {
  //     fName: prevValue.fName,
  //     lName: value,
  //     email: prevValue.email }

  //   } else if (name === "email") {
  //     return {
  //       fName: prevValue.fName,
  //       lName: prevValue.lName,
  //       email: value
  //     };
  //   }
  })

};

 function handleMouse() {
  setMousedOver(true);
 }

 function mouseOut() {
  setMousedOver(false);
 }


  return (
    <div className="container">

      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <p> {fullName.email} </p>

       <form>
      <input 
      name="fName"
      onChange={updateName}
      placeholder="First Name" 
      className="form-control"
      value={fullName.fName} ></input>

      <input 
      name="lName"
      onChange={updateName}
      placeholder="Last Name" 
      className="form-control"
      value={fullName.lName} ></input>

     <input 
      name="email"
      onChange={updateName}
      placeholder="Email ID" 
      className="form-control"
      value={fullName.email} ></input>

      

      <button type="button" className="btn btn-block btn-success btn-lg btn-group-vertical" 
      style={{ backgroundColor: isMousedOver ? "Black" : "Green"}}
      // onClick={handleClick}
      onMouseOver={handleMouse}
      onMouseOut={mouseOut}
      >Submit</button>
      </form>
    </div>
  );
}

export default App;
