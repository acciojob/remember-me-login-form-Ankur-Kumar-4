//your JS code here. If required.
const submit = document.getElementById("submit");
const check = document.getElementById("checkbox");

submit.addEventListener("click",()=>{
	alert(check.value);
});