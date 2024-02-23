function getFormvalue() {
    //Write your code here
	let inp=document.querySelector("input")
	let first_name=inp[0].value;
	let last_name=inp[1].value;
	let fullname=first_name+" "+last_name;
	alert(fullname)

}
