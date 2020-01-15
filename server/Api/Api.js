const axios = require("axios")

const gitHubJobs = async (req,res)=>{
    let resultsCount=1, onPage=0
    const allJobs=[]
    const filtered=[]
    while(resultsCount>0){
        let results= await axios.get(`https://jobs.github.com/positions.json?page=${onPage}`)
        let info = results.data
        allJobs.push(...info)
        resultsCount = info.length;
        console.log('got', resultsCount, 'jobs');
        onPage++;
    }
    console.log('got', allJobs.length, 'jobs total')
    // filtered=allJobs.filter(job=>{
    //     jobTitle=job.title.includes("sr")
    // })
    console.log(allJobs)
}

module.exports={
    gitHubJobs
}