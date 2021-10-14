// modele de référence , des qu'on crée un user on se refere à cette classe 
export class User {
    constructor(public Nom:string,  public prenom:string, public adresse:string, public codePostal:string, public ville:string, public telephone:string, public mail:string, public civilite:string, public login:string, public password:string)
    {
      this.Nom = Nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.ville = ville;
      this.telephone = telephone;
      this.mail = mail;
      this.civilite = civilite;
      this.login = login;
      this.password = password;
      
    }
  }
  //faire comme ici pour product  OK
  // faire un service pour lier les deux    OK 
  //json à mettre dans assets      OK
  //ne pas oublier d'importer par le constructeur http + creer une variable locale products [] + emit products OK
  
