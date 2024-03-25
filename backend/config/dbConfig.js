const mongoose = require('mongoose')

const handleDbConnect = async (url) => {
    return await mongoose.connect(url)
}

module.exports = {
    handleDbConnect
}