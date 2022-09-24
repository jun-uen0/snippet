// want specif date from the date provided

const myDate = 10/11/2009  // MM/DD/YYYY

const week = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const d = new Date(myDate)
const day = d.getDay()
const date = week[day]

console.log(date) // Sunday
