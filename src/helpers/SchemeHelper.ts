import { CardScheme, CustomScheme, RegularScheme, FibonacciScheme } from '../models/CardScheme';
export default class SchemeHelper{

     createScheme(schemeType: string, customScheme?: (string|number)[]): CardScheme | never {
        let cardScheme: CardScheme = {type: '', scheme: []}
        switch(schemeType) {
            case 'fibonacci':
                    cardScheme = this.createFibonacciScheme()
                break;
            case 'regular':
                    cardScheme = this.createRegular()
                break;
            case 'custom':
                    cardScheme = this.createCustom(customScheme || [])
                break;
             default:
                throw new Error("not a valid card scheme type");
        }
        
        return cardScheme;
    }

    private createCustom(customArray: (string|number)[]): CustomScheme {
        return {
            type: 'custom',
            scheme: customArray
        }
    }
    private createRegular(): RegularScheme {
        return {
            type: 'regular',
            scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]
        }
    }

    private createFibonacciScheme(): FibonacciScheme {
        return {
            type: 'fibonacci',
            scheme: [0,1,2,3,5,8,13,21]
        }
    }
}