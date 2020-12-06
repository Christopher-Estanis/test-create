const fs = require('fs-extra')
const exec = require('child_process').exec


const createProject = async () => {
  
  const projectName = process.argv[2]
  
  await exec(`mkdir ${__dirname}/${projectName}`, 
    (error, stdout, stderr) => {
    console.log({ error, stdout, stderr })
  })

  
  await fs.copy('./project', `${__dirname}/${projectName}`, (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  })


}

createProject()
