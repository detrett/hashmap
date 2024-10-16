import { LinkedList } from "./linkedList";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  hash(key, tableSize) {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      total = (total + char * 17) % tableSize;
    }
    return total;
  }

  set(key, value) {
    const hashCode = this.hash(key, this.capacity);

    if (typeof this.buckets[hashCode] === null) {
      
      this.buckets[hashCode] = ;
      this.size++;
    }

    

    console.log(`Key: ${newNode.key}, hashCode: ${hashCode}`);

    // this.buckets[hashCode] = newNode;
  }

  get(key) {
    const hashCode = this.hash(key, this.capacity);
  }

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}
