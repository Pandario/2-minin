const name = prompt("What's your name?")
     document.querySelector('h3').textContent = "Hello,  " + name

     document.querySelector('h1').textContent = "Now  " + new Date().toLocaleTimeString()

     setInterval(function() {
         document.querySelector('h1').textContent = "Now  " + new Date().toLocaleTimeString()
        }, 1000)
    
     const colors = ['red', 'blue', 'white', 'yellow']
     let index = 0
     document.querySelector('button').onclick = function() {
        document.body.style.background = colors[index]
        index++
        if (index >= colors.length) index = 0
    }