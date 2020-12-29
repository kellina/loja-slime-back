const sql = require('./db')

async function getUserCart(user_id) {
    const [
        cart,
    ] = await sql`select * from orders where user_id=${user_id} and status='cart'`
    return cart
}

async function createUserCart(user_id) {
    const order = { user_id, status: 'cart' }
    const [insertedCart] = await sql`insert into orders ${sql(
        order,
        'user_id',
        'status'
    )} returning *`
    return insertedCart
}

async function clearCart(id) {
    const [
        items,
    ] = await sql`delete from order_items where order_id=${id} returning *`
    return items
}

module.exports = { getUserCart, createUserCart, clearCart }
