export const debounce = (() => {
    let timer = null
    return (callback, wait) => {
        clearTimeout(timer)// 每当用户输入的时候把前一个 setTimeout clear 掉 
        timer = setTimeout(callback, wait)//然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
    }
})()
