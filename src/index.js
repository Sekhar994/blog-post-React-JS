// import React from 'react';
// import ReactDOM from 'react-dom';
// import SingleComment from './comment';
// import pic1 from './images/img1.jpg';
// import pic2 from './images/p2.jpg';
// import pic3 from './images/p3.jpg';
// import pic4 from './images/p4.jpg';
// import pic5 from './images/p5.jpg';
// import pic6 from './images/p6.jpg';
// import pic7 from './images/p7.jpg';
// import pic8 from './images/p8.jpg';
// import UserCard from './usercard';

// //import pic2 from './Pictures/img1.jpg';
// // function App 
// // {

// // }
// const App = () => {
//     return(
//         <div className='ui  grid' >
       
       
//        <SingleComment  name='rajasekhar' date='20oct' text='Sahoo' image={pic1} />
//        <SingleComment name='ram chandu' date='22oct' text='Dhruva' image={pic2}/>
//        <SingleComment name='sandeep' date='23oct' text=' AVp' image={pic3} />
//        <SingleComment name='Ashsish' date='24oct' text='Gof Father' image={pic4} />

//        <SingleComment name='vishal' date='20oct' text='Latest' image={pic5} />
//        <SingleComment name='prasanth' date='22oct' text='ASS' image={pic6} />
//        <SingleComment name='sumit' date='23oct' text=' BB' image={pic7} />
//        <SingleComment name='Arun' date='24oct' text='===' image={pic8}/>

//        <UserCard/>


//         </div>
//     )

// }

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )




import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
// import SingleComment from './comment';
// import ReactDOM from 'react-dom/client';
import pic1 from './images/p2.jpg';
import pic2 from './images/p2.jpg';
import pic3 from './images/p3.jpg';
import pic4 from './images/p4.jpg';
import UserCard from './usercard';

const App = () =>{
  return(
    <div >
     
  <div className='ui four column grid'>
 < UserCard name = 'Ashish' description='hi Ashish' image={pic1} />
 < UserCard name = 'Mohit' description='hi Mohit' image={pic2} />
 < UserCard name = 'Aaskh' description='hi Aakash' image={pic3} />
 < UserCard name = 'Sumit' description='hi Sumit' image={pic4} />
 < UserCard name = 'Ashish' description='hi Ashish' image={pic1} />
 < UserCard name = 'Mohit' description='hi Mohit' image={pic2} />
 < UserCard name = 'RajSehkhar' description='hi RajSehkhar' image={pic3} />
 < UserCard name = 'Sumit' description='hi Sumit' image={pic4} />
 
 </div>
<Footer></Footer>
  </div>

  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')


)