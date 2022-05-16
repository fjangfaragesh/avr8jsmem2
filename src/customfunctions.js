export function extractBit(integerValue, bitPosition) {
    return (integerValue >> bitPosition) & 1;
}

export function bytesToInt(b0,b1,b2,b3) {
    //b1,b2,b3 optional
    return (b0 & 0xff) | ((b1 & 0xff) << 8) | ((b2 & 0xff) << 16) | ((b3 & 0xff) << 24);
}

export function bitsToInt() {
    let i = 0;
    let ret = 0;
    for (let a of arguments) {
        ret |= (a & 1) << i;
        i++;
    }
    return ret;
}

export function extractByte(integerValue, bytePosition) {
    return (integerValue >> (bytePosition*8)) & 0xff;
}
