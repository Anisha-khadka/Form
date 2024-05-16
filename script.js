function submitForm(event) {
  event.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let selectedgender = null;
  if (gender) {
    selectedgender = gender.value;
  }
  let message = document.getElementById("inputtext").value;

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    number === "" ||
    selectedgender === "" ||
    message === null
  ) {
    alert("Please fill all fields");
  } 
  else if(number.length<10){
    alert("Phonenumber should be of length 10")
  }
  
  
  
  
  else {
    const obj = {
      fname: fname,
      lname: lname,
      email: email,
      number: number,
      gender: selectedgender,
      message: message,
    };
    localStorage.setItem("contact", JSON.stringify(obj));
    alert("success");
    document.getElementById("myForm").reset();
  }

}
