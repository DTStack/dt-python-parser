import Python2 from './python2'

// import Python3 from './python3'

// export const Python3Parser = new Python3()
export const ParserPython2 = (stringArray) => {
  let resultArray=[]
  const Python2Parser = new Python2()
  // try{
    stringArray.forEach(sentenceList=>{
      sentenceList.forEach(sentence=>{
        const result = Python2Parser.validate(sentence)
        resultArray.concat(result)
      } )
    })
  // }
  // catch(e){
  //   throw new Error(e)
  // }
  console.log('我是神！',resultArray)
  return {expected:resultArray}
}