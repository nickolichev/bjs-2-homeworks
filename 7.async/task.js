// Задача #1

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (!this.intervalId) {
      this.resetAllCalls();
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.callback();
            alarm.canCall = false;
          }
        });
      }, 1000);
    }
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    const existingAlarm = this.alarmCollection.find(a => a.time === time);
    if (existingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(c => c.time !== time);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  } 
}








// class AlarmClock {
// constructor() {
// this.alarmCollection = [];
// this.intervalId = null;
// }

// getCurrentFormattedTime() {
//   const date = new Date();
//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// }

// start() {
//   if (!this.intervalId) {
//     this.intervalId = setInterval(() => {
//       this.alarmCollection.forEach((alarm) => {
//           if (alarm.time === this.getCurrentFormattedTime() && !alarm.canCall) {
//           alarm.callback();
//           alarm.canCall = true;
//         }
//       });
//     }, 1000);
//   }
// }

// addClock(time, callback) {
// if (!time || !callback) {
// throw new Error('Отсутствуют обязательные аргументы');
// }
// const existingAlarm = this.alarmCollection.find(a => a.time === time);
// if (existingAlarm) {
// console.warn('Уже присутствует звонок на это же время');
// }
// this.alarmCollection.push({ time, callback, canCall: true });
// }

// removeClock(time) {
// this.alarmCollection = this.alarmCollection.filter(c => c.time !== time);

// }

// stop() {
// clearInterval(this.intervalId);
// this.intervalId = null;
// }

// resetAllCalls() {
// this.alarmCollection.forEach(alarm => {
// alarm.canCall = true;
// });
// }

// clearAlarms() {
// this.stop();
// this.alarmCollection = [];
// } 
// }