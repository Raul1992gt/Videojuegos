//Clase que guarda los juegos
export class Juego{
    //Creo atributo privado para el id
    private _id : number = 0;

    //Atributo estático para el ciclo de vida del id
    private static contadorId : number = 1;

    //Constructor con los parámetros de entrada más el id y el contador
    constructor(public title: string, public company: string, public cover : string, public rating : number, public detail : string){
        this._id = Juego.contadorId++;
        this.company = company;
        this.cover = cover;
        this.rating = rating;
        this.detail = detail;
    }

    public get id(): number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Company: ${this.company}, Rating: ${this.rating}, Detail: ${this.detail}, Cover: ${this.cover}`;
    }
}