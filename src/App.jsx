
import './App.css'

function Resume() {
 
  return(
    <div>
      <h2 className='name'>Muhammad Hamza</h2>
      <p id='number'>0326-2152488</p>
      <p id='email'><a>jamhamza7829@gmail.com</a></p>
      <h3 className='object'><b>Job Objectives</b></h3>
      <p id='para'>Seeing a career with future oriented organization, this will provide me a <br></br>
      platforms for become well recognized professional and ultimately attaing
      prestige and pride for the recognized and myself.</p>
      <h3 className='personal'>Personal Informations</h3>
      <h5>Father Name: Ghulam Muhammad</h5>
      <h5>Date of Birth : 03-02-2000</h5>
      <h5>Nationality : Pakistan</h5>
      <h5>Religion : Islam</h5>
      <h5>CNIC No: 31301-2834016-7</h5>
      <h5>Language: Urdu , English , Punjabi</h5>
      <h5>Domicile : Punjab (Rahim yar khan)</h5>
      <h3 className='edu'>Educations</h3>
      <table border={3}>
        <tr>
          <th>Degree</th>
          <th>Years</th>
          <th>Marks/Cgpa </th>
          <th>Board/Univeristy</th>
        </tr>
        <tr>
          <th>Matric</th>
          <th>2017</th>
          <th>762/1100</th>
          <th>Bwp Board</th>

        </tr>
        <tr>
          <th>Ics</th>
          <th>2019</th>
          <th>813/1100</th>
          <th>Bwp Board</th>

        </tr>
        <tr>
          <th>Adp</th>
          <th>2021</th>
          <th>504/800</th>
          <th>Iub</th>

        </tr>
        <tr>
          <th>IT</th>
          <th>2022-24</th>
          <th>3.25</th>
          <th>Iub</th>

        </tr>
      </table>
      <h3 className='skill'>Skills</h3>
      <p>html</p>
      <p>Css</p>
      <p>javascript</p>
      <p>Bootstrap</p>
      <p>Mern Stack</p>
      <p>Asp.net Mvc with C#</p>

      <h3 className='ref'>Reference</h3>
      <p>Referance on the demand</p>
      <h3 className='exp'>Experience</h3>
      



    </div>
    
  

  )
}

export default Resume
