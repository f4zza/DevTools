const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//regular
console.log('whatever')

//Interpolated
console.log(`this is ${dogs[0].name}`)

//Styled
console.log('%c your text', 'font-size:50px; background: black; color: white;' )

//warning
console.warn('warning bruh')

//error
console.error('error msg')

//info
console.info('anything u wanna inform about lol')

//testing
const p = document.querySelector('p')
console.assert(p.classList.contains('down'), 'This is wrong')

//clearing
console.clear()

//viewing DOm elements
console.log(p)
console.dir(p)

//grouping together
console.groupCollapsed(`${dogs[0].name}`)
console.log(`this is ${dogs[0].name}`)
console.log(`this is ${dogs[0].age}`)
console.groupEnd(`${dogs[0].name}`)

//counting
console.count('whatever')
console.count('what')
console.count('ever')

//timing
console.time('fetching data')
fetch('https://api.nasa.gov/planetary/apod?')
.then(data => data.json)
.then(data => {
    console.timeEnd('fetching data')
    console.log(data)
})

//table
console.table(dogs)