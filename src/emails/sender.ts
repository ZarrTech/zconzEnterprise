export async function sendEmail(to:string,subject:string,html:string){console.log(JSON.stringify({level:'info',event:'email.send',to,subject}));}
