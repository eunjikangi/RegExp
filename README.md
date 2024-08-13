# 정규표현식(RegExp)
정규식, Regular Expression

## 역할
- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트
https://regexr.com/

## 참고사이트
https://heropy.blog/2018/10/28/regexp/

```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-4505
thesecon@naver.com
https://www.naver.com
The red cat jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분하지 않고 일치(ignore case)
m | 여러 줄 일치(multi line), 한 줄씩 보겠다.

## 매모
escape문자 : \ (backslash)

## 패턴
패턴 | 설명
--|--
^ab | 줄 시작에 있는 ab와 일치하는 것
ab$ | 줄 끝에 있는 ab와 일치하는 것
. | 임의의 한 문자와 일치
a\|b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치 (영어 소문자) 
[A-Z] | A부터 Z 사이의 문자 구간에 일치 (영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치 (숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치 (한글)
\w | Word, 63개의 문자에 일치
\b | Boundary, 63개 문자에 일치하지 않는 문자 경계 (특수기호, 공백 등)
\d | Digit, 숫자에 일치
\s | Space, Tab, 공백에 일치
(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치