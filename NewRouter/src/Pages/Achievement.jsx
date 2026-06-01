import React from 'react'

const Achievement = () => {
  return (
    <div>
      <div className="bg-orange-400 text-black w-full py-16 px-4 md:px-10">

  <h2 className="text-center text-3xl font-bold mb-10">
    My Achievements
  </h2>

  <div className="grid md:grid-cols-3 text-center gap-6">

    <div>
      <h1 className="text-4xl font-bold">5+</h1>
      <p>Projects Completed</p>
    </div>

    <div>
      <h1 className="text-4xl font-bold">6+</h1>
      <p>Web Apps Built</p>
    </div>

    <div>
      <h1 className="text-4xl font-bold">2+</h1>
      <p>Years Experience</p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Achievement
