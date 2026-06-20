//const {LoginPage}=require('./LoginPage')
//const {ProductsListPage}=require('./ProductsListPage')
//const {CartPage}=require('./CartPage')
//const {OrderPlacePage}=require('./OrderPlacePage')
import { LoginPage } from "./LoginPage";
import { ProductsListPage } from "./ProductsListPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import {Page} from "@playwright/test";

export class POmanager
{   
    readonly page:Page;
    readonly loginPage:LoginPage;
    readonly productsListPage:ProductsListPage;
    readonly cartPage:CartPage;
    readonly checkoutPage:CheckoutPage;

    constructor(page:Page)
    {
        this.page=page;
        this.loginPage=new LoginPage(this.page);     
        this.productsListPage=new ProductsListPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.checkoutPage=new CheckoutPage(this.page);
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

    getCheckoutPage()
    {
        return this.checkoutPage;
    }
}

// Use ES module exports (TypeScript). Removed CommonJS export to fix TS error.
export default POmanager;

