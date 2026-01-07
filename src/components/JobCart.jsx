import React from 'react'

const JobCart = ({ job }) => {

  return (

<div>
<h3>{job.title}</h3>
<p>{job.company}</p>
<p>{job.location}</p>
<a href={job.applyLink} target="_blank">Apply</a>
</div>
    
  )
}

export default JobCart