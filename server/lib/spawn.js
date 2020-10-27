const { spawn } = require('child_process')
const consola = require('consola')

exports.spawnAsync = (cmd, skipError = false) => {
  const spawnProcess = spawn(cmd, {
    shell: true,
    cwd: __dirname,
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  const task = new Promise((resolve, reject) => {
    spawnProcess.on('close', (code) => {
      if (code !== 0 && skipError) {
        reject(new Error('Generation killed'))
        return
      }
      if (code === 0) {
        consola.success('CMD: ' + cmd)
        resolve(code)
        return
      }
      reject(new Error(''))
    })
    spawnProcess.on('error', (err) => {
      reject(err)
    })
  })
  return {
    task,
    pid: spawnProcess.pid
  }
}
