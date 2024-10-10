import React from 'react';
import acrimony from '../Images/acrimony.jpg';
import annebelle from '../Images/annabelle.jpg';
import insidious from '../Images/insidious.jpg';
import getout from '../Images/getout.jpg';
import theconjuring from '../Images/theconjuring.jpg';
import us from '../Images/us.jpg';


function Home() {
    return (
        <div>
          <div class="all-skills">

<div class="headers">
     <h1>Top 6 Favourite Movies</h1>
 </div>
 <div class="skill-container">
     <div class="skill-box">
         <div class="skill-title">
             <div class="language-images">
                 <img src={theconjuring} class="skill-icon"/>
             </div>
             <h3>The Conjuring</h3>
         </div>
         <p>Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess.</p>
     </div>

 <div class="skill-box">
         <div class="skill-title">
             <div class="language-images">
                 <img src={insidious} class="skill-icon"/>
             </div>
             <h3>Insidious</h3>
         </div>
         <p>Insidious is an American horror franchise created by Leigh Whannell and James Wan that has been produced by Blumhouse in association with Sony’s Stage 6 Films since 2010. The films in the franchise include Insidious, Chapter 2, Chapter 3, The Last Key, and The Red Door.</p>
     </div>

 <div class="skill-box">
     <div class="skill-title">
         <div class="language-images">
             <img src={getout} class="skill-icon"/>
         </div>
         <h3>Get Out</h3>
     </div>
     <p>A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.</p>
 </div>

 <div class="skill-box">
     <div class="skill-title">
         <div class="language-images">
             <img src={annebelle} class="skill-icon"/>
         </div>
         <h3>Annabelle</h3>
     </div>
     <p>John and Mia Form are attacked by members of a satanic cult that uses their old doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence.</p>
 </div>

<div class="skill-box">
 <div class="skill-title">
     <div class="language-images">
         <img src={acrimony} class="skill-icon"/>
     </div>
     <h3>Acrimony</h3>
 </div>
 <p>Melinda, a faithful and hardworking wife, gets tired of standing by her dishonest and unfaithful husband and begins to plan vengeance against him. Firebase database was utilised for storing information. </p>
</div>

<div class="skill-box">
<div class="skill-title">
 <div class="language-images">
     <img src={us} class="skill-icon"/>
 </div>
 <h3>Us</h3>
</div>
<p>In order to get away from their busy lives, the Wilson family takes a vacation to Santa Cruz, California. At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them.</p>
</div>
</div>
</div>
        </div>
    );
}

export default Home;