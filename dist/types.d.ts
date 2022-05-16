import { AVRTimer, CPU, AVRUSART } from "avr8js";
declare class AVRRunner {
    readonly program: Uint16Array;
    readonly cpu: CPU;
    readonly timer0: AVRTimer;
    readonly timer1: AVRTimer;
    readonly timer2: AVRTimer;
    readonly usart: AVRUSART;
    readonly port: any;
    readonly MHZ = 16000000;
    serialBuffer: Array<number>;
    constructor(hex: string);
    execute(callback: (cpu: CPU) => void, cyclesPerFrame: number, frameDelayMilliseconds: number): Promise<void>;
    serial(input: string): void;
    stop(): void;
}
export const AVR8jsMem: {
    /** compiles the program
     *
     * @param sketch The cpp code as string
     *
     * @param files TODO
     * @returns
     */
    build: (sketch: string, files?: any[]) => Promise<any>;
    buildASM: (source: string) => Promise<any>;
    /** starts the simulation
     *
     * @param hex machine code as hex string
     * @param log log function
     * @param id id of the div in which the summation is displayed
     * @param MHZ cpu clock speed in HZ (default=16000000)
     * @param cyclesPerFrame number of cpu cycles executed in an animation frame
     * @param frameDelayMilliseconds delay between two animation frames in milliseconds. (0: no delay)
     * @returns AVRRunner
     */
    execute: (hex: string, log: any, id: string, MHZ: any, cyclesPerFrame: any, frameDelayMilliseconds: any) => AVRRunner;
};

//# sourceMappingURL=types.d.ts.map
