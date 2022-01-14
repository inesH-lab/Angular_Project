
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "src/app/Models/User.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {
user : User = new User(
    
        ' ',
        '',
        ' ',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    
);


}