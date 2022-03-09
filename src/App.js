import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Contacts from '../src/views/Contacts'
import { contacts, states, cities } from '../src/data-mockup/dataMockup'

function App() {
  useEffect(() => {
    console.log('Redux Store: ', store.getState())
  }, [])
  return (
    <Provider store={store}>
      <Contacts contacts={contacts} cities={states} states={cities} />
    </Provider>
  )
}

export default App
