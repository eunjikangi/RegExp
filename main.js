// https://heropy.blog/2018/10/28/regexp/

const str = `
010-1234-4505.
thesecon@naver.com
https://www.naver.com
The red cat jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') // <- 생성자 방식
// const regexp = /the/gi // <- 리터럴 방식
// console.log(str.match(regexp))

// const regexp = /red/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))

console.log(str.match(/com$/gim))