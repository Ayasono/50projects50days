'use strict'

class Channel {
    constructor(publisher) {
        this.name = publisher
        this.subscribers = []
    }
}

class Subscriber {
    constructor(name) {
        this.name = name
    }
    receiveMsg(msg) {
        // receive msg
        console.log(`${this.name} received message: ${msg}`)
    }
    subscribe(publisher) {
        publisher.channel.subscribers.push(this)
    }
}

class Publisher {
    constructor(name) {
        this.name = name
        this.channel = new Channel(this.name + "'s channel")
    }

    pushMsg(msg) {
        // notifications are sent to all subscribers
        console.log(this.channel.subscribers)
        this.channel.subscribers.forEach(subscriber => {
                subscriber.receiveMsg(msg)
            }
        )
    }
}

const publisher = new Publisher('Ai Chan')

const subscriber1 = new Subscriber('John')
const subscriber2 = new Subscriber('Mary')

// subscribe to channel
subscriber1.subscribe(publisher)
subscriber2.subscribe(publisher)

// publisher push message to channel
publisher.pushMsg( `${publisher.name} just posted a new video`)
