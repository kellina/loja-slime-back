const productDao = require('./dao/product-dao')
const userDao = require('./dao/user-dao')
const orderDao = require('./dao/order-dao')
const orderItemDao = require('./dao/order-itens-dao')

function initRoutes(app) {
    app.get('/', async function (req, res) {
        res.send('Endpoint disponivel: /products')
    })

    app.get('/products', async function (req, res) {
        let products = []
        if (req.query.nome) {
            products = await productDao.findByName(req.query.nome.toUpperCase())
        } else {
            products = await productDao.findAll()
        }
        res.send(products)
    })

    app.put('/cart', async function (req, res) {
        const { user_id, product_id, qty } = req.body

        let user = await userDao.findByUUID(user_id)
        if (user == null) {
            user = await userDao.insert({ uuid: user_id })
        }
        let cart = await orderDao.getUserCart(user.id)
        if (cart == null) {
            cart = await orderDao.createUserCart(user.id)
        }
        const item = await orderItemDao.insertItem({
            order_id: cart.id,
            product_id,
            quantity: qty,
        })
        res.send(item)
    })

    app.delete('/cart/:id', async function (req, res) {
        const cart_id = req.params.id
        const deletedItems = await orderDao.clearCart(cart_id)
        res.send(deletedItems)
    })

    app.delete('/cart/:cart_id/item/:product_id', async function (req, res) {
        const cart_id = req.params.cart_id
        const product_id = req.params.product_id
        const deleteItem = await orderItemDao.deleteItem(product_id, cart_id)
        res.send(deleteItem)
    })

    app.get('/cart/:userId', async function (req, res) {
        const userId = req.params.userId
        const listCart = await orderItemDao.listOrderItems(userId)
        res.send(listCart)
    })
}

module.exports = initRoutes
