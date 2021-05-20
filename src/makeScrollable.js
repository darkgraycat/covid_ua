export default function makeScrollable(element) {

  let x = 0
  let y = 0

  const createDownHandler = isTouch => isTouch
    ? e => {
      e.preventDefault()
      x = e.touches[0].clientX
      y = e.touches[0].clientY
      document.addEventListener('touchmove', moveTouchHandler, false)
      document.addEventListener('touchup', upTouchHandler, { once: true })
      document.addEventListener('touchcancel', upTouchHandler, { once: true })
    }
    : e => {
      e.preventDefault()
      x = e.clientX
      y = e.clientY
      document.addEventListener('mousemove', moveHandler, false)
      document.addEventListener('mouseup', upHandler, { once: true })
      document.addEventListener('mouseleave', upHandler, { once: true })
    }

  const createUpHandler = isTouch => isTouch
    ? () => document.removeEventListener('touchmove', moveTouchHandler)
    : () => document.removeEventListener('mousemove', moveHandler)

  const createMoveHandler = isTouch => isTouch
    ? e => move(e.touches[0])
    : e => move(e)

  const move = e => {
    const _x = element.offsetLeft - x + e.clientX
    const _y = element.offsetTop - y + e.clientY
    if (_x <= 0 && _x >= -(element.offsetWidth - element.parentNode.offsetWidth))
      element.style.left = _x + 'px'
    if (_y <= 0 && _y >= -(element.offsetHeight - element.parentNode.offsetHeight))
      element.style.top = _y + 'px'
    x = e.clientX
    y = e.clientY
  }

  const moveHandler = createMoveHandler(false)
  const upHandler = createUpHandler(false)
  const moveTouchHandler = createMoveHandler(true)
  const upTouchHandler = createUpHandler(true)

  element.addEventListener('mousedown', createDownHandler(false))
  element.addEventListener('touchstart', createDownHandler(true))
}