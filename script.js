// document.addEventListener('DOMContentLoaded', function() {
//     const toggleFormBtn = document.getElementById('toggle-form');
//     const loginForm = document.getElementById('login-form');
//     const signupForm = document.getElementById('signup-form');
    
//     // Toggle between Login and Signup
//     toggleFormBtn.addEventListener('click', function() {
//         if (loginForm.classList.contains('active')) {
//             loginForm.classList.remove('active');
//             signupForm.classList.add('active');
//             toggleFormBtn.textContent = 'Login'; // Change button text to "Login"
//         } else {
//             signupForm.classList.remove('active');
//             loginForm.classList.add('active');
//             toggleFormBtn.textContent = 'Signup'; // Change button text to "Signup"
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const toggleFormBtn = document.getElementById('toggle-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignupLink = document.getElementById('switch-to-signup');
    const switchToLoginLink = document.getElementById('switch-to-login');
    const closeFormBtn = document.getElementById('close-form');
    const formContainer = document.querySelector('.form-container');

    // Toggle between login and signup forms
    function toggleForm() {
        if (loginForm.classList.contains('active')) {
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
            toggleFormBtn.textContent = 'Login';
        } else {
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
            toggleFormBtn.textContent = 'Signup';
        }
    }

    // Close form container
    function closeForm() {
        loginForm.classList.remove('active');
        signupForm.classList.remove('active');
        formContainer.classList.remove('active'); // Hide the form container
    }

    // Event listener for toggle button
    toggleFormBtn.addEventListener('click', function() {
        formContainer.classList.add('active'); // Show the form container
        toggleForm();
    });

    // Event listener for close icon
    closeFormBtn.addEventListener('click', closeForm);

    // Event listener for "Signup here" link
    switchToSignupLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        toggleFormBtn.textContent = 'Login';
    });

    // Event listener for "Login here" link
    switchToLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        toggleFormBtn.textContent = 'Signup';
    });
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }




//   ---------read more
function show() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
}


// -------for gallary
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// --------------banner








// --- draggable sclider--------


// const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0],
// arrowIcons = document.querySelectorAll(".wrapper i");
// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }
// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });
// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;
//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }
// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }
// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }
// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);
// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);


const carousel1 = document.querySelector(".carousel1"),
firstImg = carousel1.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// Function to calculate margin
const getMargin = (img) => {
    const style = window.getComputedStyle(img);
    return parseInt(style.marginRight) || 0; // Getting right margin value
};

const showHideIcons = () => {
    // Showing and hiding prev/next icon according to carousel1 scroll left value
    let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth; // Getting max scrollable width
    arrowIcons[0].style.display = carousel1.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel1.scrollLeft >= scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + getMargin(firstImg); // Getting first img width & adding dynamic margin
        // If clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel1.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(showHideIcons, 60); // Calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth;
    // If there is no image left to scroll, return
    if (carousel1.scrollLeft >= scrollWidth || carousel1.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // Making positionDiff value positive
    let firstImgWidth = firstImg.clientWidth + getMargin(firstImg);
    // Getting difference value to add or reduce from carousel left to center the middle image
    let valDifference = firstImgWidth - positionDiff;

    if (carousel1.scrollLeft > prevScrollLeft) { // If user is scrolling to the right
        carousel1.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else { // If user is scrolling to the left
        carousel1.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
};

const dragStart = (e) => {
    // Updating global variables value on mouse down/touch start event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel1.scrollLeft;
};

const dragging = (e) => {
    // Scrolling images/carousel to left according to mouse pointer or touch
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel1.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
};

const dragStop = () => {
    isDragStart = false;
    carousel1.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
};

// Add event listeners for drag start, drag move, and drag stop
carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("touchstart", dragStart);

carousel1.addEventListener("mousemove", dragging);  // Restrict event listener to carousel
carousel1.addEventListener("touchmove", dragging);

carousel1.addEventListener("mouseup", dragStop);
carousel1.addEventListener("mouseleave", dragStop); // Stop dragging if mouse leaves the carousel
carousel1.addEventListener("touchend", dragStop);



// ---contact billing----
let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})


// ----captcha-----
// let captchaText = document.getElementById('captcha');
// var ctx = captchaText.getContext("2d");
// ctx.font = "30px Roboto";
// ctx.fillStyle = "#08e5ff";

// let userText = document.getElementById('textBox');
// let submitButton = document.getElementById('submitButton');
// let output = document.getElementById('output');
// let refreshButton = document.getElementById('refreshButton');
// var captchaStr = "";

// let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
//                  'H', 'I', 'J', 'K', 'L', 'M', 'N', 
//                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
//                  'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
//                  'c', 'd', 'e', 'f', 'g', 'h', 'i', 
//                  'j', 'k', 'l', 'm', 'n', 'o', 'p', 
//                  'q', 'r', 's', 't', 'u', 'v', 'w', 
//                  'x', 'y', 'z', '0', '1', '2', '3', 
//                  '4', '5', '6', '7', '8', '9'];
//                  function generate_captcha() {
//                     let emptyArr = [];
                 
//                     for (let i = 1; i <= 7; i++) {
//                         emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
//                     }
                 
//                     captchaStr = emptyArr.join('');
                 
//                     ctx.clearRect(0, 0, captchaText.width, captchaText.height);
//                     ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);
                 
//                     output.innerHTML = "";
//                  }
                 
//                  generate_captcha();
                 
// function check_captcha() {
//     if (userText.value === captchaStr) {
//         output.className = "correctCaptcha";
//         output.innerHTML = "Correct!";
//     } else {
//         output.className = "incorrectCaptcha";
//         output.innerHTML = "Incorrect, please try again!";
//     }
// }
// userText.addEventListener('keyup', function(e) {
//     if (e.key === 'Enter') {
//        check_captcha();
//     }
// });

// submitButton.addEventListener('click', check_captcha);
// refreshButton.addEventListener('click', generate_captcha);

// let captchaCanvas = document.getElementById('captcha');
// let ctx = captchaCanvas.getContext("2d");
// ctx.font = "30px Arial";  // Use Arial if Roboto doesn't load, as it's more universally supported
// ctx.fillStyle = "#08e5ff";  // Text color

// let userText = document.getElementById('textBox');
// let submitButton = document.getElementById('submitButton');
// let output = document.getElementById('output');
// let refreshButton = document.getElementById('refreshButton');
// let captchaStr = "";

// let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
//                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
//                  'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
//                  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', 
//                  '4', '5', '6', '7', '8', '9'];

// function generateCaptcha() {
//     let emptyArr = [];
//     // Generate random 6 character captcha
//     for (let i = 1; i <= 6; i++) {
//         emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
//     }
//     captchaStr = emptyArr.join('');

//     // Clear canvas before drawing new captcha
//     ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    
//     // Draw captcha text in the center of the canvas
//     ctx.fillText(captchaStr, captchaCanvas.width / 6, captchaCanvas.height / 2);

//     output.innerHTML = "";  // Clear previous messages
// }

// // Check the captcha on submit
// function checkCaptcha() {
//     if (userText.value === captchaStr) {
//         output.className = "correctCaptcha";
//         output.innerHTML = "Correct!";
//     } else {
//         output.className = "incorrectCaptcha";
//         output.innerHTML = "Incorrect, please try again!";
//     }
// }

// // Event listeners
// userText.addEventListener('keyup', function(e) {
//     if (e.key === 'Enter') {
//        checkCaptcha();
//     }
// });

// submitButton.addEventListener('click', checkCaptcha);
// refreshButton.addEventListener('click', generateCaptcha);

// // Generate a captcha when the page loads
// window.onload = generateCaptcha;

// const captcha = document.querySelector(".captcha"),
// reloadBtn = document.querySelector(".reload-btn"),
// inputField = document.querySelector(".input-area input"),
// checkBtn = document.querySelector(".check-btn"),
// statusTxt = document.querySelector(".status-text");

// //storing all captcha characters in array
// let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
//                      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
//                      'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//                      't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getCaptcha(){
//   for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
//     let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
//     captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
//   }
// }
// getCaptcha(); //calling getCaptcha when the page open
// //calling getCaptcha & removeContent on the reload btn click
// reloadBtn.addEventListener("click", ()=>{
//   removeContent();
//   getCaptcha();
// });
// checkBtn.addEventListener("click", e =>{
//   e.preventDefault(); //preventing button from it's default behaviour
//   statusTxt.style.display = "block";
//   //adding space after each character of user entered values because I've added spaces while generating captcha
//   let inputVal = inputField.value.split('').join(' ');
//   if(inputVal == captcha.innerText){ //if captcha matched
//     statusTxt.style.color = "#4db2ec";
//     statusTxt.innerText = "Nice! You don't appear to be a robot.";
//     setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
//       removeContent();
//       getCaptcha();
//     }, 2000);
//   }else{
//     statusTxt.style.color = "#ff0000";
//     statusTxt.innerText = "Captcha not matched. Please try again!";
//   }
// });
// function removeContent(){
//  inputField.value = "";
//  captcha.innerText = "";
//  statusTxt.style.display = "none";
// }
function generateCaptcha() {
  const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";
  const captchaLength = 6; // Define the length of the captcha
  
  for (let i = 0; i < captchaLength; i++) {
    const randomIndex = Math.floor(Math.random() * charsArray.length);
    captcha += charsArray[randomIndex];
  }
  
  document.querySelector('.captcha').textContent = captcha;  // Display the captcha in the captcha span
}

// Call the function initially to display the captcha when the page loads
generateCaptcha();

// Function to reload the captcha
function reloadCaptcha() {
  generateCaptcha();  // Generate and display a new captcha
}

// Function to check the entered captcha
function checkCaptcha(event) {
  event.preventDefault();  // Prevent form submission
  
  const userInput = document.getElementById("captchaInput").value;  // Get the entered captcha value
  const generatedCaptcha = document.querySelector(".captcha").textContent;  // Get the displayed captcha
  
  if (userInput === generatedCaptcha) {
    document.querySelector(".status-text").textContent = "Captcha Verified!";
    document.querySelector(".status-text").style.color = "green";
  } else {
    document.querySelector(".status-text").textContent = "Incorrect Captcha. Try again!";
    document.querySelector(".status-text").style.color = "red";
  }
}


// -----faq captcha---
