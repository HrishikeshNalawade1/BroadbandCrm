import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {
  filterTerm: any;

  
  constructor(private service:ServiceService) { }

  leadList:any=[];
  ModalTitle:string |undefined;
  ActivateAddEditLeadComp:boolean=false;
  lead:any;


  ngOnInit(): void {
    this.refreshLeadList();
  }

  addClick()
  {
    this.lead={
      LeadId:0,
      Name:"",
      City:"",
      State:"",
      Gender:"",
      PhoneNo:"",
      Remark:"",
      CreatedBy:"",
      CreatedDate:"",
      Status:""
    }
    this.ModalTitle="Add Lead";
    this.ActivateAddEditLeadComp=true;
  }

  editClick(item:any)
  {
    console.log(item);
    this.lead=item;
    this.ModalTitle="Edit Lead";
    this.ActivateAddEditLeadComp=true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are You Sure??'))
    {
      this.service.deleteLead(item.LeadId).subscribe(data=>{
        alert("Data Deleted Sucessfully");
        this.refreshLeadList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditLeadComp=false;
    this.refreshLeadList();
  }


  refreshLeadList()
  {
    this.service.getLead().subscribe(data=>{
      this.leadList=data;
    });

  }
  
  // SearchClick(item:any)
  // {
  //   this.service.searchLead(item.LeadId).subscribe(data=>{
  //     this.lead=data;
  //   });

  // }

}
