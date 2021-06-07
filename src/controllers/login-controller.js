
const userService = require('../services/user-service')

const login = async (req, res, next) => {
    try {
        const {dni, password} = req.body;
        const response = await userService.login(dni, password);
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = { login }