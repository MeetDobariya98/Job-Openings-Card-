import Card from './componets/card'

const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Support Associate",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "6 weeks ago",
    post: "Machine Learning Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Cybersecurity Analyst",
    tag: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "12 days ago",
    post: "Full Stack Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Jaipur, India"
  }
];


  return (
    <div className='parent'>
        {jobOpenings.map(function(elem){
          return <Card  Company={elem.companyName} 
                        Post={elem.post} 
                        Tag={elem.tag} 
                        Tag2={elem.tag2}
                        Pay={elem.pay}
                        Location={elem.location}
                        Logo={elem.brandLogo}
                        datePosted={elem.datePosted}
                        />
        })}
    </div>
  )
}

export default App
