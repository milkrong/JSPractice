 
class EventEmitter {
    constructor () {
        super()
        this.events = {}
        this.onceEvents = {} 

    on (type, cb) {
        if (!type || !cb) {
            return false
        }
        this.events[type] = this.events[type] || []
        this.events[type].push(cb)
    }
     
    emit (type) {
        if (!type) {
            return false
        }
        this.events[type] && this.events[type].forEach(eventCb => {
            eventCb.apply(this, [...arguments].slice(1))
        })
        this.onceEvents[type] && this.onceEvents[type].forEach(eventCb => {
            eventCb.apply(this, [...arguments].slice(1))
        })
        delete this.onceEvents[type]
    }
 
    off (type) {
        if (!type) {
            return false
        }
        delete this.events[type]
        delete this.onceEvents[type]
    }
 
    once (type, cb) {
        if (!type || !cb) {
            return false
        }
        this.onceEvents[type] = this.onceEvents[type] || []
        this.onceEvents[type].push(cb)
    }
}
————————————————
版权声明：本文为CSDN博主「Lioner-CSU」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_35630674/java/article/details/104359636