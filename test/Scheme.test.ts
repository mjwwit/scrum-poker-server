import { Scheme } from '../src/models/CardScheme';
import SchemeHelper from '../src/helpers/SchemeHelper';

describe('Create schemes', () => {
    
    it('should create a fibonacci scheme', () => {
        const schemeHelper = new SchemeHelper()
        const cardScheme : Scheme =  schemeHelper.createScheme("fibonacci")
        console.log(cardScheme)
        expect(cardScheme).toMatchObject({name: "fibonacci", scheme: [0,1,2,3,5,8,13,21]})

    });
    it('should create a regular scheme', () => {
        const schemeHelper = new SchemeHelper()
         const cardScheme : Scheme =  schemeHelper.createScheme('regular')
         expect(cardScheme).toMatchObject({name: "regular", scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]})
    });
    it('should create a custom scheme', () => {
        const schemeHelper = new SchemeHelper()
         const cardScheme : Scheme =  schemeHelper.createScheme('custom', ['eerste','B. building',2,3,5,8,'number',21])
         expect(cardScheme).toMatchObject({name: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21]})
    });
});