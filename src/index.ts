import { createInterface } from 'readline'

export default (): void => {
  const name = process.argv[3]

  if (!name) {
    console.error('Please pass one argument!!')
    process.exit(1)
  }

  const msg = `
    Hello!! ${name} !!!
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
