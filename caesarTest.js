decrypt(string) {
    var newstring = string.split("")
    var newstring2 = ""
    newstring.forEach(ele => {
        if (ele == " "){
            newstring2 += " "
        }else{
            let x = (this.Ciphertext[ele.toUpperCase()] - this.Key) % 26
            if ( x < 0 ) x = x + 26
            newstring2 += Object.keys(this.Plaintext).find(key => this.Plaintext[key] === x);
        }
    });
    console.log(newstring2);
  }
​
​
 encrypt(string){
    var newstring = string.split("")
    var newstring2 = ""
    newstring.forEach(ele => {
        if (ele == " "){
            newstring2 += " "
        }else{
            let x = (this.Plaintext[ele.toUpperCase()] + this.Key) % 26
            if ( x < 0 ) x = x + 26
            newstring2 += Object.keys(this.Ciphertext).find(key => this.Ciphertext[key] === x).toLowerCase();
        }
    });
    console.log(newstring2);
​
 }
}