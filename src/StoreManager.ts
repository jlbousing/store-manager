export class StoreManager {

    static storeObject(key: string,data: any) {
        if(typeof window !== 'undefined') {
            window.localStorage.setItem(key,JSON.stringify(data));
        }
    }
    
    static getObject(key: string): any {
        if(typeof window !== 'undefined') {
            const data: any = window.localStorage.getItem(key);
            const result = JSON.parse(data);
    
            return result;
        }
    }

    static removeAllObjects() {
        if (typeof window !== "undefined") {
            window.localStorage.clear();
        }
    }
}
