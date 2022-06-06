class MisakaNet {
    sisters: Sister[]
    constructor() {
        this.sisters = []
    }
    pushMsg (msg: string) {
        this.sisters.forEach(sister => {
            sister.receiveMsg(msg)
        })
    }
}

class Sister {
    name: string
    constructor(name: string) {
        this.name = name
    }
    subscribeNet (MisakaNet: MisakaNet): Sister {
        MisakaNet.sisters.push(this)
        return this
    }
    useNet (MisakaNet: MisakaNet, msg: string) {
        MisakaNet.pushMsg(msg)
    }
    receiveMsg (msg: string) {
        console.log(`Misaka${this.name} received: ` + msg)
    }
}

const misakaNet = new MisakaNet()
for (let i = 0; i < 100; i ++) {
    new Sister(`${i + 1}`)
        .subscribeNet(misakaNet)
        .useNet(misakaNet, `Hello, I am sister #${i + 1}`)
}

console.log(misakaNet.sisters)
misakaNet
    .sisters[0]
    .useNet(misakaNet, 'Hello, MisakaMikoto')
