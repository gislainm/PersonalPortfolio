import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {info} from "../../info/Info";
import SocialIcon from "../home/SocialIcon";
import { useState } from 'react';
import axios from "axios";

export default function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [submitted,setSubmitted] = useState(false);
    const [messageValid,setMessageValid] = useState("");
    const submitMessage = async ()=>{
        let info; 
        if(phone===""){
            info = {name,email,subject,phone:'null',message};
        }else{
            info = {name,email,subject,phone,message};
        }
        if(!name || !email || !subject || !message){
            setSubmitted(true);
        }else{
            setSubmitted(false);
            try {
                const response = await axios.post("https://8px5osa9yd.execute-api.us-east-1.amazonaws.com/version1/contact", info);
                setMessageValid(response.data);
            } catch (error) {
                console.log(error)
                setMessageValid("Something went wrong.try again");
            }
            setTimeout(()=>{
                setMessageValid("");
            },4000)
        }
    }
  return (
    <Box
    display={'flex'} 
    flexDirection={'row'} 
    justifyContent={'center'} 
    mt={'3rem'}
    mx={'10%'}
    px={6} 
    py={5}
    border={'2px solid grey'} 
    borderRadius={'25px'}
    >
        <Box>
            <h3 style={{fontSize: '1.4rem', color:'grey',fontWeight:400,marginBottom:'3px'}}>Contact </h3>
            <p style={{fontSize: '1.4rem',fontWeight:600,marginBottom:'15px'}}>Leave a message for me, I will get back to you as soon as possible.</p>
            <h3 style={{fontSize: '1.4rem', color:'grey',fontWeight:400,marginBottom:'3px'}}>NEED OTHER WAYS? </h3>
            <p style={{fontSize: '1.4rem',fontWeight:600}}>You can also contact me via my other social media platforms if that suits you. Links are down below.</p>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}} m={3}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
        </Box>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70ch' },
                width:'70%',
                '& fieldset.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'green',
                },
            }}
            noValidate
            autoComplete="off"
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'} 
        >
      <div>
        <TextField
          required
          id="subject"
          label="Subject"
          color="secondary"
          defaultValue = {subject}
          placeholder="Please Enter message subject"
            InputLabelProps={{
                style: {color: 'green'},
            }}
            onChange={(e)=>setSubject(e.target.value)}
            error={submitted && subject ==="" ?true:false}
            helperText={submitted && subject === "" ? ' The subject is required!' : ''}
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-error"
          label="Name"
          color="secondary"
          placeholder="Please Enter your fullname"
          InputLabelProps={{
            style: {color: 'green'},
        }}
          defaultValue={name}
          onChange={(e)=>setName(e.target.value)}
          error={submitted && name ==="" ?true:false === ""}
          helperText={submitted && name === "" ? ' The name is required!' : ''}
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-error"
          label="Email"
          defaultValue={email}
          placeholder="Please Enter your email"
          color="secondary"
          InputLabelProps={{
            style: {color: 'green'},
        }}
        onChange={(e)=>setEmail(e.target.value)}
        error={submitted && email ==="" ?true:false === ""}
        helperText={submitted && email === "" ? ' The email is required!' : ''}
        />
      </div>
      <div>
      <TextField
          id="outlined-error"
          label="Phone"
          color="secondary"
          defaultValue={phone}
          type='number'
          inputProps={{ maxLength: 12 }}
          placeholder="Please Enter your phone number"
          InputLabelProps={{
            style: {color: 'green'},
        }}
        onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <div>
      <TextField
        required
          id="outlined-error"
          label="Message"
          multiline
          rows={4}
          color="secondary"
          defaultValue={message}
          placeholder="Please Enter your message"
          InputLabelProps={{
            style: {color: 'green'},
        }}
        onChange={(e)=>setMessage(e.target.value)}
        error={submitted && message ==="" ?true:false}
        helperText={submitted && message === "" ? ' The message is required!' : ''}
        />
      </div>
      <Button variant="outlined" color='success' onClick={submitMessage}>Send Message</Button>
      <p style={{fontSize: '1.2rem',fontWeight:400,marginTop:'5px'}}>{messageValid}</p>
    </Box>
    </Box>
  );
}