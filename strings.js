//STRINGS MANIPULATION

//CONCATENATION
favActorFirstName = "Rachel";
favActorLastName = "McAdams";
fullName = favActorFirstName + " " + favActorLastName;
console.log("Favorite actor's first name: " + favActorFirstName);
console.log("Favorite actor's last name: " + favActorLastName);
console.log("Favorite actor's full name (CONCATENATED): " + fullName);
//output: 
// Favorite actor's first name: Rachel
// Favorite actor's last name: McAdams
// Favorite actor's full name (CONCATENATED): Rachel McAdams

//UPPERCASE AND LOWERCASE STRINGS
uppercase = "rachel mcadams";
console.log("Favorite actor's full name: " + uppercase);
//output: Favorite actor's full name: rachel mcadams

//CHANGING THE LOWERCASE STRING TO UPPERCASE
uppercase = "rachel mcadams";
console.log("Favorite actor's full Name (WHEN CHANGED TO UPPERCASE): " + uppercase.toUpperCase());
//output: Favorite actor's full name (WHEN CHANGED TO UPPERCASE): RACHEL MCADAMS

//CHANGING THE UPPERCASE STRING TO LOWERCASE
lowercase = "YOSHI";
console.log("Favorite pet's name: " + lowercase);
//output: Favorite pet's name: YOSHI

lowercase = "YOSHI";
console.log("Favorite pet's name (WHEN CHANGED TO LOWERCASE): " + lowercase.toLowerCase());
//output: Favorite pet's name (WHEN CHANGED TO LOWERCASE): yoshi

//APPEND AND CHANGING CASE
message = "My favorite actor is " + uppercase.toUpperCase() + ".";
message += " Her best show is The Notebook."
console.log("APPENDED AND CHANGED CASE: " + message);
//output: APPENDED AND CHANGED CASE: My favorite actor is RACHEL MCADAMS. Her best show is The Notebook.

//overall output: 
// Favorite actor's first name: Rachel
// Favorite actor's last name: McAdams
// Favorite actor's full name (CONCATENATED): Rachel McAdams
// Favorite actor's full name: rachel mcadams
// Favorite actor's full name (WHEN CHANGED TO UPPERCASE): RACHEL MCADAMS
// Favorite pet's name: YOSHI
// Favorite pet's name (WHEN CHANGED TO LOWERCASE): yoshi
// APPENDED AND CHANGED CASE: My favorite actor is RACHEL MCADAMS. Her best show is The Notebook.




