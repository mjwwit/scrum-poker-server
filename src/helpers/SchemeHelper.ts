import { Scheme } from "../models/CardScheme"

export default class SchemeHelper{
     createScheme(schemeType: string, customScheme: (string|number)[] = []) : Scheme | never {
        switch(schemeType) {
            case 'fibonacci':
                return {
                        name: 'fibonacci',
                        scheme: [0,1,2,3,5,8,13,21]
               }
            case 'regular':
                return {
                    name: 'regular',
                    scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]
                }
            case 'custom':
                return {
                     name: 'custom',
                     scheme: customScheme
                }
            default:
                throw new Error("not a valid card scheme type");
        }
    }
}