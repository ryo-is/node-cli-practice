import { createInterface } from 'readline'

export default (): void => {
  const [, , firstArg] = process.argv

  if (!firstArg) {
    console.error('Please pass one argument!!')
    process.exit(1)
  }

  const msg = `
    Hello!! ${firstArg} san.
    I am Ryosuke Izumi.
    GitHub: https://github.com/ryo-is
    Twitter: https://twitter.com/is_ryo
  `

  console.log(msg)

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Please enter names for your project: ', (answer: string) => {
    console.log(`Thank you!! Let's start ${answer}`)

    rl.close()
  })
}
