export interface Appointment {
   
    id:number,
    title: string,
    date:Date
}


/*

In TypeScript, the `export` keyword is used to make entities 
(such as variables, functions, classes, or interfaces) available 
for use in other files or modules. When you export an interface
 using the `export` keyword, it means that this interface can
  be imported and used in other files.

In your example:

typescript
export interface Appointment {
    // Interface members go here
}


The `export` keyword is used to make the `Appointment` interface
 accessible outside of the current file. This allows other TypeScript
  files to import and use this interface. For example,
   in another file, you could import and use the `Appointment` interface like this:

typescript
// Importing the Appointment interface from another file
import { Appointment } from './path-to-your-file';

// Using the Appointment interface
const myAppointment: Appointment = {
    // Populate with actual data
};


By exporting the interface, 
you enable the sharing of its definition across different parts of your TypeScript project,
 promoting modularity and maintainability.
*/