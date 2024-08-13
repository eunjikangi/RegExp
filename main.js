// https://heropy.blog/2018/10/28/regexp/

const str = `
010-1234-4505.
thesecon@naver.com
https://www.naver.com
The frozen fox jumps over the lazy dog.
abbcccdddd
http://localhost
`

// const regexp = new RegExp('the', 'gi') // <- 생성자 방식
// const regexp = /the/gi // <- 리터럴 방식
// console.log(str.match(regexp))

// const regexp = /red/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))

// console.log(
//   str.match(/h..p/gm)
// )

// console.log(
//     str.match(/https?/g) // '?'는 's'한정
//   )

// console.log(
//       str.match(/\b\w{2,3}\b/g) // '?'는 's'한정
//     )

// console.log(
//   str.match(/[a-c]{2}/g) // '?'는 's'한정
// )

// console.log(
//   str.match(/\b\w{1,}/g) // '?'는 's'한정
// )

console.log(
  str.match(/(?<=@).{1,}/g) // '?'는 's'한정
)
