# AMAZON - BACKEND

- Camel Case
- Comments

```javascript
// Only /api endpoint
/**
 * @route   GET /api/books/details/:id
 * @desc    Books Details Endpoint
 * @access  Public
 */

//TODO: update profile func.
// Authentication - JSON WEB TOKEN (JWT-token)
```

- Export
  - module.exports = {router, abc}
  - const {router, abc} = require(“../../”)

# Authentication

    -* Sign In 
    -* Sign Up
    -* Log Out
    -* Current User
    - Google Authentication
    - Forgot Password
    - Reset Password

# Collections

- User Model
  - First Name \* str
  - Last Name \* str
  - Email \* str
  - Password \* str
  - Adress str
  - CreatedAt date
  - profileImg
  - likes array ref : productId
  - Role str enum
    - Seller
    - Customer
    - Admin

- Products
  - Product Model
    - name \* str
    - price \* number
    - img(url) array str
    - category ref from category model str
    - rating number
    - inStock number
    - seller ref from user model
    - desc \* str

- Category
  - name \* str

- Basket
  - product : ref from products by id
    - object of Array push() to quantity
  - owner : \_id ref from user modal

# Routes

> /api

- auth router /api/auth

  - sign up /api/auth/signup _**post**_  => PUBLIC
  - sign in(login) /api/auth/signin _**post**_  => PUBLIC
  - logout /api/auth/logout _**get**_  => PRIVATE
  - Current User /api/auth/currentuser _**get**_  => PRIVATE
  - Google Authentication 3rd part lib.  => PUBLIC
  - Forgot Password /api/auth/forgotpass _**post**_ send mail  => PUBLIC
  - Reset Password /api/auth/resetpass _**put**_  => PUBLIC

- profile router(private) api/profile

  - profile page api/profile _**get**_  => PRIVATE
  - update profile api/profile/update _**put**_  => PRIVATE

- ProductRouter api/products

  - productList api/products _**get**_     => PUBLIC
  - productDetail api/products/details/:id _**get**_    => PUBLIC
  - addProduct api/products/addProduct ****post**** - check seller auth - check product exist  => PRIVATE
  - updateProduct api/products/updateProduct ****put****   => PRIVATE
    - check seller auth
    - check product exist
    - check ownership of product
  - deleteProduct api/products/deleteProduct _**delete**_   => PRIVATE
    - check seller auth
    - check product exist
    - check ownership of product
  - likedProduct api/products/likes/:id ****get**** private  => PRIVATE
  - unlikedProduct api/products/unlikes/:id ****get**** private   => PRIVATE
  - Pagination
  - Sorting  ??  => frontend ??
  - Search  api/products/search  _**get**_  => PUBLIC
 
- Basket Router api/basket
  - getBasket api/basket  => PRIVATE
    - check seller auth 
  - addBasket api/basket/addToBasket ****post****   => PRIVATE
    - check seller auth 
    - check basket if product exists
  - updateBasket api/basket/updateToBasket ****put****  => PRIVATE
    - check seller auth
    - check basket if product exists
    - check ownership of basket
  - deleteBasket api/basket/deleteFromBasket _**delete**_  => PRIVATE
    - check seller auth
    - check basket if product exists
    - check ownership of basket
