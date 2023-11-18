import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();
  appointments: Appointment[] = [];

  
  ngOnInit(): void {
    let saveAppointment = localStorage.getItem("appointment");

    this.appointments = saveAppointment ? JSON.parse(saveAppointment) : []
  }

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
    {
      let newAppoint: Appointment ={
        id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
      }


      this.appointments.push(newAppoint);

      

      this.newAppointmentTitle= "";
      this.newAppointmentDate= new Date();


      // to save it in local storage
      localStorage.setItem("appointment", JSON.stringify(this.appointments));


      /*
      

      This code is using the `localStorage.setItem` method to store data
       in the web browser's local storage. Here's a breakdown of each part of the code:

        javascript
        localStorage.setItem("appointment", JSON.stringify(this.appointments));


        - *`localStorage`*: This is a web storage object provided by browsers. 
        It allows you to store key/value pairs in a web browser with no expiration time.

        - *`setItem("appointment", ...)`*: This method is used to set a key-value 
        pair in the local storage. The first parameter is the key, and the 
        second parameter is the value.

        - *`"appointment"`*: This is the key under which the
         data will be stored. In this case, it's "appointment".

        - *`JSON.stringify(this.appointments)`*: The `JSON.stringify` method is
         used to convert the `this.appointments` object (presumably an array of appointments)
          into a JSON-formatted string. 
          This is necessary because `localStorage` can only store string key/value pairs.
           By using `JSON.stringify`, you convert the array 
           to a string representation that can be stored in `localStorage`.

        So, this line of code is storing the stringified representation 
        of the `this.appointments` array in the browser's local storage
         under the key "appointment". Later, you can retrieve this data
          using `localStorage.getItem("appointment")` and parse it back 
          into an array using `JSON.parse`.
              
      
      */

    }

  }

  deleteAppointment(index: number)
  {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointment", JSON.stringify(this.appointments));


    /*
    
    The `splice` method is a built-in JavaScript method that is used to change
     the contents of an array by removing or replacing existing elements
      and/or adding new elements. In the context of your code snippet:

      typescript
      deleteAppointment(index: number) {
          this.appointments.splice(index, 1);
      }


      Here's what each parameter does:

      - `index`: The index at which to start changing the array.
       In your case, it's the index of the appointment you want to delete.

      - `1`: The number of elements to remove from the array. 
      In this case, you want to remove only one appointment.

      So, `this.appointments.splice(index, 1)` is effectively removing one element
       at the specified index from the `appointments` array. 
       After calling this method, the array will be modified, 
       and the appointment at the specified index will be deleted.

    */
  }

}
