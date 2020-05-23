import React,{useState} from "react";
import Base from "../core/Base";

export default function contact() {
  const contactForm = () => {
    return (
      <div className="row">
        <form className="col-md-6 offset-sm-3 text-left">
        <div className='form-group'>
            <label for='exampleFormControlInput1'>Name</label>
            <input
              type='text'
              class='form-control'
              id='exampleFormControlInput1'
            />
          </div>
          <div className='form-group'>
            <label for='exampleFormControlInput1'>Email address</label>
            <input
              type='email'
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='some@xyz.com'
            />
          </div>
          <div className='form-group'>
            <label for='exampleFormControlInput1'>Query</label>
            <textarea
              type='email'
              class='form-control'
              rows="5"
              placeholder='Please describe your query'
            />
          </div>
          <button type="submit" class="btn btn-info rounded">send</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Base
        title='If you have any query please feel free to contact our team'
        description=''
      >
        {contactForm()}      
      </Base>
    </div>
  );
}
