function randomNumber(num){
    return Math.floor(Math.random() * num);
}
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  function selectOutput(obj){
      let signinfo = obj.signInfo[randomNumber(obj.signInfo.length)];
      let fo = obj.fortuneOutput[randomNumber(obj.fortuneOutput.length)];
      let ad = obj.advice[randomNumber(obj.advice.length)];
    console.log('random message'+signinfo);
    console.log('random message'+fo);
    console.log('random message'+ad);
  }

const w = collectiveWisdom;
selectOutput(w);
