import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [];
  contactDetails!: Contact;
  id: number = 0;
  private sub: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
   if(this.route.snapshot.paramMap.get('id') != null)
   {
    this.getDetails();
  
   }
   else{
    this.getContacts();
   }

  }
  getContacts(){
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  getDetails(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.contactService.getDetails(this.id).subscribe((data) => {
       this.contactDetails = data;
     });
      // In a real app: dispatch action to load the details here.
   });
  }
}

