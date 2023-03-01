const daysjs= require('daysjs')

function birthday(date){
const birthday = dayjs(date)
const today = dayjs()
const ageInYears = today.diff(birthday, 'years')
console.log(`idade: ${ageInYears}`)

}

birthday('1995 -09-02')