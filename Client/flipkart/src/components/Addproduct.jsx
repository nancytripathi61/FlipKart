
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
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

        
    }

    function handleChange(e) {
     
        let { name, value } = e.target
        SetProductdata({ ...productdata, [name]: value })
        console.log(productdata, "jejej");   
        
    }
    async function done(e) {
        e.preventDefault();
        console.log('heheheh');

        let res = await axios.post('http://localhost:5000/api/users', productdata)
        console.log(res, 'resssss');
    }

    return (
        <div>

            <div className="popup" id="signup_popup">
                <div class="form">
                    {/* <h4 style={{ display: "inline-block" }}>Sign up</h4> */}
                    {/* <h4 id="closesignup">X</h4> */}
                    <form action="" onSubmit={done}>
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
                        <input type="file" name='image' class="product" value={productdata.image}  onChange={handleImageChange}/>
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
