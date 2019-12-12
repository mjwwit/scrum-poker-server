export class InMemoryDatabase<T> {

    private DB: T[] = []

    save(saveAble: T) {

        this.DB.push(saveAble)
    }

    retrieve(props: any) {
    }

    retrieveDB(): T[] {
        return this.DB;
    }
}