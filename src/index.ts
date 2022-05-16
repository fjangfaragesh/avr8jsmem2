import "@wokwi/elements";
import { MemOutElement } from "./memoutelements";
import { AVRRunner, PORT } from "./execute";
import { formatTime } from "./format-time";

import { compileAndRun } from "./compileandrun";
import {
  extractBit,
  bytesToInt,
  bitsToInt,
  extractByte,
} from "./customfunctions";

window.compileAndRun = compileAndRun;
window.extractBit = extractBit;
window.bytesToInt = bytesToInt;
window.bitsToInt = bitsToInt;
window.extractByte = extractByte;

//import "./customfunctions";

//import { WS2812Controller } from "./ws2812";

import { MemOut } from "./memout";

import {
  BuzzerElement,
  LEDElement,
  PushbuttonElement,
  SevenSegmentElement,
} from "@wokwi/elements";

declare const window: any;

function pinPort(e: any): [number | null, string | null] {
  let port: PORT | null;
  let pin = e.getAttribute("pin");
  pin = pin ? parseInt(pin, 10) : null;

  if (pin == null) {
    port = null;
  } else if (pin < 8) {
    port = "D";
  } else if (pin < 14) {
    port = "B";
  } else if (pin < 20) {
    port = "C";
  } else {
    port = null;
  }

  return [pin, port];
}

export const AVR8jsMem = {
  /** compiles the program
   *
   * @param sketch The cpp code as string
   *
   * @param files TODO
   * @returns
   */

  build: async function (sketch: string, files = []) {
    if (!window.__AVR8jsCache) {
      window.__AVR8jsCache = {};
    }

    let body = JSON.stringify({ sketch: sketch, files });

    if (window.__AVR8jsCache[body]) {
      return window.__AVR8jsCache[body];
    } else {
      const resp = await fetch("https://hexi.wokwi.com/build", {
        method: "POST",
        mode: "cors",
        cache: "force-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const rslt = await resp.json();

      window.__AVR8jsCache[body] = rslt;

      return rslt;
    }
  },

  buildASM: async function asmToHex(source: string) {
    const resp = await fetch("https://hexi.wokwi.com/asm", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source }),
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
   */
  execute: function (
    hex: string,
    log: any,
    id: string,
    MHZ: any,
    cyclesPerFrame: any,
    frameDelayMilliseconds: any
  ): AVRRunner {
    const PORTS: Array<PORT> = ["B", "C", "D"];

    const container = document.getElementById(id) || document;

    const LEDs: NodeListOf<LEDElement & HTMLElement> =
      container.querySelectorAll("wokwi-led");
    const SEG7 = container.querySelectorAll<SevenSegmentElement & HTMLElement>(
      "wokwi-7segment"
    );
    const BUZZER = container.querySelectorAll<BuzzerElement & HTMLElement>(
      "wokwi-buzzer"
    );
    const PushButton = container.querySelectorAll<
      PushbuttonElement & HTMLElement
    >("wokwi-pushbutton");
    const MemOuts = container.querySelectorAll<MemOutElement & HTMLElement>(
      "memout-element"
    );

    const runner: AVRRunner = new AVRRunner(hex);

    MHZ = MHZ || 16000000;
    cyclesPerFrame = cyclesPerFrame || 500000;
    frameDelayMilliseconds = frameDelayMilliseconds || 0;

    for (const PORT of PORTS) {
      // Hook to PORTB register
      const port = runner.port.get(PORT);

      if (port) {
        PushButton.forEach((button) => {
          let [pin, p] = pinPort(button);

          if (pin && p === PORT) {
            port.setPin(pin % 8, false);

            button.addEventListener("button-press", () => {
              if (runner) {
                port.setPin(pin % 8, true);
              }
            });

            button.addEventListener("button-release", () => {
              if (runner) {
                port.setPin(pin % 8, false);
              }
            });
          }
        });

        port.addListener((value) => {
          LEDs.forEach((e) => {
            let [pin, p] = pinPort(e);

            if (pin && p === PORT) {
              e.value = value & (1 << (pin - 8)) ? true : false;
            }
          });

          BUZZER.forEach((e) => {
            let [pin, p] = pinPort(e);

            if (pin && p === PORT) {
              e.hasSignal = value & (1 << (pin - 8)) ? true : false;
            }
          });

          SEG7.forEach((e) => {
            let [pin, p] = pinPort(e);

            if (pin && p === PORT) {
              e.values = [
                value & 1,
                value & 2,
                value & 4,
                value & 16,
                value & 32,
                value & 64,
                value & 128,
                value & 256,
              ];
            }
          });
        });
      }
    }

    // Serial port output support
    runner.usart.onLineTransmit = (value) => {
      log(value);
    };

    const timeSpan = container.querySelector("#simulation-time");
    runner.execute(
      (cpu) => {
        for (let m of MemOuts) m.updateData(cpu.data, cpu.cycles);
        const time = formatTime(cpu.cycles / MHZ);
        if (timeSpan) timeSpan.textContent = "Simulation time: " + time;
      },
      cyclesPerFrame,
      frameDelayMilliseconds
    );

    return runner;
  },
};

window.AVR8js = AVR8jsMem;
