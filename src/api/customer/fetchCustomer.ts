import { CustomerInterface } from "../../interfaces/customerInterface";
import fetchJson from "../apiUtils";
import { endpointCustomer } from "../api_host";
/*
async function fetchCustomer(userId: number): Promise<User> {
    const url = `https://api.example.com/users/${userId}`;
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
      },
    };
  
    return fetchJson<User>(url, options);
  }
*/

  async function customerPostData(data:CustomerInterface ): Promise<CustomerInterface> {
    const url = `${endpointCustomer}`;
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      
        // Add any other headers you need
      },
    };
    console.log(url)
    return fetchJson<CustomerInterface>(url, options);
  }

  export default customerPostData;