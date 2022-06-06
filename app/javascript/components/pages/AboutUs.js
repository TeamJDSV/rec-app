import React, { Component } from 'react'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@100&family=Open+Sans:wght@300;400&family=Raleway:wght@500;600&display=swap');
</style>
class AboutUs extends Component {
    render() {
        return (
            <>
                <div className='top-bio'>
                    <h3>THE MISSON:</h3>
                    <p>Ladies, gentlemen and animals of all ages, today we present to you “REC S#!T”. With our brand new application we can help you find a fun event and/or function going down near you! Thanks to our groundbreaking and beautiful user friendly interface, we guarantee a streamlined experience from our app to the rest of the world around you. Whether you’re brand new to sunny San Deigo or a long time local, we guarantee you’ll find something to do when you're looking for a good time!</p>
                </div>

                <div className='bottom-bio'>
                    <h3>THE SQUAD:</h3>
                    <div className='bio-cards'>
                        <div className='bio-card'>
                            <img src='https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg' width='300px' height='auto' />

                            <div className='bio'>
                                - Samir Khoury -
                            </div>
                            <div className='bio'>
                                - Frontend - Design Lead -
                            </div>
                            <div className='bio'>
                                As a musical artist / restaurant industy “do-it-all” from New York turned Full-Stack Software Engineer, my transition into the world of coding has been nothing short of amazing and life-changing to say the least. Incredible as it is, on days that coding gets me to the point of wanting to throw my laptop out the window and my monitor right along side with it, it’s the dev community that I interact with everyday that reminds me why I love what we do.

                            </div>
                        </div>

                        <div className='bio-card'>
                            <img src='https://lh3.googleusercontent.com/Mz25wrhUvIIdAOSOZUMtCoFYdw9EE26DwlrLZcK24mJvNd5gvSH4aRyavECzO-U8hXgIchmHHQY1lts3z9oKm00lQj_EB1uAMda2tYZIXv3pUR2zRUiZ04TnTAnKROFW-pVVzGc0=w2400' />


                            <div className='bio'>
                                - Jonathan Fuller -
                            </div>
                            <div className='bio'>
                                - Product Manager -
                            </div>
                            <div className='bio'>
                                I’m a Marine Corps Veteran with a new passion for coding. I got the idea to join the tech field after I evaluated my experience in the military, which was a good time, but I wanted something different. Not wanting to age 20 years every 4 years, I wanted a career where I can take better care of myself mentally and physically.
                            </div>
                        </div>

                        <div className='bio-card'>
                            <img src="https://lh3.googleusercontent.com/kiK6RmV1JCI-SxK14DoXFj183X5P013yVH3E01k5l3G-g7V2iYtT0HuS-dbuRLeBAV7eMSVBbezEWwAUqmdose1np2jTflfl-ALYXLVB7eE9tfq-LjljgtaA5c7URBWPNJFqGmrs=w2400" width='300px' height='auto' />


                            <div className='bio'>
                                - Darwin Rivera -
                            </div>
                            <div className='bio'>
                                - Project Manager -
                            </div>
                            <div className='bio'>
                                I’m a full-stack developer from New York currently living in the Bay Area. I spend my days with my hands in many different areas of web development from back end programming ( Ruby on Rails) to front end engineering (HTML, CSS, Javascript and React).
                            </div>
                        </div>

                        <div className='bio-card'>
                            <img src='https://lh3.googleusercontent.com/K3vbK9UJq6KZq9vf2ThuVrTXVVStbdT45uv46pLNS6wQGGbxemsWLmPImfkygAHWuW3Va3KTOlvRHyZLaFV7Tk0D4swIhsOiEMODv-SJ79aYe_JVrsNA6p1uw64eBBKU6SS1LwQd=w2400' width='300px' height='auto' />


                            <div className='bio'>
                                - aVictorWXYZ  -
                            </div>
                            <div className='bio'>
                                -  Backend - Tech Lead -
                            </div>
                            <div className='bio'>
                                A native English and Spanish speaker currently developing skills as a computer program developer living on the Pacific coast. Open to paid or mentored work anywhere in the world so long as it's fully remote.  aVictorWXYZ@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutUs