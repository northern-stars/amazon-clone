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

    -* Sign In✅
    -* Sign Up✅
    -* Log Out✅
    -* Current User✅
    - Forgot Password✅
    - Reset Password✅

# Collections

- User Model✅
  - First Name \* str
  - Last Name \* str
  - Email \* str
  - Password \* str
  - Adress str
  - CreatedAt date
  - profileImg
  - Basket
  - likes array ref : productId
  - Role str enum
    - Seller
    - Customer
    - Admin
      TODO: middleware for checking seller to add product

- Products✅
  - Product Model
    - name \* str
    - price \* number
    - img(url) array str
    - category enum
    - rating number
    - inStock number
    - seller ref from user model
    - desc \* str

# Routes

> /api

- auth router /api/auth ✅

  - sign up /api/auth/signup _**post**_  => PUBLIC
  - sign in(login) /api/auth/signin _**post**_  => PUBLIC
  - logout /api/auth/logout _**get**_  => PRIVATE
  - Current User /api/auth/currentuser _**get**_  => PRIVATE
  - Forgot Password /api/auth/forgotpass _**post**_ send mail  => PUBLIC
  - Reset Password /api/auth/resetpass _**put**_  => PUBLIC

- profile router(private) api/profile ✅

  - profile page api/profile _**get**_  => PRIVATE
  - update profile api/profile/update _**put**_  => PRIVATE

- ProductRouter api/products ✅

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
  
  =======================

  - Pagination
  - Sorting
  - Search  api/products/search  _**get**_  => PUBLIC
 
- Basket Router api/basket 
  - getBasket api/basket  => ****get****  PRIVATE
    - check seller auth  

  - addProduct api/basket/add/:id ****get****   => PRIVATE
    - check seller auth 
    - check basket if product exists

  - removeProduct api/basket/remove/:id _**get**_  => PRIVATE
    - check seller auth
    - check basket if product exists
