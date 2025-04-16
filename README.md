Write Description of Task
Name: E-Book Customer Dashboard
Step 1: Start an application with the ng serve command
Step 2: Fire http://localHost:4200/
Step 3: This link will redirect to the login page
Step 4: The user has to sign up first If a user tries without signup it will show an alert popup messege.
I added validation in that If a user tries to fill all columns then the signup button will enable otherwise not able to click.
Password at least contains Six letters and last thing password and confirm password will not match then it will show an error 
validation that your Password does not match
step 5: Once the User Signup process is successful then the credential will be stored on local storage with a hardcode token.
Step 6: Now, the user can log in and be redirected to the same page.
Step 7: After login, the user can access the dashboard features.
Step 8: We have two features on the dashboard 
        8.1: The user can purchase the book, If the user clicks on the purchase button then the popup will display on the screen. Book Purchased!  
	8.2: The user can read the book, If the user clicks on the read button then the related pdf will open.
Step 9: If the user is reading a book and steps away for some reason, the next time they open the PDF, it will automatically resume from the page they last left off.
Step 10: There is one more option Back to Dashboard button If the user clicks on it then it will go back again to the dashboard.
Step 11: This Task I made in angular 19.2.0 and used tailwind CSS