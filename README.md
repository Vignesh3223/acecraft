#  ACECRAFT

    This project was developed with a reference to the Acecraft web application ("https://www.acecraft.in/")


# Installed Packages

    1. Bootstrap 5
    2. primeNG
    3. Sweetalert
    4. Font Awesome (used by cdn)


# Components created externally

    Total number of components created ( excluding app component - root module ) are 
        1. 15 Parent Components
        2. 7 Child Components
    
    3 components are child of Honda Component which contains components such as single-product, view-product, product-list

    3 components are child of Uniforms Component which contains components such as single-item, view-item, items-list

   One is the child of Notes Component that is viewnote component


# Bootstrap and primeNg Components Used

    1. Bootstrap Modal
    2. Bootstrap Cards
    3. Bootstrap Navbar
    4. primeNG Carousel Module
    5. primeNG Timeline Module
    6. primeNG Badge Module
    7. primeNG Dialog Module
    8. primeNG Button Module


# Login and Register Component

    In this project , I have included sign-up and sign-in to access cart component, if a user wants to add items to cart / to place order first he/she have to signup for a new account and the data is stored in the database (JSON), the user can only login with the same credentials he used to create an account (signup).

    If the user provides the credentials that are not stored in the database the he/she won't get access and it will dispaly the sweetalert error message as "User not found" in the form of toast.

    If the credentials are valid then it will show the success toast message as "Login Success".


# Reactive Forms

    In this project , I used reactive form for both login and register form with form attributes such as 
    FormBuilder, FormGroup, FormControl and Validators

    FormBuilder - used to build/construct the form

    FormGroup - this attribute contains the total form

    FormControl - this attribute contains the fields of the form

    Validators -  these validators are used for validation checking such as required field , 
    pattern validation for email and passwords.


# notes and viewnote component

    viewnote is the sub-component of notes

    note component contains the title of the note from database and viewnote contains all the details of the note

  
# single-product and single-item components

    These are the child components of Honda and Uniforms Components

    The Honda component is a sub-component of Enterprise component and Uniforms is a sub-component of School component

    The data of these both Components are fetched from json with the help of HTTPClient request.

    This component is to display the single product's image and title.


# view-product and view-item component

    These components are extended versions of  view-product and view-item components, these components display the entire details of the product such as product code, brand, price, discount, size, description etc.,

    These Component contains two buttons add-to-cart button and buy-now button.


# cartitems component

    This component stores the details of products added to the cart, whenever a product is added (i.e: the add-to-cart button is clicked) the details of the product are stored in the database using post method and fetched from the database.

    The Quantity of the product(s) also increased and decreased with a toast message "Quantity updated successfully" , whenever the Quantity is increased or decreased the price also gets changed based on the Quantity.


# sort pipe 

    I have included pipes concept to sort the products based on their price either from low-to-high or high-to-low and also based on name either in ascending or descending order.


# authguard for cart

    I have created an authentication guard for user login , the user can login only if he hold an account.
    Then , I have set the guard for cart , that is no user can access cart without signing in.


# stripe payment

    For payment process , I have integrated stripe payment with the code , it will show the actual total of the products that are in the cart when we click on Place Order.

    The Stripe payment has its own styling of payment dialog boxes , but i have used the standard style of stripe payment.