const {LoginPage}=require('./LoginPage')
const {ProductsListPage}=require('./ProductsListPage')
const {CartPage}=require('./CartPage')
const {OrderPlacePage}=require('./OrderPlacePage')

class POmanager
{
    constructor(page)
    {
        this.page=page;
        this.loginPage=new LoginPage(this.page);     
        this.productsListPage=new ProductsListPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.orderPlacePage=new OrderPlacePage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getProductsListPage()
    {
        return this.productsListPage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getOrderPlacePage()
    {
        return this.orderPlacePage;
    }
}

module.exports={POmanager}

