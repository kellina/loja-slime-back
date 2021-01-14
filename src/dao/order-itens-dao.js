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

async function listOrderItems(userId) {
    const listCart = await sql`
    SELECT
    ord.id as cartId,
    prod.id as productId,
    prod.image,
    prod.name,
    prod.description,
    prod.price,
    item.quantity
  FROM
    order_items item
    INNER JOIN products prod ON (item.product_id = prod.id)
    INNER JOIN orders ord ON (item.order_id = ord.id)
    INNER JOIN users usr ON (ord.user_id = usr.id)
  WHERE usr.uuid = ${userId}
  ORDER BY prod.id;      
    `
    return listCart
}

async function deleteItem(product_id, order_id) {
    const [
        item,
    ] = await sql`delete from order_items where product_id=${product_id} and order_id =${order_id}  returning *`
    return item
}

module.exports = { insertItem, listOrderItems, deleteItem }
