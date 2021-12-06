import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <>
      <h2>Meet Our Team</h2>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/sanjay.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Sanjay</h4><span className='textLeft'>GDSC Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/jayasakthi.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Jayasakthi Balaji</h4><span className='textLeft'>Technical Team Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/Harsshanth.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Harsshanth</h4><span className='textLeft'>Project Management Team Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/shivani.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Shivani</h4><span className='textLeft'>Event Management Team Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/Bhuvardhena.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Bhuvardhena</h4><span className='textLeft'>Design Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-10 col-md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'><img src='./images/Ranjani.jpeg' alt=' ' class='rounded' width='155'/></div>
                <div class='ml-3 w-100'>
                  <h4 class='mb-0 mt-0 textLeft'>Ranjani</h4><span className='textLeft'>Public Relations Team Lead</span>
                </div>
              </div>
            </div>
          </div>
 

        </div>
      </div>
    </>
  )
}

export default Profile;