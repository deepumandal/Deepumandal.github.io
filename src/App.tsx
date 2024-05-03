import React from 'react'
import ProfileCard from './components/homePage/ProfileCard'

const App: React.FC = () => {return (
    <div className='w-sreen h-screen bg-l-background'>

      <div className='laptop:flex laptop:items-end max-w-[1300px] h-full m-auto w-space-avialable'>
        {/* <---------- profile card ----------> */}
        <ProfileCard />
        {/* <---------- profile card ----------> */}
      </div> </div>
  )
}

export default App
