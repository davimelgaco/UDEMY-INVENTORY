const serviceUser = require('../service/user')


 
class ApiUser {
    async FindById(req, res) {
        try {
            const {id, organizationId} = req.session

            const user = await serviceUser.FindById(organizationId, id)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = req.session.organizationId
            const users = await serviceUser.FindAll(organizationId)

            res.status(200).send({ users })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Create(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { name, email, password, role } = req.body
            const user = await serviceUser.Create(organizationId, name, email, password, role)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = req.session.organizationId
            const id = req.params.id || req.session.id
            const { name, email, password, role } = req.body
            const user = await serviceUser.Update(organizationId, id, name, email, password, role)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = req.session.organizationId
            const id = req.params.id || req.session.id
            const user = await serviceUser.Delete(organizationId, id)

            res.status(200).send({ user })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Login(req, res) {
        try {
            const { email, password } =req.body
            const token = await serviceUser.Login(email, password)

            res.status(200).send({ token })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ApiUser()