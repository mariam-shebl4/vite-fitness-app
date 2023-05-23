import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClientsList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const deleteClient = async (id) => {
    try {
      await axios.delete(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`);
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div>
    
      <h2 >Clients List</h2>
      <Link to="/clients/add" className="head">Create Client</Link>
      {clients?.length>0?(
      <table className="customTable" width={"100%"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Subscription Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {  clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              <td>{client.subscriptionType}</td>
              <td style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Link to={`/clients/${client.id}`} style={{color:"blue"}}>View</Link> |
                <Link to={`/clients/${client.id}/edit`} style={{margin:"0 10px", color:"green"}}>Edit</Link> 
                <button onClick={() => deleteClient(client.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
            </tbody>
      </table>
          ): (<h1>there is no data to show</h1>)
            
          }
      
    </div>
  );
};

export default ClientsList