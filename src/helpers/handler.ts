const fetch = require('node-fetch')
import fs from 'fs';
import {createGunzip} from 'zlib';
import _ from 'lodash'

class Handler {
  outputFile: string
  outStream: fs.WriteStream
  log: any
  constructor(outputFile: string, log: any){
    this.log = log
    this.outputFile = outputFile
    this.outStream = fs.createWriteStream(this.outputFile);
  }
  async download (path: string, domain = 'https://data.gharchive.org') {  
    let headers = {
      "content-encoding": 'gzip'
    }
    const response = await fetch(domain + '/' + path, headers)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    var gunzip = createGunzip();
    gunzip.write(await response.buffer())
    gunzip.pipe(this.outStream);
  }
  
  
  requiredDateFormat(date: Date){
    const properFormat = (value: number) => (value < 10 ? '0' : '') + value
    let endpoint = ''
    endpoint += properFormat(date.getFullYear()) + '-'
    endpoint += properFormat(date.getMonth() + 1) + '-'
    endpoint += properFormat(date.getDate()) + '-'
    endpoint += date.getHours()
    return endpoint
  }
  
  
  
  async do(start: any, end: any = undefined){
    [start, end] = findRange(start, end)
    
    if(start >= end){
      this.log('Start date cannot be after end date')
      return
    }

    while(start < end){
      // console.log(this.requiredDateFormat(start) + '.json.gz')
      await this.download(this.requiredDateFormat(start) + '.json.gz')
      if(true){
        start.setHours(start.getHours() + 1)
      }else{
        
      }
    }
  }
}
const hourDifference = (start: any, end: any ) => (end - start) / 1000 / 60 / 60
function findRange(start: string|Date, end: any = undefined): Date[]{
  start = new Date(start)
  if(end === undefined){
    end = new Date(start.getTime());
    if(start.getHours() === 0 && true){
      end.setHours(end.getHours() + 24)
    }
  }else{
    end = new Date(end)
  }
  return [start, end]
}

export default Handler