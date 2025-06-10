1. //return the length of the String
function stringLength(){
    const str= "Straw hat Pirates"
    console.log("StringLength:" +str.length)
}
stringLength()

2. //Slice
let a="Straw hat Pirates"
let b=a.slice(0,6)
let c=a.slice(6,10)
let d=a.slice(10)
console.log(b)
console.log(c)
console.log(d)

3. //substring()
let str='dinesh, nancy, chandru'
let part=str.substring(8,13)
console.log(part)

4. //substr()
let str1='dinesh, nancy, chandru'
let part1=str.substr(0,6)
console.log(part1)

5. //replace()
let str2='dinesh, nancy, chandru'
let part2=str.replace('dinesh','govind')
console.log(part2)

6. //replaceall()
let str3='dinesh, dinesh, nancy, chandru'
let part3=str3.replaceAll('dinesh','govind')
console.log(part3)

7. //toUpperCase()
let str4='straw hat pirates'
console.log(str4.toUpperCase())

8. //toLowerCase()
let str5='YELLOW FLASH OF THE LEAF'
console.log(str5.toLowerCase())

9. //concat()
let str6='Straw'
let str7='Hat'
console.log(str6.concat(str7))

10. //trim()
let abc='ABC    '
let newAbc=abc.trim()
console.log(abc.length)
console.log(newAbc.length)

11. //trimstart()
let bcd='   Luffy'
let def=bcd.trimStart()
console.log(bcd.length)
console.log(def.length)
console.log(bcd)
console.log(def)

12. //trimend()
let cde='NarutoUzumaki   '
let efg=cde.trimEnd()
console.log(efg)

