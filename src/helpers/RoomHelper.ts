import { RoomConfiguration } from '../models/RoomConfiguration';
import { Room } from '../models/Room';
import SchemeHelper from './SchemeHelper';
import { InMemoryDatabase } from '../database/inMemoryDatabase';
import {v1 as uuid} from 'uuid'

export default class RoomHelper{


    constructor(private schemeHelper : SchemeHelper, private inMemoryDatabase: InMemoryDatabase<Room>) {}

     createRoom(roomConfiguration: RoomConfiguration): Room {
        return {id: uuid(), name: roomConfiguration.name, cardScheme: this.schemeHelper.createScheme(roomConfiguration.cardSchemeType, roomConfiguration.scheme), timeout:roomConfiguration.timeout}
    }

    saveRoom(room: Room): void {
       this.inMemoryDatabase.save(room);
      
    }


    
}