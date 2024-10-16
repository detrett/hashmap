import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  hash(key, tableSize) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      total = (total + char * 17) % tableSize;
    }
    return total;
  }

  set(key, value) {
    const hashCode = this.hash(key, this.capacity);
    // If a list already exists at that location
    if (
      this.buckets[hashCode] !== null &&
      this.buckets[hashCode] instanceof LinkedList
    ) {
      const linkedList = this.buckets[hashCode];
      const findKey = linkedList.findKey(key);
      // Check if the key already exists in the list to update its value
      if (findKey) {
        linkedList.updateValue(findKey, value);
      }
      // If not, append the new node to the list
      else {
        linkedList.append(key, value);
        this.size++;
        // Check if we have exceeded the load factor and we need to resize
        if (this.size / this.capacity > this.loadFactor) {
          resize();
        }
      }
    } 
    // Create a list and append the node
    else {
      const linkedList = new LinkedList();
      this.buckets[hashCode] = linkedList;
      linkedList.append(key, value);
      this.size++;
      // Check if we have exceeded the load factor and we need to resize
      if (this.size / this.capacity > this.loadFactor) {
        resize();
      }
    }
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

  resize() {}
}
