export class Node {
  constructor(key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }

  toString() {
    return `( Key: ${this.key}, value: ${this.value} ) => ${
      this.nextNode !== null ? this.nextNode.toString() : "null"
    }`;
  }
}
