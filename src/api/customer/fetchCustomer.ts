import { CustomerInterface } from "../../interfaces/customerInterface";
import fetchJson from "../apiUtils";
import { endpointCustomer } from "../api_host";


  async function customerPostData(data:CustomerInterface ): Promise<CustomerInterface> {
        const url = `${endpointCustomer}`;
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
        // Add any other headers you need
      },
      redirect: 'follow'
    };
    console.log('here')
    return fetchJson<CustomerInterface>(url, options);
  }
  
  

  export default customerPostData;