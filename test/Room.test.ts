import RoomHelper from '../src/helpers/RoomHelper';
import { RoomConfiguration } from '../src/models/RoomConfiguration';
import { Room } from '../src/models/Room';
import SchemeHelper from '../src/helpers/SchemeHelper';
import { InMemoryDatabase } from '../src/database/inMemoryDatabase';
import { Scheme } from '../src/models/CardScheme';


function createMock(returnValue: any) {
    return {
        createScheme: () => {
         return returnValue
        }
    } 
}
jest.mock("uuid/v1", () => {
    return jest.fn(() => {
         let value = 1;
        return String(value++);
    });
  });

describe('create room', () => {
    
    afterEach(() =>{
        jest.clearAllMocks()
    })

    it('should create room regular', () => {
        const schemeHelperMock : any = createMock({type: "regular", scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]});
       
        const roomhelper = new RoomHelper(schemeHelperMock, new InMemoryDatabase<Room>());
        const dummyRoom: RoomConfiguration = {name:"scrum", cardSchemeType: "regular", timeout:0}
        const room: Room = roomhelper.createRoom(dummyRoom)
        expect(room).toEqual({id: '1', name:"scrum", cardScheme: {type: "regular", scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]}, timeout:0})
    });
    
    it('should create room fibonacci', () => {
        const schemeHelperMock : any = createMock({type: "fibonacci", scheme: [0,1,2,3,5,8,13,21]});

        const roomhelper = new RoomHelper(schemeHelperMock, new InMemoryDatabase<Room>());
        const dummyRoom: RoomConfiguration = {name:"scrum", cardSchemeType: "fibonacci", timeout:0}
        const room: Room = roomhelper.createRoom(dummyRoom)
        expect(room).toEqual({id: '1', name:"scrum", cardScheme: {type: "fibonacci", scheme: [0,1,2,3,5,8,13,21]}, timeout:0})
    });

    it('should create room custom', () => {
        const schemeHelperMock : any = createMock({type: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21]});
        const roomhelper = new RoomHelper(schemeHelperMock, new InMemoryDatabase<Room>())
        const dummyRoom: RoomConfiguration = {name:"scrum", cardSchemeType: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21], timeout:0}
        const room: Room = roomhelper.createRoom(dummyRoom)
        expect(room).toEqual({id: '1', name:"scrum", cardScheme: {type: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21]}, timeout:0})
    });

    it('should throw exception', () => {
        const roomhelper = new RoomHelper(new SchemeHelper, new InMemoryDatabase<Room>())
        const dummyRoom: any = {name:"scrum", cardSchemeType: 'false', timeout:0}

        expect(() => {roomhelper.createRoom(dummyRoom)}).toThrow('not a valid card scheme type')
    });
  
    it('should add an unique identifier when creating room', () => {
        const roomHelper = new RoomHelper(new SchemeHelper, new InMemoryDatabase)
        const dummyRoom : RoomConfiguration = {name: "scrum", cardSchemeType: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21], timeout: 0}
        const room : Room = roomHelper.createRoom(dummyRoom)

       expect(room.id).toBe('1')
    });
});

describe('save room', () =>{
    it('should save one room', () => {
        const inMemoryDB = new InMemoryDatabase<Room>();
        const roomhelper = new RoomHelper(new SchemeHelper, inMemoryDB)
        const room = {id: '1', name:"scrum", cardScheme: {name: "fibonacci", scheme: [0,1,2,3,5,8,13,21]}, timeout:0}
        roomhelper.saveRoom(room); 
        const retrievedDB = inMemoryDB.retrieveDB();
        expect(retrievedDB).toEqual([room]);
    });

    it('should save multiple rooms', () => {
        const inMemoryDB = new InMemoryDatabase<Room>();
        const roomhelper = new RoomHelper(new SchemeHelper, inMemoryDB)
        const roomOne = {id: '1', name:"scrum", cardScheme: {name: "fibonacci", scheme: [0,1,2,3,5,8,13,21]}, timeout:0}
        const roomTwo ={id: '2', name:"bluefront", cardScheme: {name: "custom", scheme: ['eerste','B. building',2,3,5,8,'number',21]}, timeout:0}
        roomhelper.saveRoom(roomOne); 
        roomhelper.saveRoom(roomTwo); 
        const retrievedDB: Room[] = inMemoryDB.retrieveDB();
        expect(retrievedDB).toEqual([roomOne, roomTwo]);    
    });

  
});
