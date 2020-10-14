import './test.css'
import logo from './091.JPG'

console.log('Hello WebPack!')
document.getElementById('root').innerHTML = '<h1>hello</h1>>'

const fn = () => {
    console.log('fn')
}

const image = new Image()
image.src = logo
document.getElementById('root').appendChild(image)