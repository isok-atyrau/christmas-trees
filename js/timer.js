const declOfNum = (n, titles) =>
   n +
   " " +
   titles[
      n % 10 === 1 && n % 100 !== 11
         ? 0
         : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
         ? 1
         : 2
   ]

const timer = () => {
   const timer = document.createElement("div")
   const timerText = document.createElement("p")
   const timerCount = document.createElement("span")

   timer.classList.add("timer")
   timerText.classList.add("timer__text")
   timerCount.classList.add("timer__count")

   timerText.textContent = "До конца акции осталось: "

   timerText.append(timerCount)
   timer.append(timerText)
   document.body.append(timer)

   const startTimer = () => {
      const deadline = new Date(2023, 7, 30, 0, 0, 0)
      const now = new Date()
      const timeRemaining = (deadline - now) / 1000
      const second = Math.floor(timeRemaining % 60)
      const minute = Math.floor((timeRemaining / 60) % 60)
      const hour = Math.floor((timeRemaining / 60 / 60) % 24)
      const day = Math.floor((timeRemaining / 60 / 60 / 24) % 30)

      const s = declOfNum(second, ["секунда", "секунды", "секунд"])
      const m = declOfNum(minute, ["минута", "минуты", "минут"])
      const h = declOfNum(hour, ["час", "часа", "часов"])
      const d = declOfNum(day, ["день", "дня", "дней"])

      timerCount.textContent = `${d} ${h} ${m} ${s}`

      if (timeRemaining > 0) {
         setTimeout(startTimer, 1000)
      } else {
         timer.remove()
         document.querySelector("body").style.paddingTop = 0
      }
   }

   startTimer()
}

timer()
