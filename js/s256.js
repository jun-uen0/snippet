const crypto = require('crypto')

class S256 {
  constructor(codeChallenge) {
    this.codeChallenge = codeChallenge
  }
  toAscii = (str) => {
    return str.charCodeAt(0).toString()
  }
  sha256 = (str) => {
    return crypto.createHash('sha256').update(str).digest('hex')
  }
  base64url = (str) => {
    return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '')
  }
  encode = () => {
    return this.base64url(this.sha256(this.toAscii(this.codeChallenge)))
  }
}

const codeChallenge = new S256('1234567890')
console.log(codeChallenge.encode()) 
