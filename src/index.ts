import { createInterface } from 'readline'

export default (): void => {
  const [, , firstArg] = process.argv

  if (!firstArg) {
    console.error('Please pass one argument!!')
    process.exit(1)
  }

  const msg = `
    Hello!! ${firstArg} !!!
  `

  console.log(msg)

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Please enter messages: ', (answer: string) => {
    console.log(`Thank you!! Let's start ${answer}`)

    rl.close()
  })
}
