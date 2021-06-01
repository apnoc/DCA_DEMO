import React from 'react'
import {gql, useQuery, useMutation } from "@apollo/client"
import { Formik, Field, Form } from "formik";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"



const CREATE_CONTACT = gql`
  mutation createContact($contact: ContactInput!) {
    createContact(contact: $contact) {
      id
      firstname
      lastname
      email
      address
      	
      
    }
  }
`;




export function SessionForm() {	


  const [ create, { called, error } ] = useMutation(CREATE_CONTACT);

  if(called) return <p>Session Submitted Successfully!</p>

  if(error) return <p>Failed to submit session</p>

  return (	
    <div	
      style={{	
        width: "100%",	
        display: "flex",	
        alignContent: "center",	
        justifyContent: "center",	
        padding: 10,	
      }}	
    >	
      <Formik	
        initialValues={{	
          firstname: "",	
          lastname: "",	
          email: "",	
          address: "",
          phonenumber:"",	
        }}	
        onSubmit={ async (values) => {
          await create({ variables: {contact: values }});
        }}	
      >	
        {() => (	
          <Form style={{ width: "100%", maxWidth: 500 }}>	
            <h3 className="h3 mb-3 font-weight-normal">Submit a Session!</h3>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputFirstname">firstname</label>	
              <Field	
                id="inputFirstname"	
                className="form-control"	
                required	
                autoFocus	
                name="firstname"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputLastname">lastname</label>	
              <Field	
                type="textarea"	
                id="inputLastname"	
                className="form-control"	
                required	
                name="lastname"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputEmail">email</label>	
              <Field	
                name="email"	
                id="inputEmail"	
                className="form-control"	
                required	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputAddress">address</label>	
              <Field	
                name="address"	
                id="inputAddress"	
                className="form-control"	
                required	
              />	
            </div>	
            <div style={{ justifyContent: "center", alignContent: "center" }}>
              <button className="btn btn-primary">Submit</button>	
            </div>
          </Form>	
        )}	
      </Formik>	
    </div>	
  );	
}



const ContactForm = () => {
const client = new ApolloClient({
cache: new InMemoryCache(),
link: new HttpLink({
uri: "http://localhost:4000/graphql" // your graphql server link
}),
credentials: "same-origin",
})

return (
<>
                                                                                                   
<ApolloProvider client={client}>
<div>
<ContactForm />

</div>
</ApolloProvider>

</>
);
};

export default ContactForm;
