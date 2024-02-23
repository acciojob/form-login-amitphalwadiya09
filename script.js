function getFormvalue() {
    //Write your code here
	let formElements = document.forms["form1"].elements;
    
    let first_name = formElements["fname"].value;
    let last_name = formElements["lname"].value;
    
    let fullname = first_name + " " + last_name;
    alert(fullname);

}
