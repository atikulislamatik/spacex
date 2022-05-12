import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpacex, spacexSelector } from './store/reducers/spacex/spacexSlice'


const App = () => {
  const dispatch = useDispatch()
  const { spacex, loading, hasErrors } = useSelector(spacexSelector)

  useEffect(() => {
    dispatch(fetchSpacex())
  }, [dispatch])

  const renderSpacex = () => {
    if (loading) return <p>Loading Spacex...</p>
    if (hasErrors) return <p>Cannot display Spacex...</p>

    return spacex.map(spacex =>
      <div key={spacex.flight_number} className='tile'>
       <h3>
         {spacex.mission_name}
       </h3>
      </div>
    )
  }

  return (
    <section>
      <h1>Spacex</h1>
      <div className='content'>
        {renderSpacex()}
      </div>
    </section>
  )
}

export default App