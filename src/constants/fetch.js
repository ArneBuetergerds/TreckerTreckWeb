export default class Fetch{
    constructor(){
        this.header = {
            'Content-Type': 'application/json'
        };
        this.sentData = null;
    }

    fetchFromApi(url, method, data, noResult = false) {


        this.sentData= {
            method: method
        };
        if (method.toUpperCase() !== 'GET' && data) {
            this.sentData.body = JSON.stringify(data);
        }

        return new Promise((resolve, reject) =>{
            console.log(url);
            window.fetch(url, this.sentData).then((data) =>{
                if (data.status === 200 || data.status === 204)
                {
                    if(data.status === 204)
                        resolve(data.status);
                    if(noResult)
                        resolve(data.status);
                    else
                        return data.json();
                }
                if(data.status === 400 && url.indexOf("charging") > -1){
                    console.log("400 ", data.body);
                    reject(data.json());
                }

                reject(data.status);
            }).then((data) =>{
                if(data !== undefined)
                    if(data.Status != undefined)
                        if(data.Status != 0)
                            reject(data.Status);
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}
