class trieNode {
  constructor() {
    this.childrens = {};
    this.isEndOFAWord = false;
  }
}

class trie {
  constructor() {
    this.root = new trieNode();
  }

  insert(word) {
    let root = this.root;
    for (let char in word) {
      if (!root.childrens[char]) {
        root.childrens[char] = new trieNode();
      }
      root = root.childrens[char];
    }
    root.isEndOFAWord = true;
  }

  prefixWithWord(prefix) {
    let root = this.root;
    let word = [];

    const prefixHelper=(root , prefix, currentWord)=>{
        if(root.isEndOFAWord){
            word.push(prefix+currentWord)
        }

        for(let char in root.childrens){
            prefixHelper()
        }
    }
  }
}
