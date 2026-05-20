//const base = require('@playwright/test');
import {test as baseTest} from '@playwright/test';
import { Interface } from 'node:readline';
interface TestDataForOrder {
    username: string;
    password: string;
    email: string;
    productName1: string;
    productName2: string;
};
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
    {
        testDataForOrder:  {      
        
            username:"tester@passthenote.com",
            password:"Tester@123",
            email:"tester1@passthenote.com",
            productName1:"Bluetooth Headphones",
            productName2:"Desk Lamp LED"

        
        }
        
        
    }

)