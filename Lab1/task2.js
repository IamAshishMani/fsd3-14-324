const f1 = () => {
    console.log("f1")
}

const f2 = () => {
    console.log("f2")
}

const writeData = async () => {
    try {
        console.log("About to write...")
        await fs.writeFile("stud.txt", "ashish")

        console.log("Written");
    } catch (e) {
        console.log(e);
    }
}


const main = () => {
    console.log("main")
        setTimeout(f1, 0);
        setTimeout(f2, 0);
        

        console.log("end");
}

main()