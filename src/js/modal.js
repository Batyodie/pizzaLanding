const $ = {}
window.$ = $

function _createModal(options) {
    const DEFAULT_WIDTH = '400px'
    const DEFAULT_HEIGHT = '550px'
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
      <div class="main-contact-inner-right-modal" style="width: ${options.width || DEFAULT_WIDTH}; height:${options.height || DEFAULT_HEIGHT}" >
            
        <div class="inner-right-form-modal" style="height: ${options.height || DEFAULT_HEIGHT}; ">
        
          <form id="myForm" class="inner-form-modal" style="height: 378px;" >
         
         ${options.content || ''}
        </form>
        </div>
      </div>
  </div>
  `)
  document.body.appendChild(modal)
      return modal     
  }
  
  $.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if(destroyed) {
                return console.log('modal is destroyed')
            }
            !closing && $modal.classList.add('open')
          },
          close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout( () => {
            $modal.classList.remove('hide')
            closing = false
            }, ANIMATION_SPEED  )
          },

    }
        const listener = event =>{
            if (event.target.dataset.close){
                modal.close()
            }
        }


    $modal.addEventListener( 'click', listener)
      
      return Object.assign(modal, {
        destroy() {
          $modal.parentNode.removeChild($modal)
          $modal.removeEventListener('click', listener)
          destroyed = true
        }
    })    
          
  }
  const modal = $.modal({
      title: 'message',
      closable: true,
      content: ``,
      width: '428px'
  })
  document.addEventListener('click', event => {
      event.preventDefault()
      const btnType = event.target.dataset.btn
      if (btnType === 'form'){
          modal.open()
      }
  })

 export {
   modal,
   $
 }


 