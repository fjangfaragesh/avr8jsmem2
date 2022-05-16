require("@wokwi/elements");
var $8zHUo$avr8js = require("avr8js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AVR8jsMem", () => $882b6d93070905b3$export$e5ed3c8de4b2a69);


function $dfdb317f157de136$export$6907aa30e09916b(source, target) {
    for (const line of source.split("\n"))if (line[0] === ":" && line.substr(7, 2) === "00") {
        const bytes = parseInt(line.substr(1, 2), 16);
        const addr = parseInt(line.substr(3, 4), 16);
        for(let i = 0; i < bytes; i++)target[addr + i] = parseInt(line.substr(9 + i * 2, 2), 16);
    }
}


// ATmega328p params
const $51ed46b8955c1431$var$FLASH = 0x8000;
class $51ed46b8955c1431$export$31e2b2d64952a5f1 {
    program = new Uint16Array($51ed46b8955c1431$var$FLASH);
    port = new Map();
    MHZ = 16e6;
    stopped = false;
    constructor(hex){
        $dfdb317f157de136$export$6907aa30e09916b(hex, new Uint8Array(this.program.buffer));
        this.cpu = new $8zHUo$avr8js.CPU(this.program);
        this.timer0 = new $8zHUo$avr8js.AVRTimer(this.cpu, $8zHUo$avr8js.timer0Config);
        this.timer1 = new $8zHUo$avr8js.AVRTimer(this.cpu, $8zHUo$avr8js.timer1Config);
        this.timer2 = new $8zHUo$avr8js.AVRTimer(this.cpu, $8zHUo$avr8js.timer2Config);
        //this.port.set('A', new AVRIOPort(this.cpu, portAConfig));
        this.port.set("B", new $8zHUo$avr8js.AVRIOPort(this.cpu, $8zHUo$avr8js.portBConfig));
        this.port.set("C", new $8zHUo$avr8js.AVRIOPort(this.cpu, $8zHUo$avr8js.portCConfig));
        this.port.set("D", new $8zHUo$avr8js.AVRIOPort(this.cpu, $8zHUo$avr8js.portDConfig));
        //this.port.set('E', new AVRIOPort(this.cpu, portEConfig));
        //this.port.set('F', new AVRIOPort(this.cpu, portFConfig));
        //this.port.set('G', new AVRIOPort(this.cpu, portGConfig));
        //this.port.set('H', new AVRIOPort(this.cpu, portHConfig));
        //this.port.set('J', new AVRIOPort(this.cpu, portJConfig));
        //this.port.set('K', new AVRIOPort(this.cpu, portKConfig));
        //this.port.set('L', new AVRIOPort(this.cpu, portLConfig));
        // create an ArrayBuffer with a size in bytes
        this.serialBuffer = [];
        this.usart = new $8zHUo$avr8js.AVRUSART(this.cpu, $8zHUo$avr8js.usart0Config, this.MHZ);
        this.cpu.readHooks[$8zHUo$avr8js.usart0Config.UDR] = ()=>this.serialBuffer.shift() || 0
        ;
    }
    async execute(callback, cyclesPerFrame, frameDelayMilliseconds) {
        this.stopped = false;
        while(true){
            for(let i = 0; i < cyclesPerFrame; i++){
                $8zHUo$avr8js.avrInstruction(this.cpu);
                this.timer0.tick();
                this.timer1.tick();
                this.timer2.tick();
                this.usart.tick();
                const ucsra = this.cpu.data[$8zHUo$avr8js.usart0Config.UCSRA];
                if (this.cpu.interruptsEnabled && ucsra & 0x20 && this.serialBuffer.length > 0) $8zHUo$avr8js.avrInterrupt(this.cpu, $8zHUo$avr8js.usart0Config.rxCompleteInterrupt);
            }
            callback(this.cpu);
            await new Promise((resolve)=>setTimeout(resolve, frameDelayMilliseconds)
            );
            if (this.stopped) break;
        }
    }
    serial(input) {
        for(var i = 0; i < input.length; i++)this.serialBuffer.push(input.charCodeAt(i));
    }
    stop() {
        this.stopped = true;
    }
}


function $121c38b353ebc6df$var$zeroPad(value, length) {
    let sval = value.toString();
    while(sval.length < length)sval = "0" + sval;
    return sval;
}
function $121c38b353ebc6df$export$3203edd9e5edd663(seconds) {
    const ms = Math.floor(seconds * 1000) % 1000;
    const secs = Math.floor(seconds % 60);
    const mins = Math.floor(seconds / 60);
    return `${$121c38b353ebc6df$var$zeroPad(mins, 2)}:${$121c38b353ebc6df$var$zeroPad(secs, 2)}.${$121c38b353ebc6df$var$zeroPad(ms, 3)}`;
}


async function $04884edc5baa97f2$export$528d7c97418b1bdd(codeString, divId, cyclesPerFrame, frameDelayMilliseconds, maxNumberOfCycles, controlFunctionsCallback, serialOutputHanlder) {
    if (serialOutputHanlder == undefined) serialOutputHanlder = console.log;
    serialOutputHanlder("compiling...");
    let e = await AVR8js.build(codeString, []);
    console.log(e);
    if (e.hex === "") {
        let msgs = [];
        for(let i = 0; i < name.length; i++)msgs.push([]);
        let iter = e.stderr.matchAll(/(\w+\.\w+):(\d+):(\d+): ([^:]+):(.+)/g);
        /*for(let err=iter.next(); !err.done; err=iter.next()) {
            msgs[name.findIndex((e) => e==err.value[1])].push({
            row :    parseInt(err.value[2]) - 1,
            column : parseInt(err.value[3]),
            text :   err.value[5],
            type :   err.value[4]
            })
        }*/ throw new Error(e.stderr + " " + msgs);
    } else {
        console.debug(e.stdout);
        serialOutputHanlder("ready!");
        await new Promise(function(res, rej) {
            if (e.hex) {
                let runner = AVR8js.execute(e.hex, serialOutputHanlder, divId, undefined, cyclesPerFrame * 1, frameDelayMilliseconds * 1, maxNumberOfCycles ?? Infinity, function() {
                    serialOutputHanlder("simmulation ended");
                    res();
                });
                if (controlFunctionsCallback) controlFunctionsCallback(()=>runner.stop()
                , (s)=>runner.serial(s)
                );
            } else throw new Error("no hex!");
        });
    }
}


function $cc5d1395482c1c60$export$5947992841066971(integerValue, bitPosition) {
    return integerValue >> bitPosition & 1;
}
function $cc5d1395482c1c60$export$b25202b2d7056da9(b0, b1, b2, b3) {
    //b1,b2,b3 optional
    return b0 & 0xff | (b1 & 0xff) << 8 | (b2 & 0xff) << 16 | (b3 & 0xff) << 24;
}
function $cc5d1395482c1c60$export$66b6f4f54e66c670() {
    let i = 0;
    let ret = 0;
    for (let a of arguments){
        ret |= (a & 1) << i;
        i++;
    }
    return ret;
}
function $cc5d1395482c1c60$export$fc04dc125cfc7ba0(integerValue, bytePosition) {
    return integerValue >> bytePosition * 8 & 0xff;
}


window.compileAndRun = $04884edc5baa97f2$export$528d7c97418b1bdd;
window.extractBit = $cc5d1395482c1c60$export$5947992841066971;
window.bytesToInt = $cc5d1395482c1c60$export$b25202b2d7056da9;
window.bitsToInt = $cc5d1395482c1c60$export$66b6f4f54e66c670;
window.extractByte = $cc5d1395482c1c60$export$fc04dc125cfc7ba0;
function $882b6d93070905b3$var$pinPort(e) {
    let port;
    let pin = e.getAttribute("pin");
    pin = pin ? parseInt(pin, 10) : null;
    if (pin == null) port = null;
    else if (pin < 8) port = "D";
    else if (pin < 14) port = "B";
    else if (pin < 20) port = "C";
    else port = null;
    return [
        pin,
        port
    ];
}
const $882b6d93070905b3$export$e5ed3c8de4b2a69 = {
    /** compiles the program
   *
   * @param sketch The cpp code as string
   *
   * @param files TODO
   * @returns
   */ build: async function(sketch, files = []) {
        if (!window.__AVR8jsCache) window.__AVR8jsCache = {};
        let body = JSON.stringify({
            sketch: sketch,
            files: files
        });
        if (window.__AVR8jsCache[body]) return window.__AVR8jsCache[body];
        else {
            const resp = await fetch("https://hexi.wokwi.com/build", {
                method: "POST",
                mode: "cors",
                cache: "force-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            });
            const rslt = await resp.json();
            window.__AVR8jsCache[body] = rslt;
            return rslt;
        }
    },
    buildASM: async function asmToHex(source) {
        const resp = await fetch("https://hexi.wokwi.com/asm", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: source
            })
        });
        return await resp.json();
    },
    /** starts the simulation
   *
   * @param hex machine code as hex string
   * @param log log function
   * @param id id of the div in which the summation is displayed
   * @param MHZ cpu clock speed in HZ (default=16000000)
   * @param cyclesPerFrame number of cpu cycles executed in an animation frame
   * @param frameDelayMilliseconds delay between two animation frames in milliseconds. (0: no delay)
   * @returns AVRRunner
   */ execute: function(hex, log, id, MHZ, cyclesPerFrame, frameDelayMilliseconds) {
        const PORTS = [
            "B",
            "C",
            "D"
        ];
        const container = document.getElementById(id) || document;
        const LEDs = container.querySelectorAll("wokwi-led");
        const SEG7 = container.querySelectorAll("wokwi-7segment");
        const BUZZER = container.querySelectorAll("wokwi-buzzer");
        const PushButton = container.querySelectorAll("wokwi-pushbutton");
        const MemOuts = container.querySelectorAll("memout-element");
        const runner = new $51ed46b8955c1431$export$31e2b2d64952a5f1(hex);
        MHZ = MHZ || 16000000;
        cyclesPerFrame = cyclesPerFrame || 500000;
        frameDelayMilliseconds = frameDelayMilliseconds || 0;
        for (const PORT of PORTS){
            // Hook to PORTB register
            const port = runner.port.get(PORT);
            if (port) {
                PushButton.forEach((button)=>{
                    let [pin, p] = $882b6d93070905b3$var$pinPort(button);
                    if (pin && p === PORT) {
                        port.setPin(pin % 8, false);
                        button.addEventListener("button-press", ()=>{
                            if (runner) port.setPin(pin % 8, true);
                        });
                        button.addEventListener("button-release", ()=>{
                            if (runner) port.setPin(pin % 8, false);
                        });
                    }
                });
                port.addListener((value)=>{
                    LEDs.forEach((e)=>{
                        let [pin, p] = $882b6d93070905b3$var$pinPort(e);
                        if (pin && p === PORT) e.value = value & 1 << pin - 8 ? true : false;
                    });
                    BUZZER.forEach((e)=>{
                        let [pin, p] = $882b6d93070905b3$var$pinPort(e);
                        if (pin && p === PORT) e.hasSignal = value & 1 << pin - 8 ? true : false;
                    });
                    SEG7.forEach((e)=>{
                        let [pin, p] = $882b6d93070905b3$var$pinPort(e);
                        if (pin && p === PORT) e.values = [
                            value & 1,
                            value & 2,
                            value & 4,
                            value & 16,
                            value & 32,
                            value & 64,
                            value & 128,
                            value & 256, 
                        ];
                    });
                });
            }
        }
        // Serial port output support
        runner.usart.onLineTransmit = (value)=>{
            log(value);
        };
        const timeSpan = container.querySelector("#simulation-time");
        runner.execute((cpu)=>{
            for (let m of MemOuts)m.updateData(cpu.data, cpu.cycles);
            const time = $121c38b353ebc6df$export$3203edd9e5edd663(cpu.cycles / MHZ);
            if (timeSpan) timeSpan.textContent = "Simulation time: " + time;
        }, cyclesPerFrame, frameDelayMilliseconds);
        return runner;
    }
};
window.AVR8js = $882b6d93070905b3$export$e5ed3c8de4b2a69;


//# sourceMappingURL=index.js.map
