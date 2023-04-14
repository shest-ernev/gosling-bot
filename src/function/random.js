const rand = (min, max) => {
   const number = Math.floor(min - 0.5 + Math.random() * (max - min + 1))
   
   return number
}

module.exports = rand