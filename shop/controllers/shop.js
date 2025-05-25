const getShop= (req, res) => {
    res.send("<form action='/shop/10001' method='POST'><button type='submit'>Submit</button> </form>");
};

const postShop= (req, res) => {
    res.send("<h2>Welcome "+ req.params.userId+"</h2>")
};

module.exports = {getShop,postShop};