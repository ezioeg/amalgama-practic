import Contact from '../components/Contact'
import { truncateString } from '../utils/truncateString'
import { findNameByID } from '../utils/findNameByID'

const Contacts = ({ contacts, cities, states }) => {
  const contactsToDisplay = contacts.map((contact) => ({
    id: contact.id,
    full_name: `${contact.first_name} ${contact.last_name}`,
    details: truncateString(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findNameByID(cities, address.city_id),
      state: findNameByID(states, address.state_id),
    })),
  }))

  return contactsToDisplay.map((contact) => (
    <Contact contact={contact} key={contact.id} />
  ))
}

export default Contacts
