// ************** form validation script *************

const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener('submit', e => {
	e.preventDefault();
	validationInputs();
	e.target.reset();


});

	// input validation 
	const validationInputs = () => {
			// get value from input 
		const userNameVal = userName.value.trim();
		const emailVal = email.value.trim();
		const passwordVal = password.value.trim();
		const password2Val = password2.value.trim();

		// check input value

		if (userNameVal === "") {
			setError(username,"your user name is required");
		}else{
			setSuccess(username);
		}

		if (emailVal === "") {
			setError(email, "your user E-mail is required");
		}else{
			setSuccess(email);
		}
		if (passwordVal === "") {
			setError(password,"your user Password is required");
		}else{
			setSuccess(password);
		}
		if (password2Val === "") {
			setError(password2,"your user Confirm Password is required");
		}else{
			setSuccess(password2);
		}
	}


	//erro message function 
	
	const setError = (element, message)  => {
		const inputControl = element.parentElement;
		const errorDisplay = inputControl.querySelector(".error");
		inputControl.innerText = message;
		// alert(errorDisplay);

		inputControl.classList.add("error");
		inputControl.classList.remove("success");

	}

	//success message function 
	const setSuccess = (element)  => {
		const inputControl = element.parentElement;
		const errorDisplay = inputControl.querySelector(".error");
		inputControl.innerText = message;
		// alert(errorDisplay);
		inputControl.classList.add("success");
		inputControl.classList.remove("error");
	}