import { Component,OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
 id: number = 0;
  private sub: any;

  contacts!: Contact ;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.contactService.getDetails(this.id).subscribe((data) => {
        this.contacts = data;
      });
       // In a real app: dispatch action to load the details here.
    });


  }

 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
