const generate = document.getElementById('generate-password')
const copy = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generateBtn = document.getElementById('generate-btn')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+='

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

generateBtn.addEventListener('click', generatePassword)

function generatePassword() {
  const len = lengthEl.value
  let password = ''

  if(upper.checked) {
    password += getUppercase()
  }

  if(lower.checked) {
    password += getLowercase()
  }

  if(number.checked) {
    password += getNumber()
  }

  if(symbol.checked) {
    password += getSymbol()
  }

  for(let i = password.length; i < len; i++) {
    const x = generateX()
    password += x
  }

  generate.innerText = password
}

function generateX() {
  const xs = []

  if(upper.checked) {
    xs.push(getUppercase())
  }

  if(lower.checked) {
    xs.push(getLowercase())
  }

  if(number.checked) {
    xs.push(getNumber())
  }

  if(symbol.checked) {
    xs.push(getSymbol())
  }

  if(xs.length === 0) return ''

  return xs[Math.floor(Math.random() * xs.length)]
}

copy.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = generate.innerText

  if(!password) {return}

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard')
})