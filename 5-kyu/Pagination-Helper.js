class PaginationHelper {
    arr = [];
    n = 0;
    pagesWithIndexs = [];
    constructor(collection, itemsPerPage) {
        this.arr = collection;
        this.n = itemsPerPage;
        let count
        if (this.arr.length == 0) {
            count = 0
        }
        else if (this.arr.length < this.n) {
            count = 1
        } else {
            if (this.arr.length % this.n == 0) {
                count = this.arr.length / this.n
            } else {
                count = Math.floor(this.arr.length / this.n) + 1
            }
        }
        for (let i = 0; i < count; i++) {
            let items = []
            for (let j = i * this.n; j < i * this.n + this.n; j++) {
                let value = this.arr[j]
                let index = this.arr.indexOf(this.arr[j])
                if (index != -1) {
                    items.push({ index, value })
                }
            }
            this.pagesWithIndexs.push({ index: i, items })
        }
    }
    itemCount() {
        return this.arr.length
    }
    pageCount() {
        return this.pagesWithIndexs.length
    }
    pageItemCount(pageIndex) {
        if (this.pagesWithIndexs.filter(p => p.index == pageIndex).length > 0) {
            return this.arr.slice(pageIndex * this.n, pageIndex * this.n + this.n).length
        } else {
            return -1
        }
    }
    pageIndex(itemIndex) {
        let page = Math.floor(itemIndex/this.n)
        if (page >= this.arr.length || page < 0) {
            return -1
        } else return page
    }
}

let arr = []
for (let i = 0; i < 65; i++) {
    arr.push(i)
}
const helper = new PaginationHelper(arr, 88)
console.log('Page Count:', helper.pageCount())
console.log('Item Count:', helper.itemCount())
console.log('Page Item Count:', helper.pageItemCount(0))
console.log('Page Index:', helper.pageIndex(22))