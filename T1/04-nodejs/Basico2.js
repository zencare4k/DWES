function VolumeOfBox(volume) {
    return volume.width * volume.height * volume.depth
}

let volume = {width: 10, height: 10, depth: 10}

console.log(VolumeOfBox(volume));
