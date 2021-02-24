import {Command, flags} from '@oclif/command'
import Handler from '../helpers/handler'
import cli from 'cli-ux'


let outputFile = './gharchive.json'

export default class Get extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ gha get
get world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    date: flags.string({
      char: 'd',
      description: 'Start date/datetime of what you want to download'
    }),
    endDate: flags.string({
      char: 'e',
      description: 'End date/datetime of what you want to download'
    }),
    outputFile: flags.string({
      char: 'o',
      description: 'File to write the output to'
    })
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Get)
    if(flags.outputFile){
      outputFile = flags.outputFile
    }
    const handle = new Handler(outputFile, this.log)

    cli.action.start('Starting Download')
    if(flags.date && flags.endDate){
      await handle.do(flags.date, flags.endDate)
    }else if(flags.date){
      await handle.do(flags.date)
    }
    if (args.file) {
      this.log(`you input --force and --file: ${args.file}`)
    }
    cli.action.stop()
  }
}
