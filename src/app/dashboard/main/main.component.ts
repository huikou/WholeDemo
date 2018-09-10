import { Component, OnInit } from '@angular/core';
import {  
  NgbModal,  
  ModalDismissReasons  
} from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private modalService: NgbModal) {     }
  showModal(content) {  
    this.modalService.open(content).result.then(  
        (closeResult) => {  
            //modal close  
            console.log("modal closed : ", closeResult);  
        }, (dismissReason) => {  
            //modal Dismiss  
            if (dismissReason == ModalDismissReasons.ESC) {  
                console.log("modal dismissed when used pressed ESC button");  
            } else if (dismissReason == ModalDismissReasons.BACKDROP_CLICK) {  
                console.log("modal dismissed when used pressed backdrop");  
            } else {  
                console.log(dismissReason);  
            }  
        })  
}  
  ngOnInit() {
  }


}
