const express = require('express');
const database = require('./src/database');
const organization = require('./src/model/organization');
const user = require('./src/model/user');
const product = require('./src/model/product');
const inventory = require('./src/model/inventory');
const inventoryMovement = require('./src/model/inventoryMovement');
const organizationRouter = require('./src/routes/organization');
const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/products');
const inventoryRouter = require('./src/routes/inventory');
const movementRouter = require('./src/routes/inventoryMovement');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api/v1/login', () => {})

app.use('/api/v1/organization', organizationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', movementRouter)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info(`Servidor rodando na porta ${port}`);

        })
        console.error(`Não foi possivel conectar com o banco ${e}`);

    })
    .catch((e) => {
    })