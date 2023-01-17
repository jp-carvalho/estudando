
const policy = document.getElementById('policy');
const useTerm = document.getElementById('use-term');

const activateBtn = () => {
  const button = document.getElementsByClassName('last-btn');

  if ( policy.checked === true && useTerm.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

policy.addEventListener('click', activateBtn);
useTerm.addEventListener('click', activateBtn);



// const policy = document.getElementById('policy');
// const useTerm = document.getElementById('use-term');

// const activateBtn = () =>{
  
//   const btn = document.querySelector('.last-btn');

//   if(policy.checked === true && useTerm.checked === true){
//     btn.disabled = false;
//   }
//   else{
//     btn.disabled = true;
//   }

// }

// policy.addEventListener('click', activateBtn );
// useTerm.addEventListener('click', activateBtn );