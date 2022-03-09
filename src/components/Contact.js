const Contact = ({ contact }) => {
  return (
    <div>
      <h3>{contact.full_name}</h3>
      <p>{contact.details}</p>
      <ul>
        <li>email: {contact.email}</li>
        <li>phone: {contact.phone_number}</li>
        <li>
          {contact.addresses.map((address, index) => (
            <ul key={index}>
              <li>{address.line_1}</li>
              <li>{address.line_2}</li>
              <li>{address.zip_code}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Contact
