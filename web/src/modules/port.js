module.exports = {
    port: process.env.PORT || 2022,
    callback: ()=>{console.log('Server listening on port' + this.port)}
};