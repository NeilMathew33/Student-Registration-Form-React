import React from 'react'

const StudentNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Student Information</a>
        <a class="nav-link" href="/search">Search Student</a>
        <a class="nav-link" href="/delete">Delete Student</a>
        <a class="nav-link" href="/ViewAll">View all students</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default StudentNavBar