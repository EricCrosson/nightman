const { spawn } = require('child_process')

const DarkMode = require('dark-mode-listener')
const open = require('mac-open')

function darkMode() {
    open('', {a: 'Desktop Dimmer'})
}

function lightMode() {
    const child = spawn('killall', ['Desktop Dimmer'])
}

DarkMode.on('change', (mode) => {
    console.log(`We are now in ${mode} mode`)
    switch(mode) {
    case 'dark':
        darkMode()
        break
    case 'light':
        lightMode()
        break
    }
})
