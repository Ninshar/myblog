module.exports = {
    port:3000,
    session:{
        secret:'myblog',
        key:'myblog',
        maxAge:2592000000
    },
    mongodb:'mongodb://localhost:27017/myblog'
    // mongodb://linxia:linxia@ds141401.mlab.com:41401/linbolg
}