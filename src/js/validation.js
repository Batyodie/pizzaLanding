import './component.js';
import {modal, $} from './modal.js';

const buttonSubmit = document.querySelector(".button__order")
const Eat = document.querySelector(".input-group__input")
const Number = document.querySelector(".input-group__input")
// const inputEmail = document.querySelector(".form-email-modal")



buttonSubmit.addEventListener("click", function (event){
    const eat = document.querySelector(".hidden-error-block2")
    const number = document.querySelector(".hidden-error-block3")

let flag = false
    event.preventDefault();

    if( Eat.value.length == ''){
        eat.innerHTML ="Это поле нужно заполнить"
        flag = false
    }
    else{
        eat.innerHTML =""
        flag = true
    }
    if( Number.value.length == ''){
        number.innerHTML ="Это поле нужно заполнить"
        flag = false
    }
    else{
        number.innerHTML =""
        flag = true
    }

  if(flag){
       const popUP = $.modal({
    title: 'message',
    closable: true,
    content: `
    <div class="pop-up">
    <div class="wind-close">
    <div class="closing" data-btn="out">&#10006;</div>
</div>
        <div class="pop-up__header">
            
            <svg  class="pop-up__image" alt="completed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 56.693 56.693" height="75.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="75.693px" xml:space="preserve"><path class="path-color" d="M45.922,11.767c-9.709-9.707-25.443-9.705-35.15,0c-9.709,9.711-9.711,25.447-0.002,35.155 c9.707,9.709,25.447,9.711,35.156,0.002C55.633,37.219,55.629,21.476,45.922,11.767z M40.409,21.747L26.316,40.201 c-0.452,0.591-1.137,0.941-1.878,0.956h-0.005h-0.052c-0.721,0-1.398-0.314-1.858-0.863l-6.038-7.139 c-0.419-0.494-0.619-1.125-0.566-1.773c0.055-0.648,0.358-1.236,0.853-1.656c0.957-0.811,2.625-0.668,3.432,0.287l4.083,4.826 l12.253-16.047c0.762-0.996,2.411-1.221,3.412-0.458c0.517,0.395,0.849,0.967,0.935,1.612 C40.973,20.591,40.804,21.231,40.409,21.747z"></path></svg>
        </div>
        <div class="pop-up__body">
            <p class="title">Спасибо!</p>
            <p class="sub-title">
            Ваша заявка принята.
            В ближайшее время мы с вами свяжемся!
            </p>
        </div>
        <div class="pop-up__footer">
            <button class="pop-up__button" data-btn="out">
            <span class="pop-up__button-body">ОК</span>
            </button>
        </div>
    
    </div>

       `,
    width: '400px',
    height: '378px',
})

  document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    if (btnType === 'submit'){
      modal.close()
      popUP.open()
    }
})
document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  if (btnType === 'out'){
    popUP.close()
  }
})
      document.addEventListener('click', event => {
          event.preventDefault()
          const btnType = event.target.dataset.btn
          if (btnType === 'out'){
              popUP.close()
          }
      })
  }
  
})


