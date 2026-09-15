import {writeFile, readFile} from 'fs/promises';


// await writeFile("student.txt", "ashish");

// console.log("File Written");


const addContent = async (fname, content) => {
    await writeFile(fname, content);
}

const appendContent = async (fname, content) => {
    await writeFile(fname, content, {flag: "a"});
}

const readContent = async (fname) => {
    const data= await readFile(fname, "utf-8");
    return data;
}


// const data = await readFile("./student.txt", "utf-8");
// console.log(data);


await addContent("student.txt", "Name: ")
const data = await readContent("student.txt");
console.log(data);

await appendContent("student.txt", "Ashish Raj Singh");
const data2 = await readContent("student.txt");
console.log(data2);