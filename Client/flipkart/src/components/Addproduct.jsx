
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {createClient} from '@supabase/supabase-js'
const supabaseUrl='https://qtnjcascpndqwrrlrzaw.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bmpjYXNjcG5kcXdycmxyemF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NzQwMDYsImV4cCI6MjAzODM1MDAwNn0.SYniLh29pa_zj1Whv63uh3uqwH_zr_rB0nN3QjoNNLo';
const supabase = createClient(supabaseUrl,supabaseKey);
const Addproduct = () => {

    let [productdata, SetProductdata] = useState({
        name: "",
        description: "",
        price: "",
        image: ""
    })

    function handleImageChange(e) {

        console.log(e.target.files,"hehee");
        let file = e.target.files[0]
        console.log(file);
        SetProductdata({ ...productdata, image:file })
        
    }

    function handleChange(e) {
     
        let { name, value } = e.target
        SetProductdata({ ...productdata, [name]: value })
        console.log(productdata, "jejej");   
        
    }
    // async function done(e) {
    //     e.preventDefault();
    //     console.log('heheheh');

    //     let res = await axios.post('http://localhost:5000/api/users', productdata)
    //     console.log(res, 'resssss');
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Upload image to Supabase
          const { data, error } = await supabase.storage.from('flipkart').upload('product_images/' + productdata.image.name, productdata.image);
          if (error) {
            throw error;
          }
          // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
          // Get the URL of the uploaded image
          const imageUrl = `${supabaseUrl}/storage/v1/object/public/flipkart/product_images/${productdata.image.name}`;
          console.log(imageUrl,"blocking zzzzzzz");
      
          // Save restaurant data to MongoDB with image URL
          const response = await axios.post('http://localhost:5000/api/product', { ...productdata, image:imageUrl });
          if (response) {
            console.log(response,"resssssss");
            
            alert('product added successfully');
            // Reset form fields
         
          } else {
            alert('Failed to add product');
          }
        } catch (error) {
          console.error('Error adding product:', error);
          alert('Failed to add product');
        }
      };


    return (
        <div>

            <div className="popup" id="signup_popup">
                <div class="form">
                    <h4 style={{ display: "inline-block" }}>Add Product</h4>
                    {/* <h4 id="closesignup">X</h4> */}
                    <form action="" onSubmit={handleSubmit}>
                        <label for="">Name</label>
                        <br />
                        <input type="text" name='name'  value={productdata.name} placeholder='enter your product name' onChange={handleChange} class="product" />
                        <br />
                        <label for="">Description</label>
                        <br />
                        <input type="text" name='description' placeholder='description' class="product" value={productdata.description} onChange={handleChange} />
                        <br />
                        <label for="">Price</label>
                        <br />
                        <input type="number" name='price' placeholder="enter product price" class="product" value={productdata.price} onChange={handleChange} />
                        <br />
                        <label for="">Image</label>
                        <br />
                        <input type="file"  class="product"  onChange={handleImageChange}/>
                        <br />
                        {/* <button>Choose File</button> */}
                        <button id="button" type='submit'>Add</button>
                    </form>

                </div>
            </div>


            {/* <NavLink to='/
            
            
            login'> <span>Login</span></NavLink> */}

        </div>
    )
}

export default Addproduct
