import React, { useState } from 'react';
import Input from "./components/Input";

const App = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [url, setUrl] = useState(undefined);
  const [validated, setValidated] = useState(undefined);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value.trim();
    console.log(name);
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'url':
        setUrl(value);
        break;
      default:  
        throw new Error('Invalid input name');
    }
  }

  function checkName() {
    if (!name) return false ;
    const englishAplphabet = /^[a-zA-Z]+$/;
    let nameLength = name.length;
    if ((nameLength >= 3 && nameLength <= 30) && (englishAplphabet.test(name.replace(/ /g, "")))) {
      return true
    };
    return false
  }

  function checkEmail() {
    if (!email) return false;
    const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/;

    return emailPattern.test(email);
  }

  function checkPhone() {
    if (!phone) return false;
    let firstNumber = parseInt(phone[0]);
    if ((phone.length === 10) && (firstNumber !== 0 && firstNumber !== 1)) {
      return true;
    };
    return false;
  }

  function checkUrl() {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i')
    
    return urlPattern.test(url);
  }

  function checkValidation(e) {
    e.preventDefault();

    let validation = [
      checkName(), 
      checkEmail(),
      checkPhone(),
      checkUrl()
    ].every(value => value === true);

    setValidated(validation);

    return validated;
  }

  return (
    <div className="App" style={{width: '600px',   margin: '20px auto'}}>
      <h1 className="text-center" style={{marginBottom: '60px'}}>Form Validation</h1>
      <div>
        <div>
          <form onSubmit={checkValidation}>
            <Input 
              label={'Name'} 
              name={'name'}
              type={'text'}   
              placeholder={'John Doe'} 
              handleChange={handleChange} />
            <Input 
              label={'Email'} 
              name={'email'} 
              type={'text'} 
              placeholder={'john@doe.com'} 
              handleChange={handleChange} />
            <Input 
              label={'Phone'} 
              name={'phone'} 
              type={'tel'} 
              placeholder={'Enter your phone number'}
              handleChange={handleChange} />
            <Input 
              label={'Blog URL'}
              name={'url'} 
              type={'text'} 
              placeholder={'Enter your Blog URL'}
              handleChange={handleChange} />
            <div className="text-center">
              <button type="submit" className="success button large" style={{marginTop: '20px'}}>Verify</button>
            </div>
          </form>
          <div className="h3 text-center">{!validated ? 'Form is Incomplete!' : 'Form is Complete!'}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
