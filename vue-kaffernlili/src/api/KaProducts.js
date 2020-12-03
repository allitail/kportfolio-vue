nconst db = [
    { id: 1, name: 'k', price: 40, content: 'kk'},
    { id: 2, name: 'a', price: 8, content: 'ka'},
    { id: 3, name: 'f', price: 94, content: 'kaf'}
]

export default {
    fetch(id) {
        return db
    },
    find(id) {
        return db.find(el => el.id === id)
    },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(db.find(el => el.id === id))
        }, 1000)
    }
}