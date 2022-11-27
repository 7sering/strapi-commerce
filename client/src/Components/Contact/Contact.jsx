import Facebook from "@mui/icons-material/Facebook"
import Instagram from "@mui/icons-material/Instagram"
import Twitter from "@mui/icons-material/Twitter"
import YouTube from "@mui/icons-material/YouTube"

import "./Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div class="wrapper">
            <span>BE IN TOUCH WITH US!</span>
            <div className='mail'>
                <input type="text" placeholder='Enter your email..' className=''/>
                <button>Join Us</button>
            </div>
            <div className='icons'>
                <Facebook/>
                <Instagram/>
                <Twitter/>
                <YouTube/>
            </div>
        </div>
    </div>
  )
}

export default Contact