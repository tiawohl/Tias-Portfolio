export default function Contact () {
    return (
        <div>
          <main id="wrapper">
            <div className="container">
              <form action="action_page.php">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="Your First Name" required />
                
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" required />
                
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="emailaddress" placeholder="Your Email Address" required />
                
                <label htmlFor="subject">What's Up</label>
                <textarea id="subject" name="subject" placeholder="Comment" style={{ height: '200px' }} required></textarea>
                
                <button type="submit">Submit</button>
              </form>
            </div>
          </main>
        </div>
      );
}