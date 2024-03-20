class TrieNode {
  constructor() {
    this.childrens = {};
    this.isEndOfAWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let root = this.root;
    for (let char of word) {
      if (!root.childrens[char]) {
        root.childrens[char] = new TrieNode();
      }
      root = root.childrens[char];
    }
    root.isEndOfAWord = true;
  }

  prefixWithAllWords(prefix) {
    let root = this.root;
    let word = [];

    const prefixHelper = (root, prefix, currentWord) => {
      if (root.isEndOfAWord) {
        word.push(prefix + currentWord);
      }
      for (let char in root.childrens) {
        prefixHelper(root.childrens[char], prefix, currentWord + char);
      }
    };
    for (let char of prefix) {
      if (!root.childrens[char]) {
        return word;
      }
      root = root.childrens[char]
    }
    prefixHelper(root, prefix , '')
    return word
  }
}

const trie = new Trie();

trie.insert("shamil");
trie.insert("sinan");
trie.insert("shahabas");
console.log(trie.prefixWithAllWords("s"));
