import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const ClientDetails = () => {
    const [client, setClient] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
  
    const fetchClient = async () => {
      try {
        const response = await axios.get(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Error fetching client:', error);
      }
    };
  
    useEffect(() => {
      fetchClient();
    }, []);

    const deleteClient = async () => {
      try {
        await axios.delete(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    };

    const renderProfileImage = () => {
      if (!client.profileImage) {
        return <img src="placeholder.jpg" alt="Placeholder" />;
      }
      return <img src={client.profileImage} alt="Client Profile" />;
    };


    return (
      <div>
        <h2>Client Details</h2>
        <div>
          {/* <img src={client.profileImage} alt="Client Profile" /> */}
          {renderProfileImage()}
          <h3>{client.name}</h3>
          <p>Mobile Number: {client.phoneNumber}</p>
          <p>Address: {client.address}</p>
          <p>Subscription Type: {client.subscriptionType}</p>
          <button onClick={deleteClient} className="delete-button">Delete</button>
        
        </div>
      </div>
    );
  };
  export default ClientDetails