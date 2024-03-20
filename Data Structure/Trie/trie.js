class TrieNode{
    constructor(){
        this.childrens = {}
        this.isEndOfAWord = false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }


    insert(word){
        let root = this.root
        for(let char of word){
            if(!root.childrens[char]){
                root.childrens[char] = new TrieNode()
            }
            root = root.childrens[char]
        }
        root.isEndOfAWord = true
    }


    prefixWithAllWords(prefix){
        let root = this.root
        let words = []
        const prefixHelper = (root , prefix , currundWord)=>{
            if(root.isEndOfAWord){
                words.push(prefix+currundWord)
            }
            for(let char in root.childrens){
                prefixHelper(root.childrens[char] ,prefix , currundWord+char)
            }
        }


        for(let char of prefix){
            if(!root.childrens[char]){
                return words
            }
            root = root.childrens[char]
        }

        prefixHelper(root , prefix , '')
        return words
    }
}


const trie = new Trie()


trie.insert('sinan')
trie.insert('shamil')
trie.insert('shahabas')
trie.insert('soman')


console.log(trie.prefixWithAllWords('s'))