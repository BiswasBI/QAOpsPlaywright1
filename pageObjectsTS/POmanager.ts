//const {LoginPage}=require('./LoginPage')
//const {ProductsListPage}=require('./ProductsListPage')
//const {CartPage}=require('./CartPage')
//const {OrderPlacePage}=require('./OrderPlacePage')
import { LoginPage } from "./LoginPage";
import { ProductsListPage } from "./ProductsListPage";
import { CartPage } from "./CartPage";
import { OrderPlacePage } from "./OrderPlacePage";
import {Page} from "@playwright/test";

export class POmanager
{   
    page:Page;
    loginPage:LoginPage;
    productsListPage:ProductsListPage;
    cartPage:CartPage;
    orderPlacePage:OrderPlacePage;

    constructor(page:Page)
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

