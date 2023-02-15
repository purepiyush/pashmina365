import React from "react";

const separate = () => {

    const handleToken = async(token)=>{
        //  console.log(token);
        const cart = {name: 'All Products', totalPrice}
        const response = await axios.post('http://localhost:8080/checkout',{
            token,
            cart
        })
        console.log(response);
        let {status}=response.data;
        console.log(status);
        if(status==='success'){
            history.push('/');
            toast.success('Your order has been placed successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
              
              const uid = auth.currentUser.uid;
              const carts = await fs.collection('Cart ' + uid).get();
              for(var snap of carts.docs){
                  fs.collection('Cart ' + uid).doc(snap.id).delete();
              }
        }
        else{
            alert('Something went wrong in checkout');
        }
     }
     
  return (
    <div>
        {/* for stripe button */}
        {/* ------------------------------------ */}
      <StripeCheckout
        stripeKey="pk_test_51Hhu6bK4kL4WRmvGEUkTmdFw1lUtTAnadBSDb0eXGuA2JJGrntIBdm10llYu5RbPbLbaS1My74Rgdi0n5ePYIGB600p3V4GKmK"
        token={handleToken}
        billingAddress
        shippingAddress
        name="All Products"
        amount={totalPrice * 100}
      ></StripeCheckout>
      {/* ---------------------------------- */}
    </div>
  );
};

export default separate;
