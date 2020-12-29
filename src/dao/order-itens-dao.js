const sql = require('./db')

async function insertItem(orderItem) {
    const [insertedItem] = await sql`insert into order_items ${sql(
        orderItem,
        'order_id',
        'product_id',
        'quantity'
    )} returning *`
    return insertedItem
}

async function listOrderItems(order_id) {
    const listCart = await sql`select * from order_items where order_id=${order_id}`
    return listCart
}

async function deleteItem(product_id, order_id) {
    const [
        item,
    ] = await sql`delete from order_items where product_id=${product_id} and order_id =${order_id}  returning *`
    return item
}

module.exports = { insertItem, listOrderItems, deleteItem }
