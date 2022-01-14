export class Product {
    id: string;
    detail: string;
    price: number;
    info:string;
    category:string;
  
    //constructor(ref:string,libelle:string,prix:number){this.ref = ref;this.libelle = libelle;this.prix = prix}
    constructor(){this.id = "";this.detail = "";this.price = 0;this.info="";this.category=""}
  }