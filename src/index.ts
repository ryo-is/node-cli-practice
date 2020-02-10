import { prompt, Separator, QuestionCollection } from 'inquirer'

export default async (): Promise<void> => {
  const name = process.argv[3]

  if (!name) {
    console.error('Please pass one argument!!')
    process.exit(1)
  }

  const msg = `
    Hello!! ${name} !!!
  `
  console.log(msg)

  // Input
  const inputQuestions: QuestionCollection = [
    {
      type: 'input',
      message: "What's your name",
      name: 'name'
    }
  ]
  await prompt(inputQuestions).then((answers: any) => {
    console.log(JSON.stringify(answers, null, '  '))
  })

  // List
  const listQuestions: QuestionCollection = [
    {
      type: 'list',
      name: 'color',
      message: 'What do you like color?',
      choices: [
        'black',
        'red',
        {
          name: 'orange',
          disabled: 'disabled'
        },
        'green'
      ]
    }
  ]
  await prompt(listQuestions).then((answers: any) => {
    console.log(JSON.stringify(answers, null, '  '))
  })

  // Checkbox
  const checkboxQuestions: QuestionCollection = [
    {
      type: 'checkbox',
      message: 'select',
      name: 'select',
      choices: [
        new Separator(' = Choise A = '),
        { name: 'hoge' },
        { name: 'fuga' },
        { name: 'foo' }
      ],
      validate: (answer: any): boolean | string => {
        if (answer.length < 1) {
          return 'You must choose'
        }

        return true
      }
    }
  ]
  await prompt(checkboxQuestions).then((answers: any) => {
    console.log(JSON.stringify(answers, null, '  '))
  })
}
