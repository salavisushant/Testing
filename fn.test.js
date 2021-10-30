const { timeConvert } = require("./fn")

test(`TimeConvert 20000000 ms to 5 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(timeConvert(20000000)).toBe(`5 Hours 33 Minutes 20 Seconds`)
})
test(`TimeConvert 2000000 ms to 0 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(timeConvert(2000000)).toBe(`0 Hours 33 Minutes 20 Seconds`)
})
test(`TimeConvert 4000000 ms to 1 Hours 6 Minutes 40 Seconds`, ()=>{
    expect(timeConvert(4000000)).toBe(`1 Hours 6 Minutes 40 Seconds`)
})
test(`TimeConvert 5000000 ms to 1 Hours 23 Minutes 20 Seconds`, ()=>{
    expect(timeConvert(5000000)).toBe(`1 Hours 23 Minutes 20 Seconds`)
})
test(`TimeConvert 6000000 ms to 1 Hours 40 Minutes 0 Seconds`, ()=>{
    expect(timeConvert(6000000)).toBe(`1 Hours 40 Minutes 0 Seconds`)
})
